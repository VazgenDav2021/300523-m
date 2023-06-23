// -------------------------VAR LET CONST-------------------------
// // 1
// var name = "Vazgen"; // здесь создал переменную name = "Vazgen"
// var name = "Julia"; // здесь я пересоздал переменную name = "Julia"
// console.log(name);
// // 2
// let name2 = "Vazgen"; // здесь создал переменную name = "Vazgen"
// let name2 = "Julia"; // Identifier 'name2' has already been declared
// console.log(name2);

// Исходя из примера 1 и 2 можем результировать что с помощю VAR мы можем заного
// декларировать переменные с одним и тем же названием. А в LЕТ не можем

// // 3
// console.log(age); // undefined
// var age = 22;
// // 4
// console.log(age2); // Cannot access 'age2' before initialization
// let age2 = 22;

// // Исходя из примера 3 и 4 можем результировать что с переменные объявленные через VAR
// // можно использовать до их инициализации (создания), ошибки не будет а будет undefined.
// // Если сделаем тоже самое через LET, то будет ошибка что мы не можем обращятся к переменной до
// // ее инициализации

// // 5
// var myMoney = 100;
// myMoney = 200;

// let myName = "Vazgen";
// myName = "Igor";
// console.log(myMoney, myName); //200 'Igor'

// // 6
// const city = "New York";
// // city = "Berlin"; // Assignment to constant variable.
// console.log(city);

// // Исходя из примера 5 и 6 можем результировать что с переменные объявленные через VAR
// и LET, можно менять. A через CONST менять нельзя

// ------------------------- JS TERMNIAL VS JS BROWSER -------------------------
// если мы работаем в термниале то будет ошибка: -  ReferenceError: prompt is not defined
// если будем работать в браузере то у нас просто отаброзится окно
// const age = +prompt("enter your age");

// ------------------------- DATA TYPES -------------------------

// Примитивы
// у переменный name, anotherNaem тип данных - строка
// let name = "Example";
// let anotherNaem = `Example2`;

// //  у переменной number, number2 тип данных число
// let number = 12345678; // 12345678
// let number2 = 1_500_000; // 1500000

//  у переменной isProgrammer, hasMoney тип данных boolean
// let isProgrammer = true;
// let hasMoney = false;

// у переменной hisName, herName тип данных undefined
// let hisName; // undefined
// let herName; //undefined

// у переменной sum NAN
// let sum = 123 / {}; // NaN -> Not A Number
// Примитивы

// Ссылочные типы данных
// let vazgenInfo = {
//   name: "Vazgen",
//   isProgrammer: true,
//   age: 22,
//   isMarried: undefined,
//   kids: null,
//   famili: {
//     father: "David",
//     mother: "Elza",
//   },

//   friends: ["Egor", "Nikita"],
// };

// const num1 = "123";
// const num2 = 123;
// console.log(typeof num1); //string
// console.log(typeof num2); //number

// ------------------------------------------TRANSFORMATION DATA TYPES ------------------------------------------
// const priceOfProduct = "7000";
// let text = "abcd";
// console.log(priceOfProduct + 100); // 7000100

// Число строку в другие типды данных
// 1 строку -> число
// const formatedPrice = Number(priceOfProduct);
// const formatedPrice2 = +priceOfProduct;
// const formatedData = Number(text); // NaN -> abcd никак нельзя переобрзовать в число
// const formatedData2 = +text; // NaN -> abcd никак нельзя переобрзовать в число

// 2 строку -> булево
// если в строке есть символ (пробел тоже считается символом) то проверим на условие то оно будет true,
// если строка пуста то будет false
// const boleanText = Boolean(text); // true
// const boleanText2 = Boolean(""); // false
// const boleanText3 = Boolean(" "); // true
// const boleanText4 = !!text; // true
// const boleanText5 = !!""; // false
// const boleanText6 = !!" "; // true

// Число в другие типы данных
// 1 число -> строку
// let number = 1000;
// let text1 = String(number);
// let text2 = number + "";
// let text3 = "" + number;
// // для тернарного оператора открываем ковычки ``, ставим $, открываем {}, и в них пишем перемнную или значние
// let text4 = `${number}`;
// let text5 = `${1 + 2 + 3}`; // ${6}
// let text6 = "${1 + 2 + 3}"; // ${1 + 2 + 3}
// console.log(text5);

// 2 Число в булево
// const num1 = 0;
// const num2 = 110;
// const num3 = -1;
// const num4 = 1;
// const num5 = -0;
// // Любое число кроме 0 и -0 это у нас true
// const bool1 = Boolean(num1); // false
// const bool2 = Boolean(num2); // true
// const bool3 = Boolean(num3); // true
// const bool4 = Boolean(num4); // true
// const bool5 = Boolean(num5); // false

// Пример
// const name = prompt("Enter your name");
// if (name) {
//   console.log(`Hello ${name}`);
// } else {
//   console.log(`You didnt enter your name`);
// }

