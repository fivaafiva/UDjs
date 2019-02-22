"use strict";

//создаем пятый элемент списка UL
let ul = document.querySelector('.menu'),
    li = document.createElement('li');
li.textContent = 'Пятый пункт';
li.classList.add('menu-item');
ul.appendChild(li);

//заменить картинку на заднем фоне
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

//поменять заголовок 
let div = document.querySelector('#title');
div.innerHTML= 'Мы продаем только <strong>подлинную</strong> технику Apple';

//Удалить рекламу 
let divSecond = document.querySelectorAll('.column')[1],
    divDel = divSecond.querySelectorAll('div')[1];
divSecond.removeChild(divDel);
//Cпроситть пользователя про технику эпл 
let divThird = document.querySelector('#prompt');
    
while (true) {
    let q1 = prompt('Как вы относитесь к технике Apple ?');
    if ( (q1 != null) && (q1 != '') && (15 > q1.length) ) {
        divThird.innerHTML = q1;
        break;
    } else {
        alert('Что то пошло не так!')
    }
}

