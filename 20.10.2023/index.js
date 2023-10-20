// // const name = prompt("What is your name ?")

// // if (name){
// //     // setItem сохраняет значение в localeStorage, первым параметром идет ключ а втормы параметром  идет само значение которое должно сохранится
// //     localStorage.setItem("user-name", name)
// // }

// function getName(){
//     // getItem достает значение и localeStorage. Как параметр принимает название ключа по которому будет искать значение
//     const userName = localStorage.getItem("user-name");

//     // Если в localStorage нет ключа user-name то
//     if(!userName){
//         // открой модальное окно и получи значение имени
//         const name = prompt("What is your name ?")
//         //после этого положи имя в  localStorage
//         localStorage.setItem('user-name', name)
//     } else{
//         // если localStorage est- имя то просото покажи модальное окно с этим именем
//         console.log({ userName });
//         alert(`YOUR NAME IS:${userName}`)
//     }
// }
// getName();


// // содать маленькую форму с полями имени, фамилии и возраста
// // после сабмита формы сохранять данные о пользователи в localeStorage, кроме значение имени фамилии и возраста сохранять значение isAdult(true/false  исохдя из возраста пользователья)