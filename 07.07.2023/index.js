// Как создать массив

// 1
// const arr = new Array(1, 2, 3);
// console.log({ arr }); // [ 1, 2, 3 ]

// 2
// const arr = [1, 2, 3];
// console.log(arr);

// Пункт 2 из ридми
// const arrayOfValue = [
//   1,
//   2,
//   "Vazgen",
//   null,
//   undefined,
//   ["A", "B", "C", ["E", "F", ["G"]]],
//   [],
//   false,
//   { name: "Igor" },
// ];

// function generateNumber() {
//   return Math.floor(Math.random() * 5);
// }

// const name = arrayOfValue[2]; //Vazgen
// const undefinedValue = arrayOfValue[2 + 2]; //Vazgen
// const randomValue = arrayOfValue[generateNumber()]; //Vazgen
// console.log({ name, undefinedValue, randomValue });

// Как добавлять элементы в массив
// const arr = [];
// const isProgrammer = false;

// function generateNumber() {
//   return Math.floor(Math.random() * 5);
// }

// arr[0] = "Vazgen";
// arr[1] = "Davtyan";
// arr[1 + 1] = "22";
// arr[isProgrammer ? 3 : 4] = "Programmer";
// arr[isProgrammer ? 4 : 3] = "FRONTEND";
// arr[100] = "Random Value";

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Посмотреть количество элементов в массиве
// const lenghtOfArray = arr.length;
// console.log({ lenghtOfArray });

// Если хотим взять перевый элемент массива
// const firstElementOfArray = arr[0];
// console.log({ firstElementOfArray });

// Если хотим взять последин элемент массива
// const lastElementOfArray = arr[arr.length - 1];
// console.log({ lastElementOfArray });

// В массиве можно даже хранить результат вызова функции

// function generateNumber() {
//   return Math.floor(Math.random() * 5);
// }

// function generateWelocmeText(status = "REGULAR") {
//   if (status === "KING") {
//     return "HELLO MASTER";
//   } else {
//     return "HELLO POOR MAN";
//   }
// }

// const arr = [
//   generateNumber(),
//   generateNumber(),
//   generateNumber(),
//   generateWelocmeText("KING"),
//   generateWelocmeText(),
//   generateWelocmeText(),
// ];

// console.log({ arr });

const arr = [1, 2, 3, 4, 5, 6];
// Метод добавления элемента в конец массива
// const newLengthOFArray = arr.push("String");
// console.log({ arr, newLengthOFArray });

// Метод добавления элемента в начало массива
// const newLengthOFArray = arr.unshift("Stirng");
// console.log({ arr, newLengthOFArray });

// Метод удаление элемента из массива с конца
// const cuttedElement = arr.pop();
// console.log({ arr, cuttedElement }); // 1, 2, 3, 4, 5

// Метод удалние элемента из массива с начала
// const cuttedElemen = arr.shift();
// console.log({ arr, cuttedElemen }); // 2, 3, 4, 5, 6

// Для того чотбы циклично проходится по массиву
// FOREACH
// let sum = 0;
// const result = arr.forEach(function (iterableElement, index, currentArray) {
//   console.log({ iterableElement, index, currentArray });
//   sum += iterableElement;
// });
// // result: undefined;
// console.log({ sum, result });

// MAP
// const newArray = arr.map( (iterableElement, index, currentArray)=> {
//   return iterableElement * 2;
// });

// console.log({ newArray });
// Для трансформации массива
// const sumOfArray = arr.reduce(function (
//   previousValue,
//   currentValue,
//   index,
//   currentArray
// ) {
//   return previousValue + currentValue;
// },
// 0);

// console.log({ sumOfArray });
