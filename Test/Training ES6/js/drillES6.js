'use strict';

let input = document.querySelectorAll('input');

class Options {
    constructor(height, width, background, fontSize, textAlign, color) {
        this.height = height;
        this.width = width;
        this.background = background;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.color = color;
    }
    newDiv() {
        let rightDiv = document.querySelector('.right-side'),
            div = document.createElement('div');
        div.textContent = input[0].value;
        let param = `height:${this.height}px; width:${this.width}px; background:${this.background};
        font-size:${this.fontSize}px; text-align:${this.textAlign}; color:${this.color}`;
        div.style.cssText = param;
        div.classList.add('new-div');
        if (document.querySelector('.new-div')) {
            rightDiv.replaceChild(div, document.querySelector('.new-div'));
        } else {
            rightDiv.appendChild(div);
        }
        
       
    }
}

let btn = document.querySelector('#first-btn');
btn.addEventListener('click', () => {
    let test = new Options (input[1].value, input[2].value, input[3].value, input[4].value, input[5].value, input[6].value);
    test.newDiv();
});



// for (let keys in this) {
//     switch (keys) {
//         case 'fontSize': div.style.fontSize = this[keys]; break;
//         case 'textAlign': div.style.textAlign = this[keys]; break;
//     }
//     div.style.cssText += keys + ': ' + this[keys];
// }