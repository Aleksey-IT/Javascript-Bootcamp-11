'use strict';
// const arr = [1,2,3,4,5];

// let newMass = arr.map(function(a){
//     // console.log(el);
//     // console.log(index);
//     // console.log(arr);
//     return a * 2;
// })

// const users = [{
//         name: "Mango",
//         daysInactive: 10,
//         isActive: true
//     },
//     {
//         name: "Poly",
//         daysInactive: 5,
//         isActive: false
//     },
//     {
//         name: "Ajax",
//         daysInactive: 12,
//         isActive: true
//     }
// ];

// // const showUsers = users.map(el => el.daysInactive > 7);
// const updatedUsers = users.map(user => ({
//     users, isActive: user.daysInactive < 7

// }));    
// const updatedUser = users.map(user => ({
//     ...users, isActive: user.daysInactive < 7

// }));    
// console.log(updatedUser);
// // console.log(...users);
// console.log(updatedUsers);
// // console.log(showUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filter = numbers.filter((el) => el < 9);
// console.log(filter);

// const users = [{
//         name: "Mango",
//         isActive: true
//     },
//     {
//         name: "Poly",
//         isActive: false
//     },
//     {
//         name: "Ajax",
//         isActive: true
//     },
//     {
//         name: "Chelsey",
//         isActive: false
//     }
// ];

// const findUsers = users.filter(el => el.isActive);
// console.log(findUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filter = numbers.find((el) => el === 5);
// console.log(filter);

// const users = [{
//         id: "000",
//         name: "Mango",
//         isActive: true
//     },
//     {
//         id: "001",
//         name: "Poly",
//         isActive: false
//     },
//     {
//         id: "002",
//         name: "Ajax",
//         isActive: true
//     },
//     {
//         id: "007",
//         name: "Bond",
//         isActive: false
//     }
// ];

//   const find = users.find(el => el.id === '007');
//   const map = users.map(el => el.name);
//   console.log(map);
// for(let key in find){
//     console.log(key);
// }  


// function find(arr, copyId) {
//     let newArr = arr.find(el => el.id === copyId);
//     return newArr;
// }
// console.log(find(users, '002'));

// console.log([1,2,3,4,5].every(el => el > 4));

// const numbers = [1, 2, 3, 4, 5];
// let result = 0;
// for(let key of numbers){
//     result += key;
// }
// console.log(result);

// const showResult = numbers.reduce((acc, el) => acc += el);
// console.log(showResult);

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

//   const reduce = tweets.reduce((acc, el) => el.likes + acc, 0);
//   console.log(reduce);

//======================MODULE 5 Tasks======================
//========================== task 01 =====================

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];

//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] > num) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   };

// const findGreaterThan = (num, arr) => {
//     const filter = arr.filter(el => el > num);
//     return filter;
// };

//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

/* 
  Функция multiplyBy принимает два параметра - число и массив. 
  Возвращает массив все значения которого умножены на число.
*/
//   const multiplyBy = (num, arr) => {
//     let result = [];
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       result.push(arr[i] * num);
//     }
//     return result;
//   };

// const multiplyBy = (num, arr) => {
//     let result = arr.map(el => el * num);
//     return result;
// };

//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

