// Таким образом можем создавать сслкыи на body head
// const body = document.body;
// const head = document.head;
// console.log({body,head});

// Для того чтобы взять ссылку на  один элемент через класс
// const div = document.querySelector(".container")

// Для того чотбы бзять ссылку на несколько элементов с общим калссом
// const boxes = document.getElementsByClassName("box")
// const boxes2 = document.querySelectorAll(".box")
// console.log({boxes2});


// Для того чотбы взять сслку на один элемент через id
// const title = document.getElementById("title")
// const title2 = document.querySelector("#title")
// console.log(title2);

// Для того чобы взять сслку на один элемент через названия тега
// const ul = document.querySelector("ul")

// Для того чобы взять сслку на несколько элементов через названия тега
// const lis = document.querySelectorAll("li");
// const lis2  = document.getElementsByTagName("li")
// console.log(lis2);


// const title = document.querySelector("h1")
// textContent позваляет изменять текст с помщю JS
// title.textContent="Hello World From JS"
// innerHTML пзоваляет в элемент тобавить как сам текст так и другие HTML элементы
// title.innerHTML = "<span style='color: red'>Hello</span> Wordl"


// 1 Создать промпт который задает вопрос "Какой текст вствить в загаловок"
// 2 Создать помрпт который задает вопрос "Хотите чтоб текст был эирный". Если ответ yes то делаем текст жирный через innerHTML если нет то простой


// Задание
// const text = prompt("Enter your text");
// const textType = confirm("Do wnat that your text be bold")
// if (textType) {
//     document.body.innerHTML = `<p style='font-weight:bold'>${text}</p>`
// } else {
//     document.body.innerHTML = `<p>${text}</p>`
// }

// Вариант 2
// document.body.innerHTML = `<p style=font-weight:${ textType ? "bold" : "inherit" }>${text} </p>`


// задавание inline стилей
// const h5 = document.querySelector("h5");
// const randomColorGenerator = () => `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
// const fontSize = +prompt("Enter font size of text")
// h5.style.backgroundColor = `${randomColorGenerator()}`;
// h5.style.fontSize = `${fontSize}px`;
// h5.style.color = "white";

// манипуляция классами


