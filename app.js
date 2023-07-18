/*
     тз

     Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
     К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
     Выведете в консоль:
     Boolean переменную успеете ли вы взяться за работу
     Сколько вы за неё попросите?
 */

const hourlyPay = 80; // оплата в час
const hourlyWork = 5; // количество рабочих часов
const daysWeek = 7;  //количество дней недели
const daysWeekend = 2; // выходные дни
const projectHourly = 40; //  время на проект
const freeDays = 11 // количество свободных дней

const workDays = projectHourly / hourlyWork; // количество рабочих дней
console.log('дней работы ' + workDays);
const allDaysWokproject = workDays + daysWeekend; // рабочие + выходные дни
console.log('рабочие + выходные дни ' +allDaysWokproject);
const  takeAnOrder = allDaysWokproject < freeDays; // булевое значение брать заказ или нет
console.log('беру заказ или нет ' +takeAnOrder);
const cashOrder = hourlyPay * projectHourly; //  сумма за работу
console.log('сумма за работу ' + cashOrder);


