import './App.css';

// 1 Ustate
// 1.1 Создать в компоненте App состояние type 
// 1.2 Добавить в компонент App 3 кнопки с 3 значениеми primary, error, info
// 1.3 Внизу кнопко создать див со стилями высота, ширина, border: 5px solid
// 1.4 При клике по кнопкам к диву должен подтягиватся определенный класс <div class="box primary|error|info">


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
