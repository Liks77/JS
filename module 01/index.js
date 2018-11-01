'use strict'
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let adminVerify = prompt ('введите логин');
if (adminVerify === null) {
    alert('Отменено пользователем!')}
    else {
        if (adminVerify !== adminLogin) {
        alert('Доступ запрещен!')}
        else {
            let adminVerify = prompt ('введите пароль');
            if (adminVerify === null) {
                alert('Отменено пользователем!') }
                else {
                    if (adminVerify !== adminPassword) {
                    alert('Доступ запрещен!')}
                    else {
                        alert('Добро пожаловать')
                    }
            }  
        }
    }
