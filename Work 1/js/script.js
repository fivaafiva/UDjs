'use strict';
//Объявляем глобальные переменные
let budget,time;
//Выбор элементов DOM
let budgetValue = document.querySelectorAll('.result-table [class$="value"]')[0],
    dayBudgetValue = document.querySelectorAll('.result-table [class$="value"]')[1],
    levelValue = document.querySelectorAll('.result-table [class$="value"]')[2],
    expensesValue = document.querySelectorAll('.result-table [class$="value"]')[3],
    optionalExpensesValue = document.querySelectorAll('.result-table [class$="value"]')[4],
    incomeValue = document.querySelectorAll('.result-table [class$="value"]')[5],
    monthSavingValue = document.querySelectorAll('.result-table [class$="value"]')[6],
    yearsSavingValue = document.querySelectorAll('.result-table [class$="value"]')[7],

    expensesItem = document.querySelectorAll('.expenses-item'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    btnExpensesRequired = document.querySelectorAll('button')[0],
    btnExpensesOptional = document.querySelectorAll('button')[1],
    btnBudgetCalc = document.querySelectorAll('button')[2],
    btnStartCalc = document.getElementById('start'),

    chooseIncome = document.querySelector('#income'),
    checkBoxSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

//Click, Фунцкия определения бюджета и даты, кнопка "НАЧАТЬ РАСЧЕТ"
btnStartCalc.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  budget = +prompt('Ваш бюджет на месяц', '');
 
  while ( isNaN(budget) || (budget == '') || (budget == null) ) {
    alert ('Вы не правильно ввели бюджет на месяц', '');
    budget = +prompt('Ваш бюджет на месяц', '');
  }
  appData.timeData = time;
  appData.budgetData = budget;
  budgetValue.textContent = appData.budgetData.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();

  btnExpensesRequired.disabled = false;
  btnExpensesRequired.classList.toggle('expenses-item-btn-off');
  btnExpensesRequired.classList.toggle('expenses-item-btn');
  btnExpensesOptional.disabled = false;
  btnExpensesOptional.classList.toggle('optionalexpenses-btn-off');
  btnExpensesOptional.classList.toggle('optionalexpenses-btn');
  btnBudgetCalc.disabled = false;
  btnBudgetCalc.classList.toggle('count-budget-btn-off');
  btnBudgetCalc.classList.toggle('count-budget-btn');

});
//Click, Функция определения обязательных статей расхода, кнопка "Утвердить"
btnExpensesRequired.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let q1 = expensesItem[i].value,
        q2 = +expensesItem[++i].value;
    if ( (q1 != null) && (q2 != null) && (q1 != '') &&
       (q2 != '') && (q1.length < 20)  ) {
        console.log('loop done');
        appData.expenses[q1] = q2;
        sum += q2;
    } else {
      alert('Вы не првильно ввели данные о расходах');
      i--;
    }
  }
  expensesValue.textContent = sum;
});
//Click, Функция определения необязательных статей расхода, кнопка "Утвердить"
btnExpensesOptional.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let q3 = optionalExpensesItem[i].value;
    if ( (q3 != null) && (q3 != '') && (q3.length < 20)  ) {
        console.log('done #' + i);
        appData.optionalExpenses[i] = q3;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    } else {
      alert('Вы не првильно ввели данные о расходах');
      break;
    }
  }
});
//Click, Фунция определения бюджета на 1 день, уровня дохода, кнопка "Рассчитать"
btnBudgetCalc.addEventListener('click', function() {
  let expReq = 0;
  if (appData.budgetData != undefined) {

    for (let key in appData.expenses) {
    expReq += appData.expenses[key]; // Дублирование кода, но для тренировки!
    }

    appData.moneyPerDay = +( (appData.budgetData - expReq) / 30 ).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100 ) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});
//Input, Фунцкия определения доп. дохода.
chooseIncome.addEventListener('input', function() {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});
//Click, Фунцкия определения накоплений, чекбокс
checkBoxSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else { 
    appData.savings = true;
  }
});
//
chooseSum.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent =+choosePercent.value;
    appData.monthIncome = Math.round(sum / 100 / 12 * percent);
    appData.yearIncome = Math.round(sum / 100 * percent);

    monthSavingValue.textContent = appData.monthIncome.toFixed(1);
    yearsSavingValue.textContent = appData.yearIncome.toFixed(1);

  }
});
//
choosePercent.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent =+choosePercent.value;
    appData.monthIncome = Math.round(sum / 100 / 12 * percent);
    appData.yearIncome = Math.round(sum / 100 * percent);

    monthSavingValue.textContent = appData.monthIncome.toFixed(1);
    yearsSavingValue.textContent = appData.yearIncome.toFixed(1);
  }
});
//Объект с данными 
let appData = {
    budgetData: budget,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
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
      appData.moneyPerDay = +(appData.budgetData / 30).toFixed(); 
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
//Перебор ключей и данных объекта
// for (let keys in appData) {
//   console.log(keys+ ': ' + appData[keys]);
// }
