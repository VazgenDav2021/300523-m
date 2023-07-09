// 1
// для того чтобы отрисовать элементы надо выбрать элементы в котром будем отрисовават
// для того чтобы взяли элемент с классом "numbers" используем метод DOM - querySelector
// const numbersBox = document.querySelector(".numbers");

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
// const stringsContainer = document.querySelector(".strings_container");
// const stringsArray = ["Vazgen", "Pavel", "Alexei", "Yurii", "Dima"];

// for (let i = 0; i < stringsArray.length; i++) {
//   const p = document.createElement("p");
//   p.textContent = stringsArray[i];
//   stringsContainer.append(p);
// }

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

// 3
// обращяюсь к контейенру чтобы мой новазборазованный элемент поместить внего
// const user_container = document.querySelector(".user_container");
// // создаю переменную для того чтобы хранить в дальнешйем наш новый html кусок кода(в конце сделать консоль)
// let usersHTML = "";

// const users = [
//   { name: "Vazgen", age: 23, lastName: "Dabtyan" },
//   { name: "Yuri", age: 12, lastName: "Niulin" },
//   { name: "Maria", age: 32, lastName: "Ardova" },
//   { name: "Nikolay", age: 12, lastName: "Sidorov" },
//   { name: "Alexandr", age: 29, lastName: "Grishko" },
// ];

// // мы создаем массив где будем хранить отфильтрованных пользователей исходя из условия
// const filteredUsers = [];

// // итериуемся по массиву
// for (let index = 0; index < users.length; index++) {
//   // для нашего удобство храним значения возраста пользователя в новой переменной
//   const userAge = users[index].age;
//   // ставим условие если возраст итерируемого пользовтелья больше или равен 18
//   // то в массив filteredUsers добавь этого пользователья
//   if (userAge >= 18) {
//     filteredUsers.push(users[index]);
//   }
// }

// // после того как добавили в отфильторавнный массив пользоватлеей делаем итерация
// // И вовремя каждой итерации создаем новый кусок html кода
// filteredUsers.forEach((eachUser) => {
//   // usersHTML переменная во время каждой итерации прибавляет к себе ее предыдущее состояние и новый html код в  виде строки
//   usersHTML += `
//   <div class="eachUser">
//     <p>User fullName: ${eachUser.name} ${eachUser.lastName}</p>
//     <p>User age: ${eachUser.age}</p>
//   </div>`;
// });

// // Когда наша переменная usersHTML получила весь набор html кода то мы ее добавляем в контейнер "user_container"
// user_container.insertAdjacentHTML("afterbegin", usersHTML);

// // Другой тип решения

// const user_container = document.querySelector(".user_container");

// const users = [
//   { name: "Vazgen", age: 23, lastName: "Dabtyan" },
//   { name: "Yuri", age: 12, lastName: "Niulin" },
//   { name: "Maria", age: 32, lastName: "Ardova" },
//   { name: "Nikolay", age: 12, lastName: "Sidorov" },
//   { name: "Alexandr", age: 29, lastName: "Grishko" },
// ];

// const renderUsers = (eachUser) => {
//   const div = document.createElement("div");

//   const nameParagraph = document.createElement("p");
//   nameParagraph.textContent = `User full name: ${eachUser.name} ${eachUser.lastName}`;

//   const ageParagraph = document.createElement("p");
//   ageParagraph.textContent = `User age is: ${eachUser.age}`;

//   div.classList = "eachUser";
//   div.append(nameParagraph, ageParagraph);
//   user_container.append(div);
// };

// for (let index = 0; index < users.length; index++) {
//   if (users[index].age >= 18) {
//     renderUsers(users[index]);
//   }
// }
