const box = document.querySelector(".block");
const button = document.querySelector("button");
const root = document.getElementById("root");

// 1;

// button.addEventListener("click", () => {
//   box.style.background = "green";
//   box.style.width = "100px";
//   box.style.height = "100px";
// });

// 2

// const changeColor = () => {
//   const color = "orange";
//   box.style.background = color;
//   console.log(`Обнавлен цвет квадрата:${color}`);
// };
// button.addEventListener("click", changeColor);

// 3
// button.addEventListener("click", () => {
//   box.style.width = `${box.clientWidth + 70}px`;
//   box.style.height = `${box.clientHeight + 70}px`;
// });

// 4

// button.addEventListener("click", () => {
//   const text = "Random Text";
//   const paragraph = document.createElement("p");
//   paragraph.textContent = text;
//   paragraph.style.color = "blue";
//   root.append(paragraph);
// });

// 5
// button.addEventListener("click", () => {
//   // храним в переменной наш тескт
//   const text = "Random Text";
//   //   создаем параграф
//   const paragraph = document.createElement("p");
//   // указываем что в параграфе толжен быть текст который хранится в пермеенной "text"
//   paragraph.textContent = text;
//   //   уже параграф в котором есть текст добацляем в  элемент "root"
//   root.append(paragraph);

//   //   обращаемся ко всем тегам "p" и храним их в переменой allParagraphs
//   const allParagraphs = document.querySelectorAll("p");

//   //   Циклично делаем проверку параграфов, если индкс параграфа четный то параграф бует синим
//   //  в ином случеа будет зеленым
//   allParagraphs.forEach((eachParagraph, index) => {
//     if (index % 2 === 0) {
//       eachParagraph.style.color = "blue";
//     } else {
//       eachParagraph.style.color = "green";
//     }
//   });
// });