/* 
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/
// function summAllNumbers(...args) {
//   let accumulator = 0;

//   for (let i = 0, max = args.length; i < max; i += 1) {
//     accumulator += args[i];
//   }

//   return accumulator;
// }

// function summAllNumbers(...args) {
//     let result = args.reduce((acc, el) => el + acc);
//     return result;
// }

// console.log(summAllNumbers(1, 2, 3)); // 6
// console.log(summAllNumbers(1, 2, 3, 4)); // 10
// console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15

/* 
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
//   const findEvery = (num, arr) => {
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] < num) {
//         return false;
//       }
//     }

//     return true;
//   };

// const findEvery = (num, arr) => {
//     let everyNum = arr.every(el => el >= num)
//     return everyNum;
// }
//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true


//========================== task 02 =====================

/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/

// const guests = [{
//         name: "Mango",
//         age: 20,
//         isActive: true
//     },
//     {
//         name: "Poly",
//         age: 18,
//         isActive: false
//     },
//     {
//         name: "Ajax",
//         age: 30,
//         isActive: true
//     },
//     {
//         name: "Chelsey",
//         age: 45,
//         isActive: false
//     }
// ];

// function getPropValues(arr, prop) {
//     let newArr = arr.map(el => el[prop]);
//     return newArr;
// }

// //   // Вызовы функции для проверки
// console.log(getPropValues(guests, "name")); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log(getPropValues(guests, "age")); // [20, 18, 30, 45]
// console.log(getPropValues(guests, "isActive")); // [true, false, true, false]

//========================== task 03 =====================

/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/


// const users = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];

// function setGuestState(guests, period) {
//     return guests.map((i) => ({
//         ...i,
//         isActive: i.inactiveDays < period
//     }));
// }

// // Вызовы функции для проверки
// console.log(
//     setGuestState(users, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//     setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//     setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

//========================== task 04 =====================

/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

// function getActiveGuests(guests){
//    const activeGuests = guests.filter(el => el.isActive === true);
//    return activeGuests;
// }

// //   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax


//========================== task 05 =====================

/*      
  Напиши функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста для сортировки. 
  
  Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

// function getGuestsOlderThan(guests, age){
//   // return guests;
//   // return age;
//   let olderThan = guests.filter(el => el.age > age);
//   return olderThan;
// }

// //   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

//   console.log(getGuestsOlderThan(guests, 55)); // []


//========================== task 06 =====================

/*
  Напишите функию findGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

//   function findGuestById(guests, id){
//   let guestById = guests.filter(el => el.id === id);
//   return guestById;
// }
// //   // Вызовы функции для проверки
//   console.log(
//     findGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}

//   console.log(
//     findGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}

//   console.log(
//     findGuestById(guests, 5)
//   ); // undefined

//========================== task 07 =====================

/*
 * Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
 * Функция возвращает число - общую стоимость заказа.
 * 
 * Используй метод reduce.
 */

// console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

// console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

// console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110


//========================== task 08 =====================

/*
  Напиши функцию getTotal(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };

// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 2,
//   apples: 1
// };

// const orderC = {
//   bread: 2,
//   cheese: 2
// };

// function getTotal(products, order) {
//   //  console.log(products);
//    console.log(order);
//   const total = arr => arr.reduce((acc, el) => products === , 0);
// console.log(total);
// }

// // Вызовы функции для проверки
// console.log(getTotal(products, orderA)); // 140
// console.log(getTotal(products, orderB)); // 120
// console.log(getTotal(products, orderC)); // 80


//========================== task 09 =====================

/*     
 * Напиши функию isGuestsActive(guests), принимающую массив объектов гостей. 
 * Функция возвращает true если значение поля active всех объектов true, в противном случае false.
 * 
 * Используй метод every или some, никаких for!
 */

// function isGuestsActive(guests){
//   let activeGuests = guests.every(el => el.active === true);
//   return activeGuests;
// }

// // Вызовы функции для проверки
// console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: false },
//       { name: "Ajax", active: true }
//     ])
//   ); // false

//   console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: true },
//       { name: "Ajax", active: true }
//     ])
//   ); // true

//   console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: true },
//       { name: "Ajax", active: false }
//     ])
//   ); // false


//========================== ****** task ***** =====================

// const scientist = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];

//===== 1) отримати масив вчених що народилися в 19 ст
// function bornInCentury(scientist) {
// let inCentury = scientist.filter(el => el.year > 1801 && el.year < 1900);
// return inCentury;

//=================OR==============
//   let inCentury = scientist.filter(function(el){
// return (el.year > 1801 && el.year < 1900);
//   });
//   return inCentury;
// }
// console.log(bornInCentury(scientist));

//===== 2) знайти суму років скільки прожили всі вченні
// function sumOfYearsLived(scientist) {
// let sumOfYears = scientist.map(el => el.passed - el.year).reduce(((acc, el) => acc + el), 0);
// return sumOfYears;
//============OR=================
//   let sumOfYears = scientist
//     .map(function (el) {
//       return el.passed - el.year;
//     })
//     .reduce(function (acc, el) {
//       return acc + el;
//     }, 0);
//   return sumOfYears;
// }
// console.log(sumOfYearsLived(scientist));

//===== 3) Відсортувати вчених по алфавіту =============

// function findScientistAlphabeticalOrder(scientist){

//   let alphabeticalOrder = scientist.sort( function (a,b){
//     if(a.first > b.first){
//       return 1;
//     }else{
//       return -1;
//     }
//   });
//   return alphabeticalOrder;

// //==============OR=========================

// let alphabeticalOrder = scientist.sort((a,b) => a.first > b.first ? 1 : -1);
//   return alphabeticalOrder;

// }
// console.log(findScientistAlphabeticalOrder(scientist));

//===== 4) Відсортувати вчених по даті народження

// function scientistBirthDate(scientist) {
//   // let birthDate = scientist.sort((a,b) => a.year > b.year ? 1 : -1);
//   // return birthDate;

//   //=========OR============