// const value = +prompt("Enter your value");

// if (value) {
//   console.log(`You entered value: ${value}`);
// } else {
//   console.log(`You didnt enter any value`);
// }

// ------------------------------------------TRANSFORMATION DATA TYPES ------------------------------------------

// ------------------------------------------ Math operators ------------------------------------------
// console.log(1 + "1"); // 11 -> если я делаю прибавление любого значение со строкой, занчения просто слияются
// console.log(1 - "1"); // 0 -> потому что при минусе JS движок пытается все значния поменят на число
// console.log(1 - "123asdfghj123"); // NaN -> потому что при минусе JS движок пытается все значния поменят на число
// console.log(1 * "34"); // 34
// console.log(1 / "34"); // 0.029411764705882353
// console.log(15 % "3"); // 0
// console.log(15 % 4); // 3
// console.log(2 ** 3); // 8
// console.log(Math.sqrt(144)); 12
// console.log(16 ** 0.25); // 2

// let number = 2;
// // number += 1; -> number = number + 1;
// // console.log(++number); //3;
// // console.log(number++); //3;
// console.log(number); // 3

// let number2 = 10;
// number2-=2 -> number2 = number2 - 2
// --number
// number--
// ------------------------------------------ Math operators ------------------------------------------

// const vazgenIfno = ["Vazgen", 22, "YErevan", false];
// const [firstValueOfArray, secondValueOfArray, ...restElements] = vazgenIfno;
// console.log(firstValueOfArray, secondValueOfArray, restElements);

// const obj = {
//   name: "Vazgen",
//   age: 22,
//   city: "Yerevan",
//   isProgrammer: true,
// };

// const city = "Berlin";
// const { name, isProgrammer, city: exampleName } = obj;
// console.log(name, city, exampleName);

// ------------------------------------------ IF ELSE ELSE IF ------------------------------------------

// if (условие1){
//    инструкция1
// }
// else if (условие2)
//    инструкция2
// else if (условие3)
//    инструкция3
// ...
// else
//    инструкция

// const value = +prompt("Enter value from 0-10");

// if (value === 0) {
//   console.log("U tebya net fantazii");
// } else if (value === 3) {
//   console.log("Bog lyubit Troyecu");
// } else if (value === 3) {
//   console.log("Nexoroshoe chislo ti vibral");
// } else {
//   console.log("Chislo kak Chislo");
// }

// const name = prompt("Enter your name");
// const status = prompt("Enter your status");

// if (status) {
//   if (status === "ADMIN") {
//     if (name === "Vazgen") {
//       console.log("Ti ne samij glavnij admin");
//     } else if (name === "Ivan") {
//       console.log("Ti samij glavnij");
//     } else {
//       console.log("Privet noij Admin");
//     }
//   } else {
//     console.log("Privet prostoj sotrudnik");
//   }
// } else {
//   console.log("Vi ne vveli vash status");
// }

// 1
// в 222 строчке идет проверка был ли введено значение status если было введно
// то пусть заработает код от 223 по 233 строку.
//  2
//Если у нас status не введен то пусть заработает 235 строка
// 3
// Если Статус ADMIN то пусть заработает код от 225 по 230 строку
// 4
// Если статус не ADMIN то пусть заработает строка 232
// 5
// Если имя Vazgen то пусть сработает 225 строка
// 6
//Если имя Ivan то пусть сработает 227 строка
// 7 Если условие 5 и 6 не верны то пусть заработает 232 строка

// -------------------------------------------  = == == ! -------------------------------------------

// 1 = - означает что мы делаем присваевание let name ="", let value = prompt()
// 2  == - у нас проверка на ровно (не строгое)
// console.log("1" == 1); // true
// console.log(1 == 1); //true
// Когда идет сравнение через == то сравниваются только значения
// 3 === у нас проверка на ровно (строгое)
// console.log("1" === 1); // false
// console.log(1 === 1); //true
// Когда идет сравнение через === то сравниваются как значения так и  типы данных
// ! - Сперва переабразовывает значние в булево потом ставим противоположное значение
// console.log(!"Hello World"); // false
// console.log(!""); // true
// console.log(!0); // true
// console.log(!1); // false
// console.log(!false); // true

// -------------------------------------------  LOOPS -------------------------------------------

// While
// у меня будет работать данных цикл пока условие верное
// while (true) {
//   console.log("Hello Wordl");
// }

// let number = 0;
// while (number < 10) {
//   console.log(`Hello ${number} times`);
//   ++number;
// }

// Для работы цикла while пишем ключевое слово "while", после этого
// в круглых скобках пишем условие(цикл будет работать столько пока условие венрое)
// пишем тело цикла(оно у нас будет работать при каждой итерации). Когда усливе false
// то цикл заканчивает свою работу
// let name = prompt("Enter your name");
// while (!name) {
//   let newName = prompt("You dindt enter your name, please fill it");
//   if (newName) {
//     name = true;
//   }
// }
