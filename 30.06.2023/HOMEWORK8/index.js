// 1

// для того чтобы отрисовать элементы надо выбрать элементы в котром будем отрисовават
// для того чтобы взяли элемент с классом "numbers" используем метод DOM - querySelector
const numbersBox = document.querySelector(".numbers");

// делаем цикл от 100 то 50(включительно)
// for (let i = 100; i >= 50; i--) {
//   // делаю проверку если число делится на 10 то пусть заработает тело условия
//   if (i % 10 === 0) {
//     // во время каждой итерации создаем параграф
//     const p = document.createElement("p");
//     // параграфу присваеваем то значение которое итерируется и соотверстувет условию
//     p.textContent = i;
//     // после того как мы созадли параграф и дали ему значение то добавляем данный параграф
//     // в элемент с классом "numbers"
//     numbersBox.append(p);
//   }
// }

// Alexandr (лучшее решение)
// for (let i = 100; i >= 50; i -= 10) {
//   // делаю проверку если число делится на 10 то пусть заработает тело условия
//   // во время каждой итерации создаем параграф
//   const p = document.createElement("p");
//   // параграфу присваеваем то значение которое итерируется и соотверстувет условию
//   p.textContent = i;
//   // после того как мы созадли параграф и дали ему значение то добавляем данный параграф
//   // в элемент с классом "numbers"
//   numbersBox.append(p);
// }

// 2

// здесь достучались то элемента в массиве
const stringsContainer = document.querySelector(".strings_container");
const stringsArray = ["Vazgen", "Pavel", "Alexei", "Yurii", "Dima"];

for (let i = 0; i < stringsArray.length; i++) {
  const p = document.createElement("p");
  p.textContent = stringsArray[i];
  stringsContainer.append(p);
}

// // здесь создаем пустую строку, в дальнейшем итеративно будем в нее доавлять наши параграфы
// let html = "";

// // здесь делаем цикл чтобы пройтись по всем элементам массива
// stringsArray.forEach((eachText) => {
//   // во время каждой итерации к строке html добавит динамичный параграф
//   html += `<p>${eachText}</p>`;
// });

// // после итерации с помощью foreach, у нас в переменной html уже есть все параграфы
// // берем элемент с классом "strings_container" и в него добавляем новоабразованный html
// stringsContainer.insertAdjacentHTML("afterbegin", html);
