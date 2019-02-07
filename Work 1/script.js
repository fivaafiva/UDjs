'use strict';
//Объявляем глобальные переменные
let budget,time;
//Фунцкия определения бюджета и даты
function start() {
  budget = 5000; //parseInt( prompt('Ваш бюджет на месяц', '') );
  time = '2018-05-21';//prompt('Введите дату в формате YYYY-MM-DD', '');
  while ( isNaN(budget) ) {
    alert ('Вы не правильно ввели бюджет на месяц', '');
    budget = parseInt( prompt('Ваш бюджет на месяц', '') );
  }
}
start();
//Объект с данными 
let appData = {
    budgetData: budget,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {  //Функция>Цикл и проверка статей расходов
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
    },
    detectDayBudget: function() {  //Функция определения бюджета на один день и записи в объект с данными 
      appData.moneyPerDay = +(appData.budgetData / 30).toFixed(2); 
      console.log('Бюджет на 1 день из 30: ' + appData.moneyPerDay + ' у.е');
    },
    detectLevel: function() {  //Функция определения уровня достатка
      if (appData.moneyPerDay < 100 ) {
        console.log('Минимальный уровень достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
      } else {
        console.log('Произошла ошибка');
      }
    },
    checkSavings: function() {  //Функция проверки накоплений и вывод дохода в месяц с депозита
      if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений'),
        persent = +prompt('Под какой процент');
    
        appData.monthIncome = Math.round(save / 100 / 12 * persent);
        console.log('Доход в месяц с вашего депозита: ' + appData.monthIncome + ' у.е');
      }
    },
    chooseOptExpenses: function() {  //функция выбора необязательных статей расходов
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
    },
    chooseIncome: function() { //Фунцкия определения доп. дохода
      while (true) {
        let items = prompt('Что принесет дополнительный доход? (Перечисли через запятую)', '');
        if ( (items != null) && (items != '') && (items.length < 20) && (typeof(item) != 'string') ) {
          appData.income = items.split(', ');
          appData.income.push(prompt('Может что то еще?'));
          appData.income.sort();
          break;
        } else {
          alert('Вы не првильно ввели данные о доходах');
        }
      }
      let rezultStr = ''; // перебор всех данных масива 
      appData.income.forEach((item, i) => {
        rezultStr += (i + 1 + ': ') + item + '\n';
      });
      alert('Cпособы доп зароботка : \n' + rezultStr);
    }
};
for (let keys in appData) {
  console.log(keys+ ': ' + appData[keys]);
}