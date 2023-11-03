// const getMyPosition = () => {
//     navigator.geolocation.getCurrentPosition((positon) => {
//         const { latitude, longitude } = positon.coords
//         console.log('====================================');
//         console.log({ latitude, longitude });
//         console.log('====================================');
//     }, (error) => console.log(error));
// }

// getMyPosition()



// const promises = [
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/posts/2'),
//     fetch('https://jsonplaceholder.typicode.com/posts/3'),
// ]

// const getAllData = Promise.all(promises).then(response => {
//     const transformedData = response.map(eachResponse => eachResponse.json())
//     return transformedData
// })



// const promises2 = [
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/notexist'),
//     fetch('https://jsonplaceholder.typicode.com/posts/3'),
// ]

// const fetchData = async () => {
//     const data = [];

//     for (const promise of promises2) {
//         try {
//             const response = await promise
//             if(response.ok){
//                 const jsonData = await response.json()
//                 data.push(jsonData)
//             } else {
//                 data.push(null)
//             }
//         } catch (error) {
//             console.log('====================================');
//             console.log({error});
//             console.log('====================================');
//             data.push(null)
//         }
//     }

//     return data
// }


// const promises3 = [
//     fetch('https://jsonplaceholder.typicode.com/posts'),
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/notexist'),
// ]


// Promise.race(promises3).then((response=>{
//     if(response.ok){
//         return response.json()
//     } else {
//         throw new Error ("Request failed")
//     }
// })).then(data=>{
//     console.log({data});
// })


// 1. сделать функцию для простого запорса https://restcountries.com/v3.1/name/${динамичное название госудасртво} для получения информации о государстве
// 2. Создать функцию которая получает данные о госудасстве и их отрисовывает в html (флаг, название, валюта, население, столица)
// 3. Вызвать функция для получения государства (пункт 1) в обработчике события DOMContentLoaded


const body = document.body
const renderCurrentCountry = (countryInfo) => {
    const { flags: { png }, capital, currencies, population, name: { official } } = countryInfo
    console.log({ currencies });
    const countryCard = document.createElement("div")
    countryCard.classList.add("card")
    const currencyValue = Object.keys(currencies)[0]
    const html = `
        <img class="${official}-card" src="${png}" alt="${official}"/>
        <p>${official}</p>
        <p>population: ${population}</p>
        <p>capital: ${capital[0]}</p>
        <p>currencies: ${currencies[currencyValue].name}</p>
    `
    countryCard.insertAdjacentHTML("afterbegin", html)
    body.append(countryCard)
}


const getCountryInfo = async (countryName) => {
    const countryInfoArray = await fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(res => res.json())
    const [countryinfo] = countryInfoArray;
    renderCurrentCountry(countryinfo)
}

document.addEventListener("DOMContentLoaded", () => {
    getCountryInfo("ukraine")
})


// 1. После того как получили о конкретном государстве внизу сделать запросы для получения информации о соседних госудасрствах и их отаброзить
// https://restcountries.com/v3.1/alpha?codes={корткое название госудасртва}