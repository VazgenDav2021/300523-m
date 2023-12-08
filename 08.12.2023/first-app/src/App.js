import React from 'react';
import './App.css';
import vazgenSnaerks from './assets/sneakers.jpeg'


// function App является компонентом который возращает JSX(HTML)
// function App() {
//   // внутри компонента, до ключевого слово "return" мы можем использовать полнацненый JS, создавать функции, переменные, длеать условные вычисления и тд
//   const name = "Vazgen"
//   return (
//     <div className="App">
//       Hello World, {name}
//     </div>
//   );
// }

function App() {
  return (
    <>
      <img src={vazgenSnaerks} />
      <img src="/sneakers.jpeg" />
    </>
  );
}


// 1. Создать нормальный со стилями импортировать в компонент App
// 2. Создать компонент Images и в него добавить 4 фотографии которые должны быть одинаковы по размеры
// 3. Импортовать компонент Images
// return (
// <Navbar/>
// <Images/>
// )

export default App;
