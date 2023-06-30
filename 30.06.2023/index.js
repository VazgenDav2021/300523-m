// // Если не используем функции
// // 1 Создать две переменны, в первой хранить значение 5 в дрогуй 3.
// // // После этого создать еще одну переменную которая ровна их сумме
// // const num1 = 5;
// // const num2 = 3;
// // const sum1 = num1 + num2; // 8
// // console.log({ sum1 });

// // // 2 Создать две переменны, в первой хранить значение 15 в дрогуй 23.
// // // После этого создать еще одну переменную которая ровна их сумме
// // const num3 = 15;
// // const num4 = 23;
// // const sum2 = num3 + num4; // 38
// // console.log({ sum2 });

// // Если использовать функцию
// function calcSum(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
//   //   return num1 + num2;
// }

// // // 1 Создать две переменны, в первой хранить значение 5 в дрогуй 3.
// // // После этого создать еще одну переменную которая ровна их сумме
// const result1 = calcSum(5, 3); // 8
// // // 2 Создать две переменны, в первой хранить значение 15 в дрогуй 23.
// // // После этого создать еще одну переменную которая ровна их сумме
// const result2 = calcSum(15, 23); //48
// console.log({ result1, result2 });

// FUNCTION DECLORATION VS FUNCTION EXPRESSION VS ARROW FUNCTION

// FUNCTION DECLORATION
// на 35 строчки я создаю фунцкцию helloWorld без параметров, и в теле функции говорю что она должна мне возвращать текст
// function helloWorld() {
//   return `Hello everybody`;
// }
// // на 39 строке я создаю переменную которая ровна результату выполнения фунцкии helloWorld.
// // Поскольку фунцкия нам возвращает "Hello everybody" значение переменной "result" ровно "Hello everybody"
// const result = helloWorld(); //Hello everybody
// console.log({ result });

// FUNCTION EXPRESSION
// На 45 строке я создаю переменную helloWorld(это будет именем моей фунцкии) и говорим ей в теле фунцкии что она должна возвращать строку
// const helloWorld = function () {
//   // возвращаем строку
//   return `Hello Everybody`;
// };

// const result = helloWorld(); //Hello everybody
// console.log({ result });

// ARROW FUNCTION

// const helloWorld = () => {
//   return `Hello Everybody`;
// };

// то что написали на стоке 55 по 57 это у нас тоже верно
// только если тело стрелочной функции состоит из одной строки мы можем не пистаь {}  и не писать клюучеове слово "return"
// const helloWorld = () => `Hello Eveybody`;

// const result = helloWorld(); // Hello Eveybody
// console.log({ result });

// Отличие

// helloWorld(); // Hello everybody
// function helloWorld() {
//   console.log(`Hello everybody`);
// }
// helloWorld(); // Hello everybody

// helloWorld2(); // Cannot access 'helloWorld2' before initialization
// const helloWorld2 = function () {
//   console.log(`Hello everybody`);
// };
// helloWorld2(); // Hello everybody

// helloWorld3(); // Cannot access 'helloWorld3' before initialization
// const helloWorld3 = () => {
//   console.log(`Hello everybody`);
// };
// helloWorld3(); // Hello everybody
// FUNCTION DECLORATION VS FUNCTION EXPRESSION VS ARROW FUNCTION

// <!-- 1 Зачем писать return и зачем создовать переменную которая ровна результату выполнения фунцкии -->

// const addTwoSums = (num1, num2) => {
//   console.log(num1 + num2);
// };
// result будет undefined потому что наша функция нечего не вернула. Console.log,  alert тд
// нам не нечего не возвращают, они просто служат для предостовления информации как разработчику таки и пользователью
// const result = addTwoSums(1, 1); // undefined
// console.log({ result });

