import './App.css';
import Janis from './components/Yanis/Yanis';
import Ulyana from './components/Ulyana/Ulyana';

// 1 Создать состояние "ползователи"
// 2 Сделать запрос на https://jsonplaceholder.typicode.com/users
// 3 Обнавить состоянеи "ползователи" ответом который предет из сервера
// 4 Отрисовать всех ползьвоателей которых получили
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",

// Создаете новый проейт
// Длеате запрос в компоненте App
// с помощю map итеративно показываете компонент EachUser который должны создать

function App() {

  return (
    <div className="App">
      {/* <Janis /> */}
      <Ulyana />
    </div>
  );
}

export default App;
