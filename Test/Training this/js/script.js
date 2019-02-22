

// //ES5
// function User(name, age) { //название фунцкии обязательно с большой буквы
// 	this.name = name;  // Эта функция User, будет объектом в котором содежится ключ значение
// 	this.age = age;
// 	this.human = true;
// 	this.hello = function () { //добавление метода
// 		console.log('Hello! ' +  this.name);
// 	};
// }

// User.prototype.exit = function (name) { //прототипное добавление метода
	
// 	console.log('Пользователь ' + this.name + ' ушлел');

// };

// let ivan = new User ('Ivan', 24),
// 	alex = new User ('Alex', 25);

// console.log(ivan);
// console.log(alex);
// console.log( alex.hello() );
// console.log( ivan.hello() );
// console.log ( alex.exit() );

//ES6
//'use strict';
// class User {
// 	constructor (name, age) {
// 		this.name = name;  
// 		this.age = age;
// 		this.human = true;
// 	}
// 	hello() {
// 		console.log (`Hello! ${this.name}`);
// 	}
// 	exit() {
// 		console.log (`Пользователь ${this.name} ушел`);
// 	}
// }
// let ivan = new User ('Ivan', 24),
// 	alex = new User ('Alex', 25);

// console.log(ivan);
// console.log(alex);
// console.log( alex.hello() );
// console.log( ivan.hello() );
// console.log ( alex.exit() );

////////////////////////////////////////////////////////////

////////////////////////////// 1. Просто вызов фунцкии - window / undefiend
// function showThis (a, b) {
// 	console.log(this); 
// 	function sum () {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log( sum() );
// }
// showThis(4, 5);


////////////////////////////// 2. Метод объекта - this = объект
// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log (this);
// 	}
// };
// obj.sum();


////////////////////////////// 3. Конструктор (new) - this = новый созданный объект
// let ivan = new User ('Ivan', 24);


////////////////////////////// 4. Указание конкретного коннтекста - call, apply, bind

// let user = {
// 	name: 'John'
// };

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name +' '+ surname);
// }

// console.log( sayName.call(user, 'Smith') );
// console.log( sayName.apply(user, ['Snow', 'Deph']) );

// function count (number) {
// 	return this * number;
// }
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(5));

////////////////////////////// 5. This - в контексте DOM

let age = document.getElementById('age');
function showUser(surname, name) {
	console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['Petrov','Ivan']);