'use strict';
///////////////////////////Интерполяция//////////////////////
let userName = 'Ivan',
    age = 30,
    mail = 'ex@mail.ru';

//ES5
document.write('Пользователю ' + userName + ' ' + age + ' лет. Его почта: ' + mail +'<br>');

//ES6
document.write(`Пользователю ${userName}, ${age} лет. Его почта: ${mail}`);
/////////////////////////////////////////////////////////////

///////////////////////////let, const////////////////////////
//ES5, var создает переменную 'i' на всю прогу, i = 10 после цикла
// function makeArray() {
//     var items =[];

//     for (var i = 0; i < 10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();

// arr[1](); //== 10
// arr[3](); //== 10
// arr[7](); //== 10


//ES6 C let 'i' после цикла сбрасывается
function makeArray() {
    var items =[];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1](); //==1
arr[3](); //==3
arr[7](); //==7
/////////////////////////////////////////////////////////////

///////////////////////////Arrow func////////////////////////

let fun = () => { //стрелочная фунцкия не имеет своего контекста, наследует от родителя
    console.log(this);
};
fun();

let obj = {
    number:5,
    sayNum: function() {
        let say = () => { //контектс вызова объект, унасл у родителя
            console.log(this);
        };
        say();
    }
};
obj.sayNum();
/////////////////////////////////////////////////////////////

///////////////////////////Параметры по умолчанию////////////

function calcOrDouble(numer, baisis = 2) {
    //basis = basis || 2; //ES5
   console.log (numer * baisis);
}
calcOrDouble(2,2);
calcOrDouble(4);
/////////////////////////////////////////////////////////////

///////////////////////////CLASS/////////////////////////////

class Rectangle {
    constructor(height, width = 20) { //можно задать пар. по ум.
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());
/////////////////////////////////////////////////////////////

///////////////////////////Spread////////////////////////////

let video = ['youtube', 'vimeo', 'rutube'],
    blog = ['wordpress', 'livejournal', 'blogger'],
    //internet = [video, blog, 'vk', 'facebook'];
    internet = [...video, ...blog, 'vk', 'facebook']; //разворачивает масив;

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [2, 5, 7];

log(...numbers);