//   let birthDate = scientist.sort(function (a, b) {
//     if (a.year > b.year) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
//   return birthDate;

// }
// console.log(scientistBirthDate(scientist));

//===== 5) Відсортувати вчених по кількості прожитих років
// function sortScientistlifespan(scientist) {
//   // let scientistLifespan = scientist.map(el => el.live = el.passed - el.year).sort();
//   // return scientistLifespan;

//   //===============OR=============

//   // let scientistLifespan = scientist.map(function (el) {
//   //     return (el.live = el.passed - el.year);
//   // }).sort();
//   // return scientistLifespan;
// }
//   console.log(sortScientistlifespan(scientist));

//===== 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// function deleteScientistBornIn15_16_17Century(scientist) {
//   // let deletePerson = scientist.filter(el => el.year <= 1400 || el.year >= 1800);
//   // return deletePerson;

//   //================OR===============

//   // let deletePerson = scientist.filter(function(el){
//   //   return (el.year <= 1400 || el.year >=1800);
//   // });
//   // return deletePerson;
// }
// console.log(deleteScientistBornIn15_16_17Century(scientist));

//===== 7) Знайти вченого який народився найпізніше.
// function findScientistBornLast(scientist) {
//   // let scientistBornLast = scientist.sort((a, b) => b.year - a.year).find(el => el);
//   // return scientistBornLast;

//   //=====================OR=============

//   // let scientistBornLast = scientist.sort(function (a, b) {
//   //   return (b.year - a.year);
//   // }).find(el => el);
//   // return scientistBornLast;
// }

// console.log(findScientistBornLast(scientist));

//===== 8) Знайти рік народження Albert Einstein
// function findYearBornIn(scientist) {
//   // let yearBornIn = scientist.find(el => el.first === 'Albert').year;
//   // return yearBornIn;

//   //==================OR==================

//   // let yearBornIn = scientist.find(function (el) {
//   //   return el.first === 'Albert';
//   // }).year;
//   // return yearBornIn;
// }
// console.log(findYearBornIn(scientist));

//===== 9) Знайти вчених прізвище яких починається на літеру С

// function findFirstLetter(scientist) {
//   // let firstLetter = scientist.filter(el => el.last.includes('C'));
//   // return firstLetter;

//   //===============OR=============

//   // let firstLetter = scientist.filter(function(el){
//   //   return el.last.includes('C');
//   // });
//   // return firstLetter;
// }
// console.log(findFirstLetter(scientist));

//===== 10) Видалити з масива всіх вчених імя яких починається на A
// function deletePerson(scientist) {
//   // let personDelete = scientist.filter(el => el.first.includes('A'));
//   // return personDelete;

//   //===================OR====================

//   // let personDelete = scientist.filter(function (el) {
//   //   return el.first.includes('A');
//   // });
//   // return personDelete;
// }
// console.log(deletePerson(scientist));


//========================== HOMEWORK =====================

/*
 * Используя массив (users) объектов пользователей, напишите функции которые с помощью 
 * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
 */

/**
 * Получить массив имен (поле name) всех пользователей
 */

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     phone: '+1 (848) 556-2344',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     phone: '+1 (855) 582-2464',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     phone: '+1 (814) 593-3825',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     phone: '+1 (909) 547-2687',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     phone: '+1 (956) 512-2693',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     phone: '+1 (876) 411-2433',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     phone: '+1 (979) 504-2554',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getAllNames = arr => arr.map(el => el.name);

// console.log(getAllNames(users)); 
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// /**
//  * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
//  */
// const getUsersByEyeColor = (arr, color) => arr.filter(el => el.eyeColor === color);

// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// /**
//  * Получить массив имен пользователей по полу (поле gender)
//  */
// const getUsersByGender = (arr, gender) => arr.filter(el => el.gender === gender).map(el => el.name);

// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// /**
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = arr => arr.filter(el => el.isActive === false);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// /**
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => arr.find(el => el.email === email);

// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// /**
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
//  */
// const getUsersWithAge = (arr, min, max) => arr.filter(el => el.age >= min && el.age <= max);

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// // console.log(getUsersWithAge(users, 30, 40)); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// /**
//  * Получить общую сумму баланса (поле balance) всех пользователей
//  */
// const getTotalBalance = arr => arr.reduce((acc, el) => acc + el.balance, 0);

// console.log(getTotalBalance(users)); // 20916


// /**
//  * Массив имен всех пользователей у которых есть друг с указанным именем
//  */
// const getUsersByFriend = (arr, name) => arr.filter(el => el.friends.includes(name)).map(el => el.name);
// ;

// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

