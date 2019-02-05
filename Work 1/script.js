'use strict';
//Объявляем глобальные переменные
let budget,time;
//Фунцкия определения бюджета и даты
function start() {
  budget = 5000; //parseInt( prompt('Ваш бюджет на месяц') );
  time = '2018-05-21';//prompt('Введите дату в формате YYYY-MM-DD');
  while ( isNaN(budget) ) {
    alert ('Вы не правильно ввели бюджет на месяц');
    budget = parseInt( prompt('Ваш бюджет на месяц') );
  }
}
start();
//Объект с данными 
let appData = {
    budgetData: budget,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: Array(),
    savings: true
};
//Функция>Цикл и проверка статей расходов
function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let q1 = prompt('Введите обязательную статью расходов в этом месяце'),
        q2 = prompt('Во сколько обойдется?');
    if ( (q1 != null) && (q2 != null) && (q1 != '') &&
       (q2 != '') && (q1.length < 20)  ) {
        console.log('done #' + i);
        appData.expenses[q1] = q2;
    } else {
      alert('Вы не првильно ввели данные о расходах');
      i--;
    }
  }
}
chooseExpenses();
//Функция определения бюджета на один день и записи в объект с данными 
function detectDayBudget () {
  appData.moneyPerDay = +(appData.budgetData / 30).toFixed(2); 
  console.log('Бюджет на 1 день из 30: ' + appData.moneyPerDay + ' у.е');
}  
detectDayBudget();
//Функция определения уровня достатка
function detectLevel() {
  if (appData.moneyPerDay < 100 ) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}
detectLevel();
//Функция проверки накоплений и вывод дохода в месяц с депозита
function checkSavings() {
  if (appData.savings == true){
    let save = +prompt('Какова сумма накоплений'),
    persent = +prompt('Под какой процент');

    appData.monthIncome = Math.round(save / 100 / 12 * persent);
    console.log('Доход в месяц с вашего депозита: ' + appData.monthIncome + ' у.е');
  }
}
checkSavings();
//функция выбора необязательных статей расходов
function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let q3 = prompt ('Статья необязательных расходов');
    if ( (q3 != null) && (q3 != '') && (q3.length < 20)  ) {
        console.log('done #' + i);
        appData.optionalExpenses[i+1] = q3;
    } else {
      alert('Вы не првильно ввели данные о расходах');
      i--;
    }
  }
}
chooseOptExpenses();