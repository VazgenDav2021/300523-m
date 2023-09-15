// let number = 20
// number = "Hello World"

// 1. создать переменную в которой будете хранить свое имя
// 2. создать переменную в которой будете хранить свой возраст
// 3. создать переменную в которой будете хранить свой вес
// 4. создать переменную в которой будете хранить свой рсот
// 5. Посчитайте индекс массы тела



// // если используем var что можно заного декларировать переменные
// // если используем var то переменные которые были были использованы до их создания не брасают ошибку а просто получают значение undefined
// // если используем var что можно менять значение переменной
// console.log(number); // undefined
// var number = 10;
// var number = 20;
// number = "33"
// console.log(number); // 20



// если используем let что нельзя заного декларировать переменные
// если используем let то переменные которые были были использованы до их создания //брасают ошибку что нет такой переменной
// если используем let что можно менять значение переменной
// console.log(number); // error
// let number = 10;
// // let number = 20;  // error
// number = "33"
// console.log(number); // 33


// Math operators
// let number = 10
// // let addOne1 = ++number; // 11
// let addOne2 = number + 1 // 12;

// let reduceByOne1 = --number;
// let reduceByOne2 = number - 1 // 12;

// const number2 = 2
// console.log(number2 ** 10); // ** возводит в степень
// console.log(number2 * 2); // * умнажает
// console.log(number2 / 2); // / делет
// console.log(15 % 4);


// Bugs in js
// когда к стокре прибавить сторку или любой иной тип данных то результат oперации будет просто склеивание
// const number = 123
// const number2 = '2'
// console.log(number + number2); // 1232
// console.log(number - number2); // 121
// console.log(number * number2); // 246
// console.log(number / number2); // 61.5
// console.log("123" + "123");// 123123
// console.log("Hello" + true);// Hellotrue
// console.log("Hello" + null);// Hellonull
// console.log("Hello " + "World");// Hellonull
// console.log("Hello" + " World");// Hellonull


// “10” + “10”
// 1 + 1
// 2321 % 32
// 342 / 2
// 4 + 4
// “How”  + “Old” + “Are” + “YOU” + “?”
// true + false
// true + true
// true + 10
// 9 - true
// 5 ** 5



// Переобразовании данных

// 1 Переобразование в строку
// console.log(String(11));
// console.log(11 + "");
// console.log(""+ 11);


// 2 Переобразование в число
// console.log(Number("11"));
// console.log(+"11");
// console.log("11" * 1);
// console.log("11" / 1);
// console.log(Number("abc")); // NaN
// console.log(+("abc")); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(+(true)); // 1
// console.log(+(false)); // 0

// 3 
// console.log(Boolean("")); // false
// console.log(Boolean("asdasdasd")); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(100)); // true
// console.log(Boolean(-100)); // true
// console.log(Boolean(-10)); // true


// ! знак превращает тип данных в булеов и возращает противоположное значение
// console.log(!true); // false
// console.log(!false); // true
// console.log(!0); // true
// console.log(!10); // false
// console.log(!""); // true
// console.log(!" "); // false
// console.log(!"asd"); // false


// // !! этеднтично  Boolean
// console.log(!!0); //false
// console.log(!!15); //false
// console.log(!!""); //false
// console.log(!!" "); //true