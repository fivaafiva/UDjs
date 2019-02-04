'use strict';
//Узнаем бюджет и дату
let budjet = 5000, /*+prompt('Ваш бюджет на месяц');*/
    time = "2018-05-21";/*prompt('Введите дату в формате YYYY-MM-DD');*/
//Объект с данными
let appData = {
    budjetData: budjet,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: Array(),
    saving: false
};
//Цикл и проверка статей расходов
for (let i = 0; i < 2; i++) {
  let q1 = prompt('Введите обязательную статью расходов в этом месяце'),
      q2 = prompt('Во сколько обойдется?');
  if ( (typeof(q1) != null) && (typeof(q2) != null) &&
      (q1 != '') &&  (q2 != '') && (q1.length < 20)  ) {
      console.log('done #' + i);
      appData.expenses[q1] = q2;
  } else {
    alert('Вы не првильно ввели данные о расходах');
    i--;
  }
}
//Тренировка циклов
/*
let i = 0;
//Цикл While
while (i < 2) {
  let q1 = prompt('Введите обязательную статью расходов в этом месяце'),
      q2 = prompt('Во сколько обойдется?');
  i++;
  if ( (typeof(q1) != null) && (typeof(q2) != null) &&
      (q1 != '') &&  (q2 != '') && (q1.length < 20)  ) {
      console.log('done #' + i);
      appData.expenses[q1] = q2;
  } else {
    alert('Вы не првильно ввели данные о расходах');
    i--;
  }
}
do {
  let q1 = prompt('Введите обязательную статью расходов в этом месяце'),
      q2 = prompt('Во сколько обойдется?');
  i++;
  if ( (typeof(q1) != null) && (typeof(q2) != null) &&
      (q1 != '') &&  (q2 != '') && (q1.length < 20)  ) {
      console.log('done #' + i);
      appData.expenses[q1] = q2;
  } else {
    alert('Вы не првильно ввели данные о расходах');
    i--;
  }
} while (i < 2);
*/
//Записываем бюджет на один день в объект    
appData.moneyPerDay = (appData.budjetData / 30).toFixed(2); 
console.log('Бюджет на 1 день из 30: ' + appData.moneyPerDay + 'у.е');
//Проверяем уровень достатка
if (appData.moneyPerDay < 100 ) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка');
}