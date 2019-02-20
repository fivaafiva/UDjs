window.addEventListener('DOMContentLoaded', () => { //Сначала загружаем DOM элементы страницы 

    'use strict';

    let deadline = '2019-02-22T01:20:50'; //вводим дату 
    
    function getTimeRemaning (endtime) {  // Функция определения даты
        let t = Date.parse(endtime) - Date.parse( new Date() ),

        seconds = Math.floor( (t / 1000) % 60 ),
        minutes = Math.floor ( (t / 1000 / 60) % 60 ),
        hours = Math.floor ( (t / (1000*60*60)) % 24 ),
        days = Math.floor ( t / (1000 * 60 * 60 * 24) );

        return { //возврат в объект
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }


    function setClock(id, endtime) { // фунцкия установки таймера 
        let timer = document.getElementById(id), //определяем айдишник
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // устанавливаем интервал отсчета 

        function updateClock () {  //фунцкия отсчета таймера
            let t =getTimeRemaning(endtime);

            function addZero (num) { //функция добавления нуля при одном числе в ячейке времени
                let count = (Math.log(Math.abs(num)+1) * 0.43429448190325176 | 0) + 1; //определение количеста символов в типе num
                if ( count == 1 ) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            //вставляем значения в верстку
            seconds.textContent = addZero(t.seconds); 
            minutes.textContent = addZero(t.minutes);
            hours.textContent = addZero(t.hours);
            days.textContent = addZero(t.days);

            //менее копмпактный вариант
            /*if ( checkClockLength(t.seconds) == 1 ) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }
            if ( checkClockLength(t.minutes) == 1 ) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }
            if ( checkClockLength(t.hours) == 1 ) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            if ( checkClockLength(t.days) == 1 ) {
                days.textContent = '0' + t.days;
            } else {
                days.textContent = t.days;
            }*/
    
            if (t.total <= 0 ) { //окончание отсчета
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }
        }

    }

    setClock('timer', deadline);
});