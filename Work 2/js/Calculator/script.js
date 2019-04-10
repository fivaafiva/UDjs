window.addEventListener('DOMContentLoaded', () => { //Сначала загружаем DOM элементы страницы 

    'use strict';

    let person = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('#select'),
        total = document.querySelector('#total'),
        totalSum = 0,
        x = 300;


        person.addEventListener('change', function() {
            if (restDays.value == '' || this.value == '') {
                total.textContent = 0;
            } else {
                totalSum = (this.value + restDays.value) * x;
                total.textContent = totalSum;
            }

        });

        restDays.addEventListener('change', function() {
            if (person.value == '' || this.value == '') {
                total.textContent = 0;
            } else {
                totalSum = (this.value + person.value) * x;
                total.textContent = totalSum;
            }

        });
    
        place.addEventListener('change', function() {
            if (restDays.value == '' || person.value == '') {
                total.textContent = 0;
            } else {
                let a = totalSum;
                total.textContent = a * this.options[this.selectedIndex].value;
            }
        });
});