'use strict';
//==================Home-Work====================

// /*
//   Сеть фастфудов предлагает несколько видов гамбургеров.
//   Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
// 	- маленькая (+30 денег, +50 калорий)
// 	- большая (+50 денег, +100 калорий)
//   Гамбургер может быть с одной из нескольких видов начинок (обязательно):
// 	- сыром (+15 денег, +20 калорий)
// 	- салатом (+20 денег, +5 калорий)
// 	- мясом (+35 денег, +15 калорий)
//   Дополнительно, гамбургер можно:
// 	- посыпать приправой (+10 денег, +0 калорий)
// 	- полить соусом (+15 денег, +5 калорий)
//   Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
//   создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
//   Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
//   указанные методы, которые принимают и возвращают данные указанного типа.
// */

// /**
//  * Класс, объекты которого описывают параметры гамбургера.
//  */
// class Hamburger {
//     /**
//      * @constructor
//      * @param {String} size - Размер
//      * @param {String} stuffing - Начинка
//      */
//     constructor(size, stuffing) {
//       this._size = size;
//       this._stuffing = stuffing;
//       this._toppings = [];
//     }

//     /**
//      * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//      * @param {String} topping - Тип добавки
//      */
//     addTopping(topping) {
//       return !this._toppings.includes(topping) ? this._toppings.push(topping) : null;
//     };



//     /**
//      * Убрать topping, при условии, что она ранее была добавлена
//      * @param {String} topping - Тип добавки
//      */
//     removeTopping(topping) {
//       // return this._toppings.splice(this.toppings.indexOf(topping), 1);
//       return this._toppings.includes(topping) ? this._toppings.splice(this._toppings.indexOf(topping),1) : null;
//     }


//     /**
//      * Получить список toppings
//      * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//      */

//      get toppings () {
//       return this._toppings;
//      }

//     /**
//      * Узнать размер гамбургера
//      * @returns {String} - размер гамбургера
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
//      */

//     get size () {
//       return this._size;
//      }

//     // set size (topping) {
//     //   this._size = size;
//     // }

//     /**
//      * Узнать начинку гамбургера
//      * @returns {String} - начинка гамбургера
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
//      */

//     get stuffing () {
//       return this._stuffing;
//      }

//     // set stuffing(stuffing) {
//     //   this._stuffing = stuffing;
//     // }

//     /**
//      * Узнать цену гамбургера
//      * @returns {Number} - Цена в деньгах
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
//      */

//      calculateToppingsPrices () {
//        return this._toppings.reduce((acc,el) => acc + Hamburger.TOPPINGS[el].price, 0)
//         // let total = 0;
//         // for (let el of this._toppings) {
//         //   if (el !== Hamburger.TOPPINGS.el) {
//         //     total += Hamburger.TOPPINGS[el].price
//         //   } 
//         // } return total 
//       } 

//       get price() {
//         return Hamburger.SIZES[this._size].price + 
//         Hamburger.STUFFINGS[this._stuffing].price 
//         + this.calculateToppingsPrices()
//       }



//     /**
//      * Узнать калорийность
//      * @returns {Number} - Калорийность в калориях
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
//      */

//     calculateToppingsCalories () {
//       return this._toppings.reduce((acc,el) => acc + Hamburger.TOPPINGS[el].calories, 0)
//       // let total = 0;
//       // for (let el of this._toppings) {
//       //   if (el !== Hamburger.TOPPINGS.el) {
//       //     total += Hamburger.TOPPINGS[el].calories
//       //   } 
//       // } return total 
//     } 

//     get calories() {
//       return Hamburger.SIZES[this._size].calories + 
//       Hamburger.STUFFINGS[this._stuffing].calories 
//       + this.calculateToppingsCalories();
//     }
//   }
//   /*
//     Размеры, виды добавок и начинок объявите как статические поля класса.
//     Добавьте отсутсвующие поля по аналогии с примером.
//   */
//   Hamburger.SIZE_SMALL = 'SIZE_SMALL';
//   Hamburger.SIZE_LARGE = 'SIZE_LARGE';
//   Hamburger.SIZES = {
//     [Hamburger.SIZE_SMALL]: {
//       price: 30,
//       calories: 50,
//     },
//     [Hamburger.SIZE_LARGE]: {
//       price: 50,
//       calories: 100,
//     },
//   };
//   // console.log(Hamburger.SIZES[Hamburger.SIZE_SMALL].price);

//   Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
//   Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
//   Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

//   Hamburger.STUFFINGS = {
//     [Hamburger.STUFFING_CHEESE]: {
//       price: 15,
//       calories: 20,
//     },
//     [Hamburger.STUFFING_SALAD]: {
//       price: 25,
//       calories: 30,
//     },
//     [Hamburger.STUFFING_MEAT]: {
//       price: 40,
//       calories: 70,
//     },
//   };

//   Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
//   Hamburger.TOPPING_SAUSE = 'TOPPING_SAUSE';
//   Hamburger.TOPPING_COF = 'TOPPING_COF';


//   Hamburger.TOPPINGS = {
//     [Hamburger.TOPPING_SPICE]: {
//       price: 10,
//       calories: 0,
//     },
//     [Hamburger.TOPPING_SAUSE]: {
//       price: 20,
//       calories: 15,
//     },
//     [Hamburger.TOPPING_COF]: {
//       price: 34,
//       calories: 33,
//     }
//   };


//   /* Вот как может выглядеть использование этого класса */

//   // Маленький гамбургер с начинкой из сыра
//   const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

//   console.log(hamburger);
//   // Добавка из приправы
//   hamburger.addTopping(Hamburger.TOPPING_SAUSE);

//   // Спросим сколько там калорий
//   console.log("Ham1 Calories: ",hamburger.calories);

