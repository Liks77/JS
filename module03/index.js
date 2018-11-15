'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    return login.length >= 4 && login.length <=16;
};

const isLoginUnique = function (logins, login) {
        return logins.includes (login);
};

const addLogin = function(logins,login) {
    if (isLoginValid(login)) {
      if (!isLoginUnique(logins,login)) {
          logins.push(login)
                return'Логин успешно добавлен!';
            } else {
                return 'Такой логин уже используется!';
            }  
    } else {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
    };
    console.log(addLogin(logins,'Ajax')); // 'Логин успешно добавлен!'
    console.log (addLogin(logins,'robotGoogles')); // 'Такой логин уже используется!'
    console.log(addLogin(logins,'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
    console.log(addLogin(logins,'jqueryisextremelyfast')); //'Ошибка! Логин должен быть от 4 до 16 символов'