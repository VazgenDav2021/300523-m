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
// 2.1 Если счет от 300 до 450 чаевые составляют 15 процентов
// 2.1 Если счет от 450 чаевые составляют 10 процентов
// 3. Создать фунцкию которая в качестве параметра принимает счет передает значение счета в функцию котарая была вызваная в оснвонй функции
// 4. В конце прибавить чаетвеы и общий счет
// 5. Вывести счет след текстом "Total Result is: 450$"


// Shafayat
// function calculate(bill) {
//     if (bill < 300) {
//         return bill * 0.2
//     } else if (bill >= 300 && bill <= 450) {
//         return bill * 0.15
//     }

//     return bill * 0.1
// }
// function totalResult(bill) {
//     const res = bill + calculate(bill);
//     console.log(`Result is: ${res}$`);
// }
// totalResult(250);


// Elena
// const bill = (billInChek) => {
//     let tea;
//     if (billInChek < 300) {
//         tea = billInChek * 0.2
//     }
//     else if (billInChek >= 300 && billInChek < 500) {
//         tea = billInChek * 0.15
//     }
//     else if (billInChek >= 500) {
//         tea = billInChek * 0.1
//     }
//     const rez = billInChek + tea;
//     return rez

// }

// rezult = bill(500);
// console.log(rezult);


// Liliia
// function calculateTips(bill) {
//     if (bill < 300) {
//         return bill * 0.2;
//     } else if (bill >= 300 && bill < 450) {
//         return bill * 0.15;
//     }
//     return bill * 0.1;
// }
// const bill = 500;
// const resultTips = calculateTips(bill);

// function totalResult(bill, resultTips) {
//     const total = bill + resultTips;
//     console.log(`Total Result is: ${total}$`);
// }
// totalResult(bill, resultTips);



// Nadejda
// function countTips(sum) {
//     if (sum < 300) {
//         return sum * 0.2;
//     } else if (sum >= 300 && sum <= 450) {
//         return sum * 0.15;
//     }
//     return sum * 0.1;
// };

// function countAllSum(sum) {
//     const tips = countTips(sum);
//     const total = sum + tips;
//     return total;
// };

// countAllSum(120);
// countAllSum(470);


// Janis
// function billCalc(bill) {
//     if (bill < 300) {
//         return bill * 0.20;
//     } else if (bill >= 300 && bill < 450) {
//         return bill * 0.15;
//     }
//     return bill * 0.10;
// };

// let personBill = 300;
// console.log('Ваш счет: ' + `${billCalc(100) + personBill}$`);

// Alona
// function returnCheck(bill) {
//     if (bill < 300) {
//         return bill * 0.2
//     }
//     else if (bill >= 300 && bill < 450) {
//         return bill * 0.15
//     }
//     return bill * 0.1;
// };

// function calcTotalBill(bill) {
//     const tip = returnCheck(bill);
//     const totalBill = bill + tip;
//     return totalBill;
// }


// const billAmount = 450;
// const tip = calcTotalBill(billAmount);
// console.log(`Total Result is: $${tip}`);


// Ulyana
// function calculateTotalWithTip(bill) {
//     let tipPercentage;

//     if (bill < 300) {
//         tipPercentage = 0.2;
//     } else if (bill >= 300 && bill < 450) {
//         tipPercentage = 0.15;
//     } else {
//         tipPercentage = 0.1;
//     }

//     const tip = bill * tipPercentage;
//     const total = bill + tip;
//     return `Total Result is: ${total}`;
// }

// const billAmount = 450;
// const totalAmount = calculateTotalWithTip(billAmount);