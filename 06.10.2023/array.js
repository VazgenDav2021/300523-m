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

// Liliia
// const sortBySalary = people.sort((a, b) => a.salary - b.salary)
// const findAge = people.find(el => el.age === 27)
// const nameAndAgeArray = people.map(({ name, age }) => {
//     return {
//         name,
//         age
//     }
// })
// const sumOfsalary = people.reduce((accumulator, el) => {
//     return accumulator + el.salary
// }, 0)
// const novosibCity = people.filter(el => el.city === 'Новосибирск')
// const mosсowCity = people.filter(el => el.city === 'Москва')
// const twoCity = novosibCity.concat(mosсowCity)


// Laziza
// const mainSalary = people.sort((a, b) => a.salary - b.salary)
// const person = people.find(person => person.age === 27)
// const newMa = people.map(person => ({ name: person.name, age: person.age }))
// const sumOfSallary = people.reduce((accumulator, currentPerson) => {
//     return accumulator + currentPerson.salary;
// }, 0);
// const moscow = people.filter(person => person.city === "Москва")
// const novosibirsk = people.filter(person => person.city === "Новосибирск")
// const twoCities = moscow.concat(novosibirsk)
// const twoCitie2 = [...moscow, ...novosibirsk]

// Shafayat
// const filterSalary = people.sort((a, b) => a.salary - b.salary);
// const age27 = people.find((el) => el.age === 27)
// const nameAge = people.map(({ name, age }) => {
//     return {
//         name, age
//     }
// });
// const sumSalary = people.reduce((accumulator, el) => {
//     return accumulator + el.salary;
// }, 0)
// const cityMoskva = people.filter((el) =>  el.city === "Москва" )
// const cityNovosibirsk = people.filter((el) =>  el.city === "Новосибирск" )
// const twoCity = [...cityMoskva, ...cityNovosibirsk]

// Ulyana
// const people2 = [
//     {
//         name: "Иван",
//         age: 30,
//         city: "Mainz",
//         salary: 50000
//     },
//     {
//         name: "Анна",
//         age: 25,
//         city: "Санкт-Петербург",
//         salary: 45000
//     },
//     {
//         name: "Мария",
//         age: 35,
//         city: "Mainz",
//         salary: 60000
//     },
//     {
//         name: "Петр",
//         age: 28,
//         city: "Baden",
//         salary: 48000
//     },
//     {
//         name: "Елена",
//         age: 27,
//         city: "Baden",
//         salary: 52000
//     }
// ];
// const sortedBySalary = people.sort((a, b) => a.salary - b.salary);
// const age27 = people.find(person => person.age === 27);
// const nameAge = people.map(person => ({ name: person.name, age: person.age }));
// const totalSalary = people.reduce((accumulator, person) => accumulator + person.salary, 0);
// const usersInMainzAndBaden = people2.filter(person => person.city === 'Mainz' || person.city === 'Baden');

// Anna
// const sortedPeople = people.sort((a, b) => a.salary - b.salary)
// const elAge = people.find(el => el.age === 27)
// const newPeople = people.map(person => ({ name: person.name, age: person.age }))
// const sumOfSalary = people.reduce((accumulator, el) => {
//     return accumulator + el.salary;
// }, 0)
// const moscow = people.filter(el => el.city === 'Москва')
// const novosibirsk = people.filter(el => el.city === 'Новосибирск')
// const cities = moscow.concat(novosibirsk)
// const twocities = [...moscow, ...novosibisrk]

// Natalia
// const sortedBySalary = people.sort((a, b) => a.salary - b.salary);
// const elemWithAge27 = people.find(pers => pers.age === 27);
// const nameAndAge = people.map(({ name, age }) => ({ name, age }));
// const totalSalary = people.reduce((accumulator, pers) => accumulator + pers.salary, 0);
// const personLiveInMoskow = people.filter((pers) => pers.city === "Москва");
// const personLiveInNovosibirsk = people.filter(
//     (pers) => pers.city === "Новосибирск"
// );
// const twoCitie2 = personLiveInMoskow.concat(personLiveInNovosibirsk);
// const twoCitie3 = [...personLiveInMoskow, ...personLiveInNovosibirsk];