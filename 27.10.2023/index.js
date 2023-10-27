// const fetchData = () => {
//     // при вызвое fetchData возращааем промис который делает запрос на https://jsonplaceholder.typicode.com/users
//     return new Promise((reslove, reject) => {
//         // .then => после запроса мы получаем данные из сервера которые будут в response
//         // async потаму что фомратирование асинхронная операция и может занять некоторе время
//         // поэтому пишем async для того чтобы наша программа понимала что в данной функции будет асинхронная операция
//         fetch('https://jsonplaceholder.typicode.com/users').then(async response => {
//             // поскольку мне сервер возращает JSON мне надо его отрформатировать в объект
//             // для этого используем response.json()
//             // await пишем для того чтоб наша программа понимал что она должна подаждать то того ка response у нас трансформиеутся в тот тип данных который нам нужен
//             const data = await response.json();
//             // если раскоментировать код на сторк 13 то мы справоцируем ошибку и у нас вернется не resolve а  reject
//             // data = 2;
//             reslove(data);
//         }).catch(error => {
//             // reject нам возращает строку "Vazgens code is wrong"
//             reject("Vazgens code is wrong");
//             // reject(error)
//         })
//     })
// }
// // Promise {<pending>} поскольку fetchData нам возращает промис который надо отработать с помщю методов then, catch, finally
// // console.log(fetchData());


// // then срабатывает во время усшпеного вызова
// // catch срабатывает во время ошибки
// // finally срабатывает в двух вариантах
// fetchData().then(users => {
//     console.log({ users });
// }).catch(e => {
//     // если catch сработает(сработает тогда когда fetchData будет ошибка ) то она нам вернет то что отдает reject в данном случает текст Vazgens code is wrong
//     // Для того чтобы отаброзить нашу ошибку используем throw new Error(e) который в консоли покажет реальную ошибку
//     throw new Error(e)
// }).finally(()=>{
//     console.log("я сработаю и во время успешного вызвоа и во время ошики");
// })

// Задание

const getCurrentPost = async(id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(async res => await res.json()).then(data => {
       const p = document.createElement('p')
        p.textContent = data.id
        document.body.append(p)
    })
}

const rednerPosts = (posts) => {
    const container = document.querySelector(".container")
    posts.forEach(eachpost => {
        const li = document.createElement('li')
        li.textContent = eachpost.title
        li.addEventListener("click", () => {
            getCurrentPost(eachpost.id)
        })
        container.append(li)
    })
}

const renderElement = () => {
    const div = document.createElement("div");
    div.classList.add("container");
    document.body.append(div);
}
const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts").then(async res => await res.json()).then(data => {
        rednerPosts(data)
    })
}
// функция для вызвоа 2х функции
const init = () => {
    renderElement()
    getData()
}
// функция init вызвится тогда когда весь html прогрузится
document.addEventListener("DOMContentLoaded", init)

// 2* При килкие на конкретный пост сделать запрос на сервер https://jsonplaceholder.typicode.com/posts/{id того поста на который кликнули} и получить детальную инфромацию о посте