'use strict';

const rubInput = document.querySelector('#RUB input'),
      usdInput = document.querySelector('#USD input'),
      dateToday = document.querySelector('#date-today');

usdInput.addEventListener('input', () => {

   const request = new XMLHttpRequest();

   const proxy = 'https://cors-anywhere.herokuapp.com/', //CORS ERROR FIX ;)
         url = 'https://www.cbr-xml-daily.ru/daily_json.js' ;

   request.open('GET', proxy+url);
   request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
   request.send();

   request.addEventListener('readystatechange', () => {

        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            const x = usdInput.value * data.Valute.USD.Value;
            rubInput.value =  x.toFixed(2);

            const date = new Date(data.Date);
            dateToday.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            console.log(date);

        }

   });

});