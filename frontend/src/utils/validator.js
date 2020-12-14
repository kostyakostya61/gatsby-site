export const emailValidation = (value) => {
  if (value) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value).toLowerCase())) {
      return 'Некорректный email';
    }
  } else {
    return 'Поле обязательное для заполнения';
  }
};

export const passwordValidationLogin = (value) => {
  if (value) {
  } else {
    return 'Поле обязательное для заполнения';
  }
};

export const passwordValidationRegister = (value) => {
  if (value) {
    if (value.length < 6) {
      return 'Длина пароля должна быть не менее 6 символов';
    }
  } else {
    return 'Поле обязательно для заполнения';
  }
};

export const repeatPasswordValidationRegister = (value, confirm) => {
  const validationPassword = passwordValidationRegister(value);
  if (validationPassword) {
    return validationPassword;
  }
  if (value !== confirm.password) {
    return 'Пароли должны совпадать';
  }
};

export const lastnameValidation = (value) => {
  if (value) {
    if (value.length < 3) {
      return 'Длина имени должна быть не менее 3 символов';
    }
  } else {
    return 'Поле обязательное для заполнения';
  }
};
