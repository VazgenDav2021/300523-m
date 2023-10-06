// https://learn.javascript.ru/array

function helloWorld() {
    return "Say Hello";
};

// const array = [1, "Hello", NaN, undefined, false, helloWorld(), null, [2, 4, 5, ['H']]];
// const lengthOfArray = array.length // для получения длины массива
// const firstElementOfArray = array[0]; // для получения первого элемента массива
// const lastElementOfArray = array[array.length-1]; // для получения последнего элемента массива
// array[8] = "Last Element"; // таким образом мы добавляем новый элемент в конец массива
// array[0] = "0"; // меняем знчаение в индексе 0 на "0"

// const firstElementOfArray1 = array[0]; // 1
// const secondElementOfArray1 = array[1]; // 2
// console.log(firstElementOfArray1,secondElementOfArray);

// для того чотбы удобнее брать элементы из массива лучше использовать деструктуризацию массива
// деструктризация происходит по очереди
// Если хотим получить перемены в котых будет остальные значения массива пишем "...{название массива}"
// https://learn.javascript.ru/destructuring-assignment
// https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/theory_unit
// const [firstElementOfArray2, secondElementOfArray2, thirdEelemntOfArray, ...restElementOfArray] = array;
// console.log(firstElementOfArray2, secondElementOfArray2, thirdEelemntOfArray);


// Методы массива
// https://habr.com/ru/companies/plarium/articles/483958/
// https://learn.javascript.ru/array-methods
// const array = [1, 2, 3, 4, 5, 6, 13, 16, 11, 29, 17, 28];
// 1 forEach
// array.forEach(function (element, index, array) {
//     console.log(index, element, array);
// });
// 2 map
// const dobuledArray = array.map(function (element, index, array) {
//     return element * 2
// });
// 3 filter
// const allOddElements = array.filter(function (element, index, array) {
//     return element % 2 !== 0;
// })
// 4 find
// const firstOddElement = array.find(function (element, index, array) {
//     return element % 2 !== 0;
// });
// 5 sort
// const sortedArray = array.sort();
// const sortedArray2 = array.sort(function (element1, element2) {
//     return element1 - element2
// });
// 6 reduce
// const sumOfELementOfArray = array.reduce(function (prevState, currentState, index, array) {
//     return prevState + currentState
// }, 0)
// 7 concat
// const firstArray = [1, 2, 3, 4];
// const secondArray = ['a', 'b', 'c', 'd'];
// const thirdArray = ["-", "_", "+", ")"]
// const comvinedArray = firstArray.concat(secondArray, thirdArray);
// const comvinedArray2 = [...firstArray, ...secondArray, ...thirdArray];
// console.log(comvinedArray);
// console.log(comvinedArray2);



const people = [
    {
        name: "Иван",
        age: 30,
        city: "Москва",
        salary: 50000
    },
    {
        name: "Анна",
        age: 25,
        city: "Санкт-Петербург",
        salary: 45000
    },
    {
        name: "Мария",
        age: 35,
        city: "Москва",
        salary: 60000
    },
    {
        name: "Петр",
        age: 28,
        city: "Новосибирск",
        salary: 48000
    },
    {
        name: "Елена",
        age: 27,
        city: "Новосибирск",
        salary: 52000
    }
];

// 1 Создать переменную в которой будет хранится новый отсартировнаный масси по зп
// 2 Найти человека у которого возраст равен 27 (find)
// 3 Создать новтй массив с полями имя и возраст (map)
// 4 Создать новыю переменную которая ровна сумме всех зп (reduce)
// 5 Создать 2 переменные в которых хранятся маассыв с пользвоталми горадмами Москва и Новосибирск
// 6 Создать новую переменную которая ровна массивы из 2 масиввов городов (пунк 5)