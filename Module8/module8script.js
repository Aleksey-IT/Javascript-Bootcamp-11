'use strict';

// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//     event.preventDefault();

//     const target = event.target;
//     console.log("event target: ", target); // посмотрите что тут

//     // Проверяем тип узла, если не ссылка выходим из функции
//     if (target.nodeName !== "A") return;

//     setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//     const currentActiveLink = nav.querySelector("a.active");

//     if (currentActiveLink) {
//         currentActiveLink.classList.remove("active");
//     }

//     nextActiveLink.classList.add("active");
// }

// =================Module 8 task 1 ===================

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const button = document.querySelector('.button');
// button.textContent = '0';
// function onclick (){
// button.textContent = Number(button.textContent)+1;
// }
// button.addEventListener('click', onclick);

// ================Module 8 Task 2=================
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const expression = document.querySelector('.expression')
// // console.log(expression);
// const button = document.querySelector('.btn');
// // console.log(button);
// const input1 = document.querySelector('#first');
// // console.log(input1);
// const input2 = document.querySelector('#second');
// // console.log(input2);
// let result = document.querySelector('.result');
// // console.log(result);

// function sum () {
//   result.textContent = Number(input1.value) + Number(input2.value);
// }
// button.addEventListener('click', sum);

// ====================Module 8 task 3============
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
  */


// let btn1 = document.querySelector('.btn[data-action="sub"]');
// let btn2 = document.querySelector('.btn[data-action="add"]');
// let sum = document.querySelector('.value');

// class Counter {
//   constructor(result) {
//     this.value = 0;
//     this.result = result;
//     this.sum1 = this.sum1.bind(this);
//     this.sum2 = this.sum2.bind(this);
//   }

//   sum1() {
//     this.value++;
//     this.result(this.value);
//   }
//   sum2() {
//     this.value--;
//     this.result(this.value);
//   }
// }

// function result(value) {
//   sum.textContent = value;
// }

// let counter = new Counter(result);
// console.log(counter);
// btn2.addEventListener('click', counter.sum1);
// btn1.addEventListener('click', counter.sum2);
// ===========without class counter==============

// let btn1 = document.querySelector('.btn[data-action="sub"]');
// let btn2 = document.querySelector('.btn[data-action="add"]');
// let sum = document.querySelector('.value');

// function sum1() {
//   sum.textContent++
// }

// function sum2() {
//   sum.textContent--
// }

// btn1.addEventListener('click', sum1);
// btn2.addEventListener('click', sum2);

//====================Module 8 Task 4============

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// let form = document.querySelector('.question-form');
// let input = [...document.querySelectorAll('[type="radio"]')];
// let result = document.querySelector('.result');

// function res() {
//   event.preventDefault();
//   for (let el of input) {
//     if (el.checked === true) {
//       result.textContent = el.value
//     }
//   }
// }
// form.addEventListener('submit', res);

// =================Module 8 task 5===============
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// let list = document.querySelector('.images');
// let items = [...document.querySelectorAll('.images > li > img')]

// function showSrc() {
//       alert (`${event.target.src}`);
//   }  
// list.addEventListener('click', showSrc);

// =================OR===================

// const list = document.querySelector('.images');
// const photoAlert = (event) =>{
//    alert (event.target.src);
// }
// list.addEventListener('click', photoAlert);

// ================Module8 task 6================
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const list = document.querySelector('.list');

// function deleteLi(event) {
//   event.preventDefault();
//   let target = event.target;
//   if (target.nodeName !== 'BUTTON') return;
//   target.parentNode.remove();
// }
// list.addEventListener('click', deleteLi);

// ================Module 8 Task 7================
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const inputList = document.querySelector('.input-list');
// const inputs = document.querySelectorAll('input');

// let inputType = () => {
//   inputs.forEach(el => {
//     if (el.value.length > 0) {
//       if (Number(el.dataset.length) === el.value.length) {
//         el.classList.add('valid');
//       } else
//         el.classList.add('invalid');
//     }
//   });
// };

// inputList.addEventListener('focusout', inputType);

// ==================Module 8 task 8==============
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const message = document.querySelector('.message');
// const inputBox = document.querySelector('.input');
// const userText = document.querySelector('.input-value');
// inputBox.addEventListener('focus', render);

// function render() {
//   message.textContent = "Input is in focus!";
// }

// function textInput() {
//   userText.textContent = `Current input value:${inputBox.value}`;
// }
// inputBox.addEventListener('input', textInput);

// ==================Module 8 task 9===================
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// let openModal = document.querySelector('.btn');
// let modal = document.querySelector('.js-modal-backdrop');
// let close = document.querySelector('[data-action="close-modal"]');

// openModal.addEventListener('click', open);

// function open () {
//   modal.classList.remove('modal-hidden');
// }

// modal.addEventListener('click', shut);

// function shut(event) {
//   if (event.target === close || event.target === modal) {
//     modal.classList.add('modal-hidden');
//   }
// }

// =======================Module 8 task 10=====================
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
// const menu = document.querySelector(".js-menu");
// // console.log(menu);

// function activeLink(event) {
//   const target = event.target;
//   event.preventDefault();
//   if (target.nodeName !== "A") return;

//   (changeStatus(target));
// }

// function changeStatus(target) { 
//   const currentTarget = document.querySelector(".active");
//   if (currentTarget) {
//     currentTarget.classList.remove("active");
//   }
//   target.classList.add("active");
// }

// menu.addEventListener("click", activeLink);
