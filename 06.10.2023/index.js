// Function Decloration
// sayHello(4);
// function sayHello() {
//     console.log("Hello World", arguments);
// }
// sayHello(1,2,3);

// Function Expression 
// sayHello2(); // Cannot access 'sayHello2' before initialization(создания)
// const sayHello2 = function() {
//     console.log("Hello World");
// };
// sayHello2();


// Arrow Function
// sayHello3() // Cannot access 'sayHello3' before initialization
// const sayHello3 = () => console.log("Hello Wolrd");
// sayHello3()


// Все примеры ниже можно сдлеать и на function decloration и function expression, returnSum2 в одну строгку можно длеать только через arrow function

// const printAllParams = (param1, param2 = 40, param3, param4 = NaN) => {
//     // ПОМНИМ ВСЕГДА, console.log возращает нечеог, поэтму перменная котроая ровна результату вызвоа функции ровна undefined
//     console.log(param1, param2, param3, param4);
// }

// const result = printAllParams("String", 12, null) // result = null

// const returnSum = (num1, num2) => {
//     // ключевое слово "return" возращает значение, любая переменная которая ровна результату вызаова функции 
//     //получает значение которое возращает ключевое слово "return"

//     // return возращает ОДНО значение (лобюй тип данных)
//     return num1 + num2;

//     // после клжчевого слово reutn остальнокод который был написан после него становится бессмысленным, поскольку он будет игнорироватся
//     console.log('1');
//     alert("Hello")
//     const example = 123
//     return example
// }

// const result = returnSum(1, 2); // 3

// => означает return поэтому мы его не пишем
// const returnSum2 = (num1, num2) => num1 + num2;
// const result2 = returnSum2(19, 1) //20;
// console.log(result2);


// const returnArgs = (arg1, arg2, arg3) => {
//     return `${arg1}: ${arg2 + arg3}`
// }  

// const res1 = returnArgs("Счет", 100, 200);
// console.log(res1);
// const res2 = returnArgs(100, "Счет", 300)
// console.log(res2);

// const returnArgs2 = ({ arg1, arg2, arg3 }) => {
//     return `${arg1}: ${arg2 + arg3}`
// }

// const res1 = returnArgs2("Счет", 100, 200);
// console.log(res1); // undefined: NaN

// const res2 = returnArgs2({ arg1: "Счет", arg2: 100, arg3: 200 });
// console.log(res2); // Счет: 300

// const res3 = returnArgs2({ arg3: 150, arg1: "Счет", arg2: 100 });
// console.log(res3); // Счет: 250


// const params = { arg3: 150, arg1: "Счет", arg2: 100 }
// const res3 = returnArgs2(params);
// console.log(res3); // Счет: 250


// 2. Написать фунцкию которая получет в качестве праметра счет и делает проверку:
// 2.1 Если счет меньше 300 то чаевые составляют 20 процентов
// 2.1 Если счет от 300 до 4500 чаевые составляют 15 процентов
// 2.1 Если счет от 500 чаевые составляют 10 процентов
// 3. Создать фунцкию которая в качестве параметра принимает счет передает значение счета в функцию котарая была вызваная в оснвонй функции
// 4. В конце прибавить чаетвеы и общий счет
// 5. Вывести счет след текстом "Total Result is: 450$"