import React from 'react';
import ToDo from './goals';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      <div>
        {toDoList.length > 0 && toDoList.map((todo) => {
          return (
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          );
        })}
      </div>
      <button onClick={handleFilter}>Clear Completed</button>
    </div>
  );
};

export default ToDoList;
