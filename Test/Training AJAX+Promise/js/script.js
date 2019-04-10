'use strict';

const rubInput = document.querySelector('#RUB input'),
    usdInput = document.querySelector('#USD input'),
    dateToday = document.querySelector('#date-today');

//Получаем данные с сервера
function getData() {

    return new Promise ( (resolve, reject) => {
        const request = new XMLHttpRequest();

        const proxy = 'https://cors-anywhere.herokuapp.com/', //CORS ERROR FIX ;)
              url = 'https://www.cbr-xml-daily.ru/daily_json.js';

        request.open('GET', proxy + url);
        request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');


        request.addEventListener('readystatechange', () => {

            if (request.readyState <= 4) {
                if (request.readyState === 4 && request.status === 200) {
                    resolve(JSON.parse(request.response)); //выполняется колбек с полученными данными!
                }
            } else {
                reject();
            }
        });
        request.send();

    });
    
}
getData().then( (json) => { 
            const date = new Date(json.Date);
            dateToday.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

            usdInput.addEventListener('input', () => {
                const x = usdInput.value * json.Valute.USD.Value;
                rubInput.value = x.toFixed(2);
            });
         })
         .catch (() =>  rubInput.value = 'Что то пошло не так!');
        
        