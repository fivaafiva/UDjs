window.addEventListener('DOMContentLoaded', () => { //Сначала загружаем DOM элементы страницы 

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), //кнопки 
        info =  document.querySelector('.info-header'), //родительский блок кнопок
        tabContent = document.querySelectorAll('.info-tabcontent'); //контент для кнопок

    function hideTabContent(a) { //функция изменения класса контента кнопок в зависимомти от переденного параметра. Начинает заменять все после переданого параметра. 
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); //Оставляем нулевой, остальное убираем

    function showTabContect(b) { //Показываем только выбранный контент
        if ( tabContent[b].classList.contains('hide') ) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) { //делегирование событий ! //проверяем родительский блок кнопок
        let target = event.target; //выбранный таргет записываем в переменную
        if ( target && target.classList.contains('info-header-tab') ) { //проверяем соотвествие таргета и класса кнопки
             for (let i = 0; i < tab.length; i++) { //считаем кол-во кнопок
                 if (target == tab[i]) { //сопоставляем нажатую кнопку
                    hideTabContent(0); // меняем классы контента на скрытый
                    showTabContect(i); //отображаем тот контент который соотвествует порядковому номеру кнопки
                    break;
                 }
             }
        }
    });

});