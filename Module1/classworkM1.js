'use strict';
// 1. Зайдите в консоль своего браузера. При помощи оператора определения типа уточните тип следующих величин: «Привет», 123, true, «true».
// let a = 'Привет';
// console.log(typeof a);
// let b = 123;
// console.log(typeof b);
// let c = true;
// console.log(typeof c);
// let d = 'true';
// console.log(typeof d);

// 2. Зайдите в консоль своего браузера. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений: 5 + 3, 5 — 3, 5 * 3, 5 / 3.
// let a = 5;
// let b = 3;
// let result;
// result = a + b;
// console.log(result);
// result = a - b;
// console.log(result);
// result = a * b;
// console.log(result);
// result = a / b;
// console.log(result);

// 3. Зайдите в консоль своего браузера. При помощи оператора нахождения остатка от деления %, найдите значения выражений: 5 % 3, 3 % 5.
// let a = 5;
// let b = 3;
// let result;
// result = 5 % 3;
// console.log(result);
// result = 3 % 5;
// console.log(result);

// 4. Зайдите в консоль своего браузера. При помощи оператора + (сложение, склеивание) найдите значения выражений: 5 + ‘3’ , ‘5’ — 3, 75 + ‘кг’.
// let result;
// result = 5 + '3';
// console.log(result);
// result = '5' - 3;
// console.log(result);
// result =  75 + 'кг';
// console.log(result);

// 5. Создайте переменные строкового, числового и булева типов. Выведите их содержимое.
// let a = 'Hello';
// let b = 11;
// let c = true;
// console.log(a);
// console.log(b);
// console.log(c);

// 6. Напишите скрипт, который находит площадь прямоугольника длиной 23см., шириной 10см.
// let rectangularLength = 23;
// let rectangularWidth = 10;
// let result = rectangularLength * rectangularWidth;
// console.log(result);


// 7. (*) Найди двенадцатый элемент последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень))


// 8. (*) Даны размер ипотечного кредита, процентная ставка, кол-во лет. Найти переплату по кредиту.

// _________________________________
// 9) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert
// const num = 3;
// alert(num);

// 10) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)
// let a = 10;
// let b = 2;
// console.log(alert(a + b));

// 11) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result
// let c = 15;
// let d = 2;
// let result;
// result = c + d;
// console.log(result);

// 12) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.
// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);

// 13) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.
// let a = 17;
// let b = 10;
// let c;
// c = a - b;
// console.log(c);

// 14) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'
// const userName = prompt('What is your name');
// alert('my name is:');

// 15) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.
// let hour = 19;
// let minute = 15;
// let seconds = 23;
// console.log(hour + ' : ' + minute + ' : ' + seconds);

// 16) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран
// let num = 15;
// alert(Math.pow(num, 2));

// 17) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. Кількість рядків коду при цьому не повинно змінитися.

//   var num = 47;
//   num = num + 7;  
//   num = num - 18; 
//   num = num * 10; 
//   num = num / 15; 
//   alert (num);

// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// 18) Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран
// let str = 'Hello World';
// alert(str);

// 19) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.
// let str1 = 'Hello';
// let str2 = 'World';
// console.log(str1 + str2);
// OR
// console.log(`${str1} ${str2}`);


// 20) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.
// let name = 'Aleks';
// let age = 33;
// alert(`Hi, my name is ${name}, I'm ${age} old!`)

// 21) Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка виведіть на екран символ 'a', символ 'c', символ 'e'
// let str = 'abcde';
// console.log(str[0], str[2], str[4]);

// 22) Створіть змінну num і надайте їй значення '12345'. Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль
// let num = '12345';
// console.log(num);

// let sum = Number(num[0]) + Number (num[1]) + Number(num[2]) + Number(num[3]) + Number(num[4]);
// console.log(sum);
// let subtraction = Number(num[0]) - Number (num[1]) - Number(num[2]) - Number(num[3]) - Number(num[4]);
// console.log(subtraction);
// let multiplication = Number(num[0]) * Number (num[1]) * Number(num[2]) * Number(num[3]) * Number(num[4]);
// console.log(multiplication);
// let division = Number(num[0]) / Number (num[1]) / Number(num[2]) / Number(num[3]) / Number(num[4]);
// console.log(division);

// 23) Дана рядок 'js'. Зробіть з неї рядок 'JS'.
// let str = 'js';
// console.log(str.toUpperCase());

// 24) Дана рядок 'JS'. Зробіть з неї рядок 'js'
// let str1 = 'JS';
// console.log(str1.toLowerCase());

// 25) Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.
// let str = 'I am learning javascript!'
// console.log(str.length);

// 26) Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
// let a = 10;
// let b = 3;
// console.log(a % b);

// 27) Возведите 2 в 10 степень. Результат запишите в переменную st.
// let st = 2;
// console.log(Math.pow(st,10));

