import './App.css';
import Navbar from './components/Navbar/Navbar';


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
    <div className="App">
      <Navbar />
      <div className='container'></div>
    </div>
  );
}



export default App;
