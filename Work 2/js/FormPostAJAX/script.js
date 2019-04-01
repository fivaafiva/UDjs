window.addEventListener('DOMContentLoaded', () => { //Сначала загружаем DOM элементы страницы 

    'use strict';

    const message = { //лоадер ввиде текста
        loading: 'Загрузка.....',
        sucsess: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так =('
    };

    let formModal = document.querySelector('.main-form'),
        inputModal = formModal.querySelectorAll('input'),
        formContact = document.querySelector('#form'),
        inputContact = document.querySelectorAll('input');
        

    formModal.addEventListener('submit', event => { //привязываем фомре самбит

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('satus');

        event.preventDefault(); //что бы страница не перезагружалась 
        formModal.appendChild(statusMessage);

        let request = new XMLHttpRequest ();
        
        request.open('POST', 'server.php'); 
        request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');

        let formData = new FormData(formModal); // спец конструктор для форм

        //преобразование фаила в json
        let obj = {};
        formData.forEach( (value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);


        request.send(json); //отправляем данные из формы!

        request.addEventListener('readystatechange', () => {

            if (request.readyState < 4) {
                statusMessage.textContent = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.textContent = message.sucsess;
            } else {
                statusMessage.textContent = message.failure;
            }

        });

        //очиска импута после нажатия кнопки отправить!
        for (let i = 0; i < inputModal.length; i++) {
            inputModal[i].value ='';
        }

    });


    formContact.addEventListener('submit', event => { //привязываем фомре самбит
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('satus');

        event.preventDefault(); //что бы страница не перезагружалась 
        formContact.appendChild(statusMessage);

        let request = new XMLHttpRequest ();
        
        request.open('POST', 'server.php'); 
        request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');

        let formData = new FormData(formContact); // спец конструктор для форм

        //преобразование фаила в json
        let obj = {};
        formData.forEach( (value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);


        request.send(json); //отправляем данные из формы!

        request.addEventListener('readystatechange', () => {

            if (request.readyState < 4) {
                statusMessage.textContent = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.textContent = message.sucsess;
            } else {
                statusMessage.textContent = message.failure;
            }

        });

        //очиска импута после нажатия кнопки отправить!
        for (let i = 0; i < inputContact.length; i++) {
            inputContact[i].value ='';
        }

    });






});