// 28) Найдите квадратный корень из 245.
// let a = 245;
// console.log(Math.sqrt(a));

// 29) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// let a = 379;
// console.log(Math.sqrt(a).toFixed(0));

// 30) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны (edited) 
// Перечень методов для работы со строками
// let a = 587;
// let b = Math.sqrt(a);
// console.log(Math.ceil(b));
// console.log(Math.floor(b));

//===================================
//Module 1 part 2====================

//======================= task 01 =================
/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */
// const name = 'Генератор защитного поля';
// let price = 1000;
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов `);

//====================== task 02 =====================
/*Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.*/

// let a = Number(prompt('Enter Number'));
// if(a === 10){
//     alert('Correct')
// }else{
// alert('Incorrect')
// }
//==================== task 03 ======================
/*Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).*/

// let min = prompt('What quarter of time does the entered number fall in?');
// if(min !== null){
//     if(min > 0 && min <= 15){
//     alert('First Quarter');
// }else if(min > 15 && min <= 30){
//     alert('Second Quarter');
// }else if(min > 30 && min <= 45){
//     alert('Third Quarter');
// }else if (min > 45 && min <= 60){
//     alert('Fourth Quarter');
// }else{alert('Number entered is incorrect')}
// }

//==================== task 04 =======================
/*
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/
// const day = 17;
// const month = 10;
// const year = 2048;
// let date = `${day}\\${month}\\${year}`
// let message = `"Доброе утро, cегодня ${date}, за бортом отличная погода!"`

// console.log(date); // 17\10\2048
// console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"

//==================== task 05 ============================
/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// let message = `${name} прибывает на отдых ${date} тип комнаты: ${roomType}`

// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

//================== task 06 ===============================
/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
  
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
    
  - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
*/

// const correctPassword = 'jqueryismyjam';
// let userPassword = prompt('Введите пароль доступа');
// if(userPassword === null){
//     alert('Ожидаю ввода пароля');
// }else if(userPassword === correctPassword){
//     alert('Доступ в секретный бункер разрешен!');
// }else{
//     alert('Активирована система защиты!');
// }

//========================= task 07 =================
/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/
// const total = 100;
// const ordered = 50;
// if(ordered > total){
// alert("На складе недостаточно твоаров!");
// }else if(ordered === total){
//     alert("Вы забираете весь товар cо склада!");
// }else{
// alert("Заказ оформлен, с вами свяжется менеджер")
// }

//===================== task 08 =====================
/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/
// let enterNumber = prompt('Введите произвольное целое число');
// if(enterNumber === null){

//     alert('Ну и ладно, пока!');
// }else if(enterNumber === Number.isInteger(enterNumber)){
//     alert('Спасибо!');
// }else{
//     alert('Необходимо было ввести целое число!');
// }

//===================== task 09 =====================

/* 
  В переменную value записывается случайное число.
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное
  PS: попробуй использовать тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
// let type = value % 2 === 0 ? 'even' : 'odd';
// console.log(`${value} is ${type}`);

//========================= taks 10 ==================

/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// const findHotel = Number(prompt('Enter number of stars between 1 and 5 to choose the type of Hotel'));
// switch (findHotel) {
//   case 0:
//     alert('Очень жаль, приходите еще!');
//     break;
//   case 1:
//     alert("Каталог хостелов");
//     break;
//   case 2:
//     alert("Каталог бюджетных отелей");
//     break;
//   case 3:
//     alert("Каталог отелей ***");
//     break;
//   case 4:
//     alert("Каталог отелей ****");
//     break;
//   case 5:
//     alert("Каталог лучших отелей");
//     break;
//   default:
//     alert('Неверный ввод, возможные варианты 1-5!');

// }
// console.log(findHotel);

//==================== task 11 ============================

/* 
  Пользователь может оформить доставку товара к себе в страну, 
  указав ее в переменной country, но доставка есть не везде.
  
  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
  Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
  
  Ниже приведен список стран и стоимость доставки.
  
    Китай - 100 кредитов
    Южная Америка - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 крдитов
  
  Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
  Протестируй работоспособность кода подставив разные значения в переменную country.
  
  PS: используй switch
*/

// const country = prompt('Введите имя страны для доставки');
// switch (country) {
//   case null:
//       // alert('Очень жаль, приходите еще!');
//     break;
//   case 'Китай':
//     alert('100 кредитов');
//     break;
//   case 'Южная Америка':
//     alert('250 кредитов');
//     break;
//   case 'Австралия':
//     alert('170 кредитов');
//     break;
//   case 'Индия':
//     alert('80 кредитов');
//     break;
//   case 'Ямайка':
//     alert('120 крдитов');
//     break;
//   default:
//  alert("В вашей стране доставка не доступна");
// }
// console.log(deliveryCost);

//========================= *tasks 12 ====================

/*
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// let hotel = "";
//Const guest = Number(prompt('Введите сколько мест вам нужно'));

// if (guest > 0 && Number.isInteger(guest)) {
//     if (guest <= 6) { 
//         hotel = 'Taba';
//         if (confirm(`есть место в группе ${hotel}`)) {
//             alert(`Приятного путешествия в группе ${hotel}`);
//         } else {
//             alert('Нам очень жаль, приходите еще!');
//         };
//     } else if (guest <= 15) { 
//         hotel = 'Sharm';
//         if (confirm(`есть место в группе ${hotel}`)) {
//             alert(`Приятного путешествия в группе ${hotel}`);
//         } else {
//             alert('Нам очень жаль, приходите еще!');
//         };
//     } else if (guest <= 25) { 
//         hotel = 'Hurgada';
//         if (confirm(`есть место в группе ${hotel}`)) {
//             alert(`Приятного путешествия в группе ${hotel}`);
//         } else {
//             alert('Нам очень жаль, приходите еще!');
//         };
//     } else {
//         alert('Извините, столько мест нет ни в одной группе!');
//     };
// } else if (guest === 0) {
//     alert('Нам очень жаль, приходите еще!');
// } else {
//     alert("Ошибка ввода");
// };

//======================== *task 13 ================

/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';
// let userLogin = prompt('Введите логин');
// if (userLogin === null) {
//   alert('Отменено пользователем!');
// } else if (userLogin !== adminLogin) {
//   alert('Доступ запрещен, неверный логин!');
// } else {
//   let userPassword = prompt('Введите пароль');
//   if (userPassword === null) {
//     alert('Отменено пользователем!');
//   } else if (userPassword !== adminPassword) {
//     alert('Доступ запрещен, неверный пароль!');
//   } else {
//     alert('Добро пожаловать!');
//   }
// }
//========================     Работа с if-else ========

//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = Number(prompt('Введите число'));
// if(a === 0){
//     alert('Верно');
// }else{
//     alert('Неверно')
// }


//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = Number(prompt('Введите число'));
// if(a > 0){
//     alert('Верно');
// }else{
//     alert('Неверно')
// }

//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = Number(prompt('Введите число'));
// if(a < 0){
//     alert('Верно');
// }else{
//     alert('Неверно')
// }

//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = Number(prompt('Введите число'));
// if(a >= 0){
//     alert('Верно');
// }else{
//     alert('Неверно')
// }

//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = Number(prompt('Введите число'));
// if(a <= 0){
//     alert('Верно');
// }else{
//     alert('Неверно')
// }

//  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = Number(prompt('Введите число'));
// if(a !== 0){
//     alert('Верно');
// }else{
//     alert('Неверно')
// }

//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// let a = 'test';
// if(a === 'test;'){
// alert('true');
// }else{
//   alert('Неверно')
// }

//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1
// let a = '1';
// if(a === '1'){
//   console.log('Верно');
// }else{
//   console.log('Неверно');
// }
// console.log(a);

// =============================   Работа с && (и) и || (или)

//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 2;
// if( a > 0 && a < 5){
//   console.log('Верно')
// }else{
// console.log('Неверно')
// }

//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 5;
// if(a === 0 || a === 2){
//   a += 7;
// }else{
//   a /= 10;
// }
// console.log(a);

//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = 3;
// let b = 5;

// if (a <= 1 && b >= 3) {
//   console.log(a + b);

// } else {
//   console.log(a - b);
// }

//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a = 5;
// let b = 6;
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//====================== Additional tasks ==========

//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = Number(prompt('enter number between 1 and 31'));
// if (day !== null) {
//   if (day <= 10) {
//     alert('first dacade');
//   } else if (day > 10 && day <= 20) {
//     alert('second decade');
//   } else if (day > 21 && day <= 31) {
//     alert('third decade');
//   }else{
//     alert('you entered wrong number');
//   }
// }
//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 6;
// let result;
// if (month == 12 || month <= 2) {
// 	result = 'Зима';
// }
// if (month >= 3 && month <= 5) {
// 	result = 'Весна';
// }
// if (month >= 6 && month <= 8) {
// 	result = 'Лето';
// }
// if (month >= 9 && month <= 11) {
// 	result = 'Осень';
// }
// alert(result);

//  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const str = 'abcde';
// if (str[0] == 'а') {
// 	alert('Да');
// } else {
// 	alert('Нет');
// }

//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const str = '12345';
// if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
// 	alert('Да');
// } else {
// 	alert('Нет');
// }

//  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
// const str = '123';
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// alert(sum);

//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. 

// const str = '123456';
// let str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (str1 == str2) {
// 	alert('Да');
// } else {
// 	alert('Нет');
// }