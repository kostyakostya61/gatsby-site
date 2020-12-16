export const validation = (values) => {
  const errors = {};
  console.log(values);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  errors.name = isRequired(values.name);
  errors.lastname = isRequired(values.lastname);
  errors.email = isRequired(values.email);
  errors.password = isRequired(values.password);
  errors.repeatPassword = isRequired(values.repeatPassword);

  if (values.name && values.name.length < 3) {
    errors.name = 'Минимальная длина должна быть больше 3 символов';
  }
  if (values.lastname && values.lastname.length < 3) {
    errors.lastname = 'Минимальная длина должна быть больше 3 символов';
  }

  if (!re.test(String(values.email).toLowerCase())) {
    errors.email = 'Некорректный email';
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Длина пароля должна быть не менее 6 символов';
  }
  if (values.password !== values.repeatPassword) {
    errors.password = 'Пароли должны совпадать';
  }

  return errors;
};

export const loginValidation = (values) => {
  const errors = {};
  console.log(values);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  errors.email = isRequired(values.email);
  errors.password = isRequired(values.password);
  if (!re.test(String(values.email).toLowerCase())) {
    errors.email = 'Некорректный email';
  }
  return errors;
};
const isRequired = (values) => {
  if (!values) {
    return 'Поле обязательно для заполения';
  }
};
