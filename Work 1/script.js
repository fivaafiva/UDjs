'use strict';

let q1, q2, budjet = 5000, /*+prompt('Ваш бюджет на месяц');*/
  time = "2018-05-21",/*prompt('Введите дату в формате YYYY-MM-DD');*/
  appData = {
  budjetData: budjet,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: Array(),
  saving: false
};
for (let i = 0; i < 2; i++) {
   q1 = prompt('Введите обязательную статью расходов в этом месяце');
   q2 = prompt('Во сколько обойдется?');
   appData.expenses.q1 = q2;
} 
//appData.expenses.q1 = ; 
console.log('бюджет на 1 день из 30 = ' + (appData.budjetData / 30).toFixed(2) + 'у.е');