// В консоли будет "2" и будет "undefined". "2" выведется потому что мы на 95 строке вызвали фунцкию addTwoSums
// и у нас заработала тело функции. "undefined" вернулся потому что на 95 стоке мы сказалы перемнная result
// ровняется результату выполнения фунцкии addTwoSums, но однаврмеенно мы не указали в фунцкии
// то значения которая она должна возвращаеть в качестве результата
// Исохая из этого если мы хотим чтоб наша функция возращала какое то значение то мы дложны указать ключевое слово "return"

// const helloWorld = () => {
//   console.log("Я буду виден в консоли 1");
//   console.log("Я буду виден в консоли 2");
//   console.log("Я буду виден в консоли 3");
//   return `Hello World`;
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   console.log("Я не буду видет");
//   const newValue = 5;
// };

// helloWorld();

// const pow = (baseNumber, times) => baseNumber ** times;
// console.log(pow(2, 3)); // 8
// console.log(pow(2, 4)); // 16

// const calculateCheck = (number) => {
//   console.log("Данная функция заработал");
//   // если чек был на меньше или ровно 10 евро то возвращат чек + 10%
//   if (number <= 10) {
//     return number + number * 0.1;
//   } else {
//     // в другом случаее возвращат чек + 7%
//     return number + number * 0.07;
//   }
// };

// // здесь мы создаем функцию для того чтобы показать текстовое сообщение клиенту о его счете
// const checkForGuest = (name, check) => {
//   // здесь я вызываю calculateCheck и передаю в нее параемтр счета кторый палучаю как параметр функции checkForGuest.
//   //    Там выполняются определнные действия и мне возвтащается новое значение
//   //    Для того чтобы использовать это значение  удобно его хранить в качестве переменной
//   const realCheck = calculateCheck(check);
//   // здесь мы получив всю неоходимую инфомрацию выводим текст
//   return `Дорогой ${name}, вы сегодня поели на ${realCheck}
//   )} евро.  И эта сумма ${realCheck} довальна таки прилична `;
// };

// console.log(checkForGuest("Vazgen", 9));
// // console.log(checkForGuest("Sasha", 20));

// 2 Может ли быть функция в функции. Функция которая создает и вызывается в другой функции и использует(замыкает ее значение) называется замыканием
// function increment() {
//   let number = 0;

//   function incrementNumber() {
//     return number++;
//   }

//   return incrementNumber;
// }

// const reusltOfFunction = increment();
// console.log(reusltOfFunction()); // 0
// console.log(reusltOfFunction()); // 1
// console.log(reusltOfFunction()); // 2
// console.log(reusltOfFunction()); // 3

// // 3 Может ли функция использовать переменную которая объявленна вне функции
// const myName = "Vazgen";

// function printSomeOneName() {
//   return myName;
// }

// console.log(printSomeOneName()); // Vazgen

// // 4 Можем ли мы переменнуп обьявленную из функции использовать вне ее

// function printSomeOneName() {
//   const myName = "Vazgen";
// }
// console.log(myName); // myName is not defined

// Функция как параметр другой функции
// const returnTwo = () => 2;
// const returnOne = () => 1;

// const calcSum = (num1, num2) => num1 + num2;
// const result = calcSum(returnOne(), returnTwo()); //3
// console.log({ result });

// Параметры

// переменная thisisParametr в функции не будет виден поскольку функция во первых будет искать данное значение в своем теле или в аргументах если его найдет то только тогда будет искать вне функции
// const thisisParametr = "Global Value";
// const value1 = 1111;

// // параметр указывается в круглых скобках
// function exampleFunction(thisisParametr) {
//   //   const value1 = 1;
//   console.log({ thisisParametr, value1 });
// }

// exampleFunction("Vazgen"); // Vazgen
// exampleFunction(2); // 2
// exampleFunction(false); // false

// function printInfoAboutUser(name, surname, age, extraparametr) {
//   // extraparametr  у нас undefined посколькы во время вызова вызвоа функции мы передали 3 параметра а внтру тела функции мы хотим взят 4ый но его нет
//   // extraparametr: undefined;
//   console.log({ name, surname, age, extraparametr });
// }

// const personName = "Vazgen";
// const personSurname = "Davtyan";
// const personAge = 23;

