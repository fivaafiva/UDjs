'use strict';
// //NO PROMISE //////////////////////
// const drink = 1;

// function shoot(arrow, headshot, fail) {
// 	console.log('Вы сделали выстрел...');

// 	setTimeout(function(){
// 		Math.random() > 0.5 ? headshot({}) : fail('Вы промахнулись');
// 	}, 1000);
// } 
// function win() {
// 	console.log('Вы победили!!');
// 	drink === 1 ? giveBeer() : giveMoney();
// }
// function giveBeer() {
// 	console.log('Вам подарили пиво!');
// }
// function giveMoney() {
// 	console.log('Вам подарили денег');
// }
// function loose() {
// 	console.log('Вы проиграли...');
// }
// shoot ({},
// 	function() {
// 		console.log('Вы попали в цель!');
// 		win();
// 	},
// 	function(miss) {
// 		console.error(miss);
// 		loose();
// 	}
// );
// //////////////////////////////////////////////////////////////////
////////////////////////////USE PROMISE/////////////////////////////
const drink = 1;

function shoot(arrow) {
	console.log('Вы сделали выстрел...');

	const promise = new Promise( function(resolve, reject) {
		setTimeout(function(){
			Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись');
		}, 1000);
	});

	return promise;
} 

function win() {
	console.log('Вы победили!!');
	drink === 1 ? giveBeer() : giveMoney();

	function giveBeer() {
		return console.log('Вам подарили пиво!');
	}
	
	function giveMoney() {
		 return console.log('Вам подарили денег');
	}
}

function loose(miss) {
	console.log(miss);
	console.error('Вы проиграли...');
}



shoot ({}).then(mark => console.log('Вы попали в цель!'))
		  .then(win)
		  .catch(loose);