//   // Сколько стоит?
//   console.log("Ham1 Price: ",hamburger.price);

//   // Я тут передумал и решил добавить еще соус
//   hamburger.addTopping(Hamburger.TOPPING_SPICE);

//   // А сколько теперь стоит?
//   console.log("Ham1 Price with sause: ",hamburger.price);
//   // console.log("Ham1 Calories with sause: ",hamburger.calories);

//   // Проверить, большой ли гамбургер?
//   console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

//   // Убрать добавку
//   hamburger.removeTopping(Hamburger.TOPPING_SPICE);

//   // Смотрим сколько добавок
//   console.log("Ham1. Hamburger has %d toppings", hamburger.toppings.length); // 1

// /*
//   🔔 Обратите внимание на такие моменты:
//         ✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
//             другой код, а класс живет в изоляции от мира
//         ✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
//         чтобы нельзя было создать объект, не указав их
//         ✔️ необязательные (добавка) добавляем через методы
//         ✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
//             свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
//         ✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
//         ✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
//               а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
//         логично в тот момент, когда это потребуется, а не заранее.
// */

//=======================MODULE 6 TASK 1======================

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getAccountInfo = function () {
//     console.log(`Login: ${this.login}, email: ${this.email}`); 
// };

// const account = new Account('Mangozedog', 'mango@dog.woof');
// let user1 = new Account ('Jack', 'gjgjgj@gmail.com');
// let user2 = new Account ('Barbie', 'ololololo_lololo@gmail.com');
// let user3 = new Account ('Tor', 'jglksjdgskdlg_dkfjkg@ukr.com');

// account.getAccountInfo();
// user1.getAccountInfo();
// user2.getAccountInfo();
// user3.getAccountInfo();

// /************** 2 ***************/

// /*
//   Напишите функцию-конструктор StringBuilder.
//   На вход она получает один параметр string - строку.
//   Добавьте следующие методы в prototype функции-конструктора.
//     - getValue() - выводит в консоль текущее значение поля value
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */


// function StringBuilder(string = "") {
//     this.value = string;

//     StringBuilder.prototype.showValue = function () {
//         console.log(this.value);
//     };
//     StringBuilder.prototype.append = function (str) {
//         builder.value = `${builder.value}${str}`;
//     };
//     StringBuilder.prototype.prepend = function (str) {
//         builder.value = `${str}${builder.value}`;
//     };
//     StringBuilder.prototype.pad = function (str) {
//         builder.value = `${str}${builder.value}${str}`;
//     };
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// builder.showValue(); // '.^'

// builder.prepend('^');
// builder.showValue(); // '^.^'

// builder.pad('=');
// builder.showValue(); // '=^.^='

//=========================
// /*
//   Создайте класс Car с указанными полями и методами.
// */
/*
  Добавьте свойства:
    - speed - для отслеживания текущей скорости, изначально 0.
    - maxSpeed - для хранения максимальной скорости 
    - running - для отслеживания заведен ли автомобиль, 
      возможные значения true или false. Изначально false.
    - distance - содержит общий киллометраж, изначально с 0
*/

// class Car {
//     constructor({
//         maxSpeed = 0
//     }) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//     }
//     turnOn() {
//         // Добавь код для того чтобы завести автомобиль
//         // Просто записывает в свойство running значание true

//         return this.running = true;
//     }
//     turnOff() {
//         // Добавь код для того чтобы заглушить автомобиль
//         // Просто записывает в свойство running значание false
//         return this.running = false;
//     }
//     accelerate(spd) {
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed
//         if (spd <= this.maxSpeed) {
//             return this.speed = spd;
//         } else {
//             return 'Превышение скорости';
//         }
//     }
//     decelerate(spd) {
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed и не меньше нуля
//         if (spd <= this.maxSpeed && spd >= 0) {
//             return this.speed = spd;
//         }
//     }
//     drive(hours) {
//         // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//         // но только в том случае если машина заведена!
//         if (this.turnOn) {
//             return this.distance = (hours * this.speed);
//         }
//     }
// }

// const newCar = new Car({
//     maxSpeed: 310
// });

// console.log('Turn on the car', newCar.turnOn());
// console.log('Change speed', newCar.accelerate(40));
// console.log(newCar.accelerate(140));
// console.log("Your distance", newCar.drive(2));
// console.log('Change speed', newCar.decelerate(0));
// console.log("Turn off the car", newCar.turnOff());

//========================OR========================

// const Car = function (maxSpeed) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
// };

// Car.prototype.turnOn = function () {
//     return this.running = true;
// };


// Car.prototype.turnOff = function () {
//     return this.running = false;
// };

// Car.prototype.accelerate = function (spd) {
//     if (spd <= this.maxSpeed) {
//         return this.speed = spd;
//     } else {
//         return 'Превышение скорости';
//     }
// };

// Car.prototype.decelerate = function (spd) {
//     if (spd <= this.maxSpeed && spd >= 0) {
//         return this.speed = spd;
//     }
// };

// Car.prototype.drive = function (hours) {
//     if (this.turnOn) {
//         return this.distance = (hours * this.speed);
//     }
// };

// Car.prototype.getSpecs = function (car) {

//     console.log(`maxSpeed: ${this.maxSpeed},speed: ${this.speed}, running: ${this.running}, distance: ${this.distance}`);

// };
// const car = new Car({ maxSpeed: 100 });
// console.log('Turn on the car', car.turnOn());
// console.log('Change speed', car.accelerate(40));
// console.log( car.accelerate(140));
// console.log("Your distance", car.drive(2));
// console.log('Change speed', car.decelerate(0));
// console.log("Turn off the car", car.turnOff());