// // функция которая вызвана на 217 строке получает правильную очередность параметров
// printInfoAboutUser(personName, personSurname, personAge, "а", "б", "c", "d");
// // Функция которая вызвана на 219 получает неправильную очередность поэтому в косноль логе // name: 'Vazgen', surname: 23, age: 'Davtyan'
// printInfoAboutUser(personName, personAge, personSurname, "а");

// ARGUMENTS
// function printAllArguments() {
//   console.log(arguments);
// }

// console.log(
//   printAllArguments(1, 2, 3, 4, 5, 6, 7, "a", "b", false, null, undefined)
// );

// Дефолтные параметры

// const printInfoAboutUser = (name = "Vazgen", age = 22) => {
//   console.log(`${name} is ${age} years old`);
// };

// console.log(printInfoAboutUser()); // Vazgen is 22 years old
// console.log(printInfoAboutUser("Alexei", 35)); // Alexei is 35 years old

// 1 Задание

// а) Написать функцию которая принемает 3 параметра - имя пассажира, номер места в самалете, пол пассажира. И вывисти результат как строку учитывая пол то есть если Мужчина то "мужчина Иван сидит на месте A33", если пол женский то "женщина Анна сидит на месте B55"
// б) Если пол не указан то возвращать текст "Данный пассажир не может пользоватся данной компанией"
// в) Если у нас не указан номер билтеа но его дефолтное значение пусть будет "кабина"
// Oleksandr Karadiaur
// const passanger = (name, gender = "", tiketNumber = "кабина") => {
//   if (gender === "") {
//     return `Данный пассажир не может пользоваться данной компанией`;
//   }
//   return `${gender} ${name} сидит на месте ${tiketNumber}`;
// };

// console.log(passanger("Александр", "мужчина", "А123"));
// console.log(passanger("Александр", "", "А123"));
// console.log(passanger("Александр", "мужчина"));

// Vladislav Gorin
// function airPlan() {
//   const name = prompt("Укажите имя");
//   const number = +prompt("Укажите номер");
//   const sex = prompt("Укажите пол");

//   if (!sex) {
//     console.log(`"Данный пассажир не может пользоватся данной компанией"`);
//   } else if (!number) {
//     console.log(`кабина`);
//   } else if (sex === "women" || sex === "w" || sex === "W") {
//     console.log(`Женщина ${name} сидит на месте ${number}`);
//   } else if (sex === "man" || sex === "m" || sex === "M") {
//     console.log(`Мужчина ${name} сидит на месте ${number}`);
//   }
// }

// Nikolay Osetrov
// const name = prompt("Enter the name from passanger");
// const seatNr = prompt("Number of seat");
// const sex = prompt("Enter the sex of passanger");

// const func = (name, seatNr, sex) =>
//   `${sex === "man" ? "мужчина" : "женщина"} ${name} сидит на месте ${seatNr}`;
// console.log(func(name, seatNr, sex));

// Лилия Павлова
// function passenger(name, numberOfTicket = "Кабина", gender) {
//   if (gender === "мужчина") {
//     console.log(`Мужчина ${name} сидит на месте ${numberOfTicket} `);
//   } else if (gender === "женщина") {
//     console.log(`Женщина ${name} сидит на месте ${numberOfTicket} `);
//   } else console.log(`Данный пассажир не может пользоватся данной компанией`);
//   if (!numberOfTicket) {
//     console.log(`Кабина`);
//   }
// }
// passenger("Лилия", "женщина");

// Vazgen
// const returnPassangerInfo = (name, ticketNumber = "кабина", gender) => {
//   if (!gender || gender !== "M" || gender !== "F") {
//     console.log("Данный пассажир не может литат");
//   } else if (gender === "M" || ticketNumber) {
//     console.log(`Мужчина ${name} сел на место ${ticketNumber}`);
//   } else if (gender === "F" || ticketNumber) {
//     console.log(`Женщина ${name} села на место ${ticketNumber}`);
//   }
// };
