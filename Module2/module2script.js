'use strict';
// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// let arr = ['a', 'b', 'c'];
// let arr1 = [1, 2, 3];
// const allArr = arr.concat(arr1);
// console.log(allArr);

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c'];
// arr.splice(3, 0, 1, 2, 3);
// console.log(arr);

// 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let allArr = arr.concat(arr2);
// console.log(allArr);

// 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// 5) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// :sunglasses: Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. Скрыть решение.

// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. Показать решение.

// 13) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. Показать решение.

// 14) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. Показать решение. (edited)

//==============================
// // 1) Вибираємо випадкове число (від 0 до довжини масива);
// // 2) Записати в змінну звернення типу масив[індекс];
// // 3) Вивести змінну з пунтку 2 в алерт;
// let index = Math.floor(Math.random()*animals.length);
// alert(animals[index]);
// 1) Через prompt вводимо свій варіант тваринки
// 2) Варіант компютера записати в змінну
// 3) Порівнюємо наш варіант з копютерним
// 3,1) Якщо варіанти співпали тоді виводимо алертом що юзер виграва.
// 3,2) Якщо варіанти не співпали кажемо що користувач програв і виводимо варіант компютера.

//==================================
// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.

// let game = ["Камень", "Ножницы", "Бумага"];
// let rand = Math.floor(Math.random() * game.length);
// console.log(rand);
// let show = game[rand];
// console.log(show);

// let play = prompt('Сыграем! Камень, Ножницы, Бумага, 1, 2, 3!').toLowerCase();
// let choice = play;
// if (choiсe === 'камень' && show === 'Камень' ||
//     choiсe === 'бумага' && show === 'Бумага' ||
//     choiсe === 'ножницы' && show === 'Ножницы') {
//     alert('Ничья! Победила дружба')
// } else if (choiсe === 'бумага' && show === 'Камень' ||
//     choiсe === 'ножницы' && show === 'Бумага' ||
//     choiсe === 'камень' && show === 'Ножницы') {
//     alert('Ты выиграл! :)')
// } else if (choiсe === 'камень' && show === 'Бумага' ||
//     choiсe === 'ножницы' && show === 'Камень' ||
//     choiсe === 'бумага' && show === 'Ножницы') {
//     alert('Ты проиграл! :(')
// } else {
//     alert('Попробуй в следующий раз ввести камень, ножницы или бумага')
// }

//==================================

// 1) Записуємо в змінну строку з промта
// 2) Зробити строку масивом
// 3) Скопіювати масив
// 4) Реверсимо масив
// 5) З масивів робимо строки
// 6) Порівнюємо дві строки і виводимо результат в консоль;

//===============================

// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']

// 1) Запитати логін
// 2) Перевірити чи існує логін в базі
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо")

//====Module 2 part 2===============

//================ task 1 ===============
/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
// users.shift()
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
// users.pop()
// console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
// users.unshift('Lux');
// console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push('Jay','Kiwi');
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// users.splice(users.indexOf(userToDelete),1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// users.splice(users.indexOf(userToInsertBefore),0,'Kong');
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

//=============================task 2=======

//Задание 1 Вывести числа от 4 до 400 на экран.
// let i = 4;
// while(i <= 400){
//     console.log('i: ', i);
//     i += 1;
// }
//=============================task 3 ===============

//Задание 2 Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
// for(let i = 4; i <= 13; i += 3){
//     console.log(i);
// }

//=============================task 4 ===============

//Задание 3 Вывести числа 654 653 652 до нуля.
// for(let i = 0; i <= 654; i += 1){
//     console.log(i);
// }

//=============================task 5 ===============

//Задание 4 Вывести все годы с 1983 до 2017.
// for(let i = 1983;i <= 2019; i += 1){
//     console.log(i);
// }

//============================== task 6 ===============

//Задание 8 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num
// let n = 1000;
// let num = 0;
// while(n >= 50){
//     num ++;
//     n = n / 2;
//     console.log(n);
//     console.log(num);
// } 

