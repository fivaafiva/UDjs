window.addEventListener('DOMContentLoaded', () => { //Сначала загружаем DOM элементы страницы 

    'use strict';

    let sliderIndex = 1; //текущий номер слайда

    const slides = document.querySelectorAll('.slider .slider-item'),
          next = document.querySelector('.slider .next'),
          prev = document.querySelector('.slider .prev'),
          dotWrap = document.querySelector('.slider .slider-dots'),
          dots = document.querySelectorAll('.slider .dot');
    
    function showSlides(n) { //показываем слайд в этой функции 
        if (n > slides.length) { //если макс. число слайда то переходи на первый или последний
            sliderIndex = 1;
        } else if (n < 1) {
            sliderIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none'); //удаляем все слайды 
        dots.forEach(item => item.classList.remove('dot-active')); //удаляем все активные точки

        slides[sliderIndex - 1].style.display = 'block'; //устанавливаем слайд в соотв. с индесом
        dots[sliderIndex - 1].classList.add('dot-active'); //устанавливаем точку в соотв. с индесом
    }

    showSlides(sliderIndex);

    function changeSlide(n) { //функция изменения индекса слайда
        showSlides(sliderIndex += n);
    }
    function currentSlide(n) {
        showSlides(sliderIndex = n);
    }

    //кнопки вперед, назад
    next.addEventListener('click', () =>{
        changeSlide(1);
    });
    prev.addEventListener('click', () =>{
        changeSlide(-1);
    });
        
    dotWrap.addEventListener('click', (event) => { //переключение слайдов по дотам с помощью дел. событий
      for (let i = 0; i < dots.length + 1; i++) { //+1 нужен для того чтобы при нажатии на последний дот, цикл смог дойти до него (length и длинна массива отличаются)
          if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
              currentSlide(i);
          }
      }
    });
    
});