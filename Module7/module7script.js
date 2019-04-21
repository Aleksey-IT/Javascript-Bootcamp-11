'use strict';

// let list = document.querySelector('.list');

// function fn(el) {
//     let newMass = [...el].map(el => el.textContent);
//     return newMass;

// }
// let copyNewMass = fn(list.children);
// console.log(copyNewMass);

// const element = document.createElement('ul');
// const body = document.body;
// body.append(element);

// element.innerHTML = '<li>list</li>';
// element.className = 'old';
// let getli = copyNewMass.reduce((string, el) => string + `<li>${el}</li>`);
// console.log(copyNewMass);

// element.innerHTML = getli;

// let textInput = document.querySelector('.text');
// let Input = document.querySelector('.input');
// let btn = document.querySelector('.btn');

// btn.onclick = function () {
//     textInput.textContent = Input.value;
//     textInput.style.color = 'aqua';
//     textInput.style.fontSize = '30px';
//     textInput.style.transform = 'rotate(1440deg)';
//     textInput.style.transition = '5s ease';
// };

//=========================SLIDER=============
// let body = document.querySelector('body');
// body.style.backgroundColor = 'yellow';

// let gallery = document.querySelector('.gallery');
// let btn = document.querySelector('.btn');
// let next = document.querySelector('.next');
// let back = document.querySelector('.back');
// let images = document.querySelectorAll('.images img');

// let i = 0;

// next.onclick = function () {
//     images[i].className = '';
//     i += 1;
//     if(i > images.length){
//         i = images.length - 1;
//     }
//     images[i].className = 'shown';
// };


// back.onclick = function () {
//     images[i].style.display = 'none';
//     i -= 1;
//     if(i < 0){
//         i = images.length - 1;
//     }
//     images[i].style.display = 'block';
// };

//=============================Module 7 task 1================

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const firstLi = Array.from(
//     document.querySelectorAll(".categories > li")
// );
// console.log(firstLi);

// const listUl = Array.from(
//     document.querySelectorAll(".categories li ul")
// );
// console.log(listUl);

// const pushList = [];
// console.log(pushList);

// firstLi.forEach(element => {
//     pushList.push( `Категория: ${element.firstChild.textContent.trim()} / Количество: ${
//         element.firstElementChild.children.length}`);
// });
// console.log(pushList);

// ===================OR=========================

// let ul = document.querySelectorAll('.categories > li');
// console.log(ul);
// ul.forEach(el => console.log(el.firstChild.data.trim(), el.firstElementChild.childElementCount));


//=====================Module 7 task 2==============
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


// const list = document.querySelector('.list li').style.color = 'red';
// console.log(list);

// const list = document.querySelector('.list');
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';

//=================Module 7 task 3===============
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const elemList = document.querySelector('.list')

// for (const items of elements) {
//     let item = document.createElement('li');
//     item.textContent = items;
//     elemList.append(item);
// }
// console.log(elemList);

// =====================OR==================

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// let elemList = document.querySelector('.list');
// console.log(elemList);
// elements.map(el => elemList.innerHTML += `<li>${el}</li>`)

//======================Module 7 task 4============
/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [{
//         url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "White and Black Long Fur Cat"
//     },
//     {
//         url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//         url: "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//         url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Group of Horses Running"
//     },
//     {
//         url: "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Macaw Birds"
//     },
//     {
//         url: "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "2 Lion on Grass Field during Daytime"
//     }
// ];
// console.log(galleryItems);

// let galleryList = document.querySelector('.gallery');

// for (const img of galleryItems) {
//     let item = document.createElement('img');
//     item.setAttribute('src', img.url);
//     item.style.width = '300px';
//     item.style.height = '200px';
//     let li = document.createElement('li');
//     li.append(item);
//     galleryList.append(li);
// }

//==============================OR====================

// let items = galleryItems.reduce((acc, el) => acc + `<li><img style ='width: 300px' src=${el.url} alt=${el.alt}></li>`);
// galleryList.innerHTML = items;

// ===================Module 7 task 5===============

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let sizeFilter = document.querySelectorAll('.size-filter li label input');
// console.log(sizeFilter);
// let arr1 = Array.from(sizeFilter); 
// console.log(arr1);
// let arr2 = arr1.filter(el => el.checked === true);
// console.log(arr2);

// function getInputsData(arr2) {
//  return arr2.map(el => el.value);
// }
// console.log(getInputsData(arr2));

//============================Module 7 task 6================
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// function createMovieCard(){
//     let card = document.querySelector('.movie');
//     let img = document.createElement('img');
//     img.className = 'movie__image';
//     img.setAttribute('src', "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg");
//     img.setAttribute ('alt', 'movie image');
//     card.append(img);

//     let movieBody = document.createElement('div');
//     movieBody.className = 'movie__body';
//     card.append(movieBody);

//     let movieTitle = document.createElement('h2');
//     movieTitle.className = 'movie__title';
//     movieTitle.textContent = 'The Godfather';
//     movieBody.append(movieTitle);

//     let movieDescription = document.createElement('p');
//     movieDescription.className = 'movie__description';
//     movieDescription.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//     movieTitle.append(movieDescription);

//     let movieDate = document.createElement('p');
//     movieDate.className = 'movie__date';
//     movieDate.textContent = 'Released: 1972-03-14';
//     movieDescription.append(movieDate);

//     let movieRating = document.createElement('p');
//     movieRating.className = 'movie__rating';
//     movieRating.textContent = 'Rating: 8.6';
//     movieDate.append(movieRating);



// }
// createMovieCard();

//=======================Module 7 task 7===========

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// let root = document.querySelector('#root');
// let box = document.createElement('div');

// function randomColor() {
//     let red = Math.floor(Math.random() * 255);
//     return red;
// }

// function createBoxes(num) {
//     let i = 0;
//     let w = 30;

//     while (i < num) {
//         i++;
//         root.append(box);
//         box.innerHTML += `<div style = "width: ${w + 'px'} ; height = ${w + 'px'}; background: rgb(${createBoxes()}, ${createBoxes()}, ${createBoxes()})">${i}</div>`;
//     }
// }
// createBoxes(5);