//=========OR=========

// let n = 1000;
// for (let num = 1; n >= 50; num++) {
//     n /= 2;
//     console.log(n, num);
// }


//============================== task 7 =================================

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// const arr = [2, 5, 9, 15, 0, 4];
// for( let i = 0; i < arr.length; i ++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i]);
//     }
// }
//==============================task 8 =================================

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// const arr = [2, -3, 5, 41, -16, 7];
// let sum = 0;
// for (const el of arr) {
//     if (el > 0) {
//         sum += el;
//     }
// }
// console.log(sum);

//=========================== tasks 9 =======================

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         alert('Есть');
//         break;
//     }
// }

//============================ task 10 =====================

// Дан массив числами, например: ['10', '20', '30', '50', '235', '3000']. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. 
// const arr = ['10', '20', '30', '50', '235', '3000'];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i][0] === '1' || arr[i][0] === '2'|| arr[i][0] === '5'){
//         console.log(arr[i]);
//     }
// }

//=========================== task 11 =========================

/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента]. 
 * 
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for (const el of users) {
//     console.log(`${users.indexOf(el)+1} :${el}`);
// }

//========================== task 12 =========================

/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
// let words = message.split(' ');
// console.log(words);

// Выведи в консоли длину массива words
// console.log(words.length); // 8

// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// for(let i = 0; i < words.length; i ++){
// price += 10;
// }
// console.log(price); // 80


//============================= task 13 ============================

/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/
// let userInput;
// do {
//     userInput = prompt('Введите число больше 100', '');
// } while (Number(userInput) <= 100 && userInput !== null);

// console.log('Введите число: ', userInput);

//============================= task 14 ===============================

/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];
// for (const el of numbers) {
//     if (el > num) {
//         matched.push(el);
//     }
// }
// console.log(matched); // [17, 14, 14, 32, 18, 26]


//==================== task 15 ===============================================

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";
// let mass = message.split(' ');
// let longestWord;
// let max = 0;

// for (const i of mass) {
//     if (i.length > max) {
//         max = i.length;
//         longestWord = i;
//     }
// }
// console.log(longestWord); // 'force'


//================== task 16 ===============================================

/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// let min = numbers[0];
// let max = numbers[numbers.length - 1];

// let ask = prompt(`Введите цифру между ${min} и ${max}`);
// if(numbers.includes(Number(ask))){
//     alert('Поздравляем вы угадали!');
// }else{
//     alert('Сожалеем, Вы не угадали!');
// }

//============================= task 17 ===================================

/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let ask;
// let arr = [];
// let result = 0;

// do { 
//     ask = prompt('Enter number');
//     if (ask !== null && ask !== 0 && Number(ask) ) {arr.push(ask)};
//     console.log(arr);
// } while (ask !== null); 


// for (let el of arr) {
//     result += Number(el);
// }
// console.log(`Сумма: ${result}`);

//============================= ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =============================

/*
  
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];
// let min = numbers[0];
// let max = numbers[numbers.length -1];
// let userInput = prompt(`Enter number from ${min} to ${max}`);

// const isNumber = !Number.isNaN(Number(userInput));
// if (isNumber) {
//   if (numbers.includes(Number(userInput))) {
//     alert("You're right");
//   } else {
//     alert("You're wrong");
//   }
// } else {
//   alert("It's not a number");
// };

//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

// let userInput;
// const numbers = [];
// let total = 0;
// do {
//     userInput = Number(prompt('Enter a number'));
//     if(userInput !== 0){
//         numbers.push(userInput);
//     }
//     console.log(userInput);
//     console.log(numbers);
    
// } while (userInput);
// if(numbers.length !== 0){
//     for(let result of numbers){
//         total += result;
//     }
// }
// console.log('Total is: ' + total);

//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

/*
  
  Напишите скрипт имитирующий авторизацию пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords. 
  
  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;