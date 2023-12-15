import React, { useState } from 'react';
import './App.css';


const ChildComponent = ({counter, isAdmin, ...rest}) => {
  return <div>
    Дочерний компонент {counter} {`${isAdmin}`}
  </div>
}

const ChildComponent3 = ({ counter }) => {
  return <div>
    Дочерний компонент {counter}
  </div>
}

class ChildComponent2 extends React.Component {
  render() {
    return <div>Классовый компонент</div>
  }
}

const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    // Неправильно
    // setValue(e.target.value)
    setValue(() => (e.target.value))
  }

  return <>
    <input value={value} onChange={handleChange} />
    <p>{value}</p>
  </>
}

const Form = () => {

  const [user, setUser] = useState({})
  const handleChange = (e) => {
    //e.target - указывает на сам input
    // e.target.value - значение input
    // e.target.name - название input 
    setUser((state) => {
      return {
        // берем теукщее состояние и копируем в нововозращаемый объект
        ...state,
        // добавь в объект user клоч по название input и значение из input-а
        [e.target.name]: e.target.value
      }
    })
  }

  // для того чтобы динамично поменять состояния объека даем "имена" инпутам
  return <form>
    <label> Name:
      <input name='name' value={user.name} onChange={handleChange} />
    </label>
    <label> Sname:
      <input name='surname' value={user.surname} onChange={handleChange} />
    </label>
    <label> Email:
      <input name='email' value={user.email} onChange={handleChange} />
    </label>
    <label> City:
      <input name='city' value={user.email} onChange={handleChange} />
    </label>
  </form>
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
    setNumber((state) => {
      return state + 1
    });
  }

  const decremnet = () => {
    setNumber((state) => {
      return state != 0 ? state - 1 : state
    })
  }

  const currency ={
    name:"USD",
    amount:5000,
    country:"USA"
  }

  // есть 3 оснавных спсособа передачи пропов
  // 1ый способ пишен название пропа и пишем его значение counter={number} num2={2} city={undefined}
  // 2ой спсособ если передаем булево значение и оно true то можно просто написать название пропа, true писать не объязательно isAdmin
  // 3ий способ {...currency} то есть в коомпонент ChildComponent передаются также пропы  name="USD", amount={5000} тд
  return (
    <div className="App">
      <ChildComponent counter={number} isAdmin num1={1} num2={2} name="Vazgen" city={undefined} users={["Anna", "Hanna", "Janna"]} {...currency}/>
      <button onClick={decremnet}>-</button>
      {number}
      <button onClick={increment}>+</button>
      {/* <Input /> */}
      {/* <Form /> */}
    </div>
  );
}

// Доваить новую кнопку для уменьшения значения на 1
// Навесить на кнопки  функцию для уменьшения числа


// создали новый компонент
// в нем создать состояние пустой строки 
// добавить в него input 
// навесить на input функцию для изменения состояние (что вводим в input то и хранить в состоянии)
// при вызове функции для изменения состояния сделать консоль лог состояния
export default App;
