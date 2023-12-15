import React, { useState } from 'react';
import './App.css';


const ChildComponent = () => {
  console.log('Дочерний компонент отрисовался');
  return <div>
    Дочерний компонент
  </div>
}


class ChildComponent2 extends React.Component {
  render() {
    return <div>Классовый компонент</div>
  }
}

function App() {

  const [number, setNumber] = useState(0);
  // так писать не правильно
  // const increment = () => setNumber(number + 1);

  // поскольку изменения состояния ялвается асинхорнной работой у нас изменения состояния таким образом работает неправильно 
  // const increment = () => { 
  //   setNumber(number + 1); // 1
  //   setNumber(number + 1); // 2
  //   setNumber(number + 1); // 3
  //   setNumber(number + 1); // 4
  //  }


  const increment = () => {
    setNumber((state)=>{
      return state + 1
    });
  }

  return (
    <div className="App">
      {number}
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default App;
