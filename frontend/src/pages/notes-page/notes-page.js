import React, { useContext, useState } from 'react';
import style from './notes-page.module.scss';
import image from '../../images/image.png';
import { AuthContext } from '../../components/context/auth-context';
import { useHistory } from 'react-router';
import { Form, Field } from 'react-final-form';
import GoalsForm from '../../components/notes-page-components/goal-form';
import GoalsList from '../../components/notes-page-components/goal-list';

function NotesPage() {
  const [toDoList, setToDoList] = useState([]);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (values) => {
    const copy = [
      ...toDoList,
      {
        id: toDoList.length + 1,
        task: values.task,
        complete: false,
        favoriteColor: values.favoriteColor,
      },
    ];
    console.log(copy);
    setToDoList(copy);
  };

  const auth = useContext(AuthContext);
  let history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  // const onSubmit = (values) => {
  //   console.log(values);
  // };

  const linkArray = [
    {
      name: 'MAIN PAGE',
      href: 'auth-page',
    },
    {
      name: 'FEATURES',
      href: 'features',
    },
    {
      name: 'TECHNOLOGY',
      href: 'technology',
    },
    {
      name: 'CONTACT',
      href: 'contact',
    },
    {
      name: 'EDIT PROFILE',
      href: 'change-data',
    },
  ];

  const linkComponents = linkArray.map((link) => {
    return (
      <div>
        <a href={link.href}>{link.name}</a>
      </div>
    );
  });
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.navigation}>
          <div className={style.brand}>
            <div>
              <img src={image} />
            </div>
            <div>
              <p>CLOUDBUDGET</p>
            </div>
          </div>

          <div className={style.navbar}>
            <div className={style.link}>{linkComponents}</div>
          </div>

          <div className={style.identification}>
            <div className={style.btn}>
              <button onClick={logoutHandler}>LOG OUT</button>
            </div>
          </div>
        </div>

        <div className={style.header}>
          <h3>CLOUDBUDGET</h3>
        </div>
        <div className={style.description}>
          <p>Stay focused on saving money</p>
        </div>
        <div className={style.notes_container}>
          <div className={style.notes_value}>
            <GoalsList
              toDoList={toDoList}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          </div>
          <GoalsForm addTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
