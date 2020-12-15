export const validation = (values) => {
  const errors = {};
  console.log(values);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  errors.name = isRequired();
  errors.lastname = isRequired();
  errors.email = isRequired();
  errors.password = isRequired();
  errors.repeatPassword = isRequired();
  errors.currentEmail = isRequired();
  errors.currentPassword = isRequired;

  if (values.name && values.name.length < 3) {
    errors.name = 'Минимальная длина должна быть больше 3 символов';
  }
  if (values.lastname && values.lastname.length < 3) {
    errors.lastname = 'Минимальная длина должна быть больше 3 символов';
  }

  if (!re.test(String(values).toLowerCase())) {
    errors.email = 'Некорректный email';
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Длина пароля должна быть не менее 6 символов';
  }
  if (values.password !== values.repeatPassword) {
    errors.password = 'Пароли должны совпадать';
  }
  if (!re.test(String(values).toLowerCase())) {
    errors.currentEmail = 'Некорректный email';
  }

  return errors;
};
const isRequired = (values) => {
  if (!values) {
    return 'Поле обязательно для заполения';
  }
};
