import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';

const GoalsForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');
  const [step, setStep] = useState(true);
  const [favoriteColor, setfavoriteColor] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
    setfavoriteColor(e.currentTarget.value);
  };

  //   const handleSubmit = (values) => {
  //     console.log(values);
  //     e.preventDefault();
  //     addTask(userInput, favoriteColor);
  //     addTask(favoriteColor);
  //     setUserInput('');
  //   };
  const onSubmit = (values) => {
    console.log(values);
    addTask(values);
    // setUserInput('');
  };

  return (
    <>
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              {!step && (
                <div>
                  <label>Favorite Color</label>
                  <Field name="favoriteColor" component="select">
                    <option value=""></option>
                    <option value="#ff0000">❤️ Red</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
                  </Field>
                </div>
              )}
              {step && (
                <Field name="task">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="text"
                      placeholder="Tell me about your goals"
                    />
                  )}
                </Field>
              )}
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
              <button type="submit">Tell</button>
            </form>
          )}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          setStep(!step);
        }}
      >
        Step
      </button>
    </>
  );
};

export default GoalsForm;
