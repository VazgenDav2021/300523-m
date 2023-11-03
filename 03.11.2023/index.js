// const getMyPosition = () => {
//     navigator.geolocation.getCurrentPosition((positon) => {
//         const { latitude, longitude } = positon.coords
//         console.log('====================================');
//         console.log({ latitude, longitude });
//         console.log('====================================');
//     }, (error) => console.log(error));
// }

// getMyPosition()



// Promise.all
// const promises = [
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/posts/2'),
//     fetch('https://jsonplaceholder.typicode.com/posts/3'),
// ]


// Promise.all(promises).then(async res => {
//     console.log("All rpmoises resolved:", res);
//     return res.map(async eachPromise => await eachPromise.json())
// }).then(allTransformedData => {
//     console.log(allTransformedData);
// }).catch(error => {
//     console.log("Error", error);
// })

// const promises2 = [
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/notexist'),
//     fetch('https://jsonplaceholder.typicode.com/posts/3'),
// ]

// Promise.allSettled(promises2).then(result=>{
//     console.log("All promises settled", result);
// })



const promises3 = [
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/notexist'),
]


Promise.race(promises3).then(result=>{
    console.log("First resovled promise", result);
})
