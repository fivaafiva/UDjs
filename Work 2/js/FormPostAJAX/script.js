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
    
    function sendForm(elem, clearInput) {
        elem.addEventListener('submit', event => { //привязываем фомре самбит   
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('satus');

            event.preventDefault(); //что бы страница не перезагружалась 
            elem.appendChild(statusMessage);

            let formData = new FormData(elem); // спец конструктор для форм

            //преобразование фаила в json
            let obj = {};
            formData.forEach( (value, key) => {
            obj[key] = value;
            });

            let json = JSON.stringify(obj);

            function postData () {
                return new Promise ( (resolve, reject) => {
                    let request = new XMLHttpRequest ();
    
                    request.open('POST', 'server.php'); 
                    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
        
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject();
                        }
            
                    });

                    request.send(json); //отправляем данные из формы!
                });
            }
        
            postData().then(() => statusMessage.textContent = message.loading)
                      .then(() => statusMessage.textContent = message.sucsess)
                      .catch(() => statusMessage.textContent = message.failure)
                      .then (() => {
                        //очиска импута после нажатия кнопки отправить!
                            for (let i = 0; i < clearInput.length; i++) {
                                clearInput[i].value ='';
                            }
                      });
                      
        });
    }
    sendForm(formModal, inputModal);
    sendForm(formContact, inputContact);
});