const form = document.getElementById("form");

// 1-3
// // Во время каждого сабмита вызвыаю функцию render
// // В него помещяю 3 значения
// function render({ firstName, lastname, age }) {
//   // Создаю "div" и его помщю в элемент "body"
//   const container = document.createElement("div");
//   container.className = "container";
//   document.body.append(container);
//   // Создаю параграф для хнрения информаци
//   const info = document.createElement("p");
//   info.setAttribute("data-id", firstName);

//   info.className = "eachUser";
//   info.textContent = `${firstName}, ${lastname}, ${age}`;
//   //   в "container" добвляю параграф
//   container.append(info);
// }

// const removeAllUsers = () => {
//   const container = document.querySelector(".container");
//   container.remove();
// };

// const users = [];
// let allUsers;
// form.addEventListener("submit", function (event) {
//   // Для того чтобы не произошла переезгрузка
//   event.preventDefault();

//   //   с 8-10 строки берем значения из формы
//   const firstName = document.getElementById("firstname").value;
//   const lastname = document.getElementById("lastname").value;
//   const age = document.getElementById("age").value;

//   //    Во время каждого сабмита вызываю эту функцию и передаю в нее значения из формы
//   render({ firstName, lastname, age });

//   //   Кажды раз во врмея отправки формы мы в массив добаляем пользователя
//   users.push({ firstName, lastname, age });

//   //    КОгда мы засабмители форму то очищаем поля
//   document.getElementById("firstname").value = "";
//   document.getElementById("lastname").value = "";
//   document.getElementById("age").value = "";

//   const allUsers = document.querySelectorAll(".eachUser");
//   allUsers.forEach((eachElement) => {
//     eachElement.addEventListener("click", (event) => {
//       const id = event.target.attributes[0].value;
//       const filteredUsers = users.filter(
//         (_, eachELementId) => eachELementId !== Number(id)
//       );
//       removeAllUsers();

//       filteredUsers.forEach((eachUser) => {
//         console.log({ eachUser });
//         const { firstName, lastname, age } = eachUser;
//         render({ firstName, lastname, age });
//       });
//     });
//   });
// });

// 4

const users = [];
const forms = document.getElementById("form");

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  //   получаем поля
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const age = document.getElementById("age");

  // создаем нобый обьект пользователя
  const newUser = {
    firstname,
    lastname,
    age,
  };

  // нобый объект передаем в массив пользователей
  users.push(newUser);

  // для перерисовки пользоватлей
  render();

  form.reset();
});

// контейнер где будем хранить наших пользвоатлеей
const container = document.createElement("div");
document.body.append(container);

const render = () => {
  container.innerHTML = "";

  if (users.length === 0) {
    console.log("Нет польозватлей");
  } else {
    // итеруемся по каждой стоке
    users.forEach((eachUser, index) => {
      const { firstname, lastname, age } = eachUser;
      const eachPersonElement = document.createElement("div");
      const infoPargraph = document.createElement("p");
      // и в каждую строку добалем текст
      infoPargraph.textContent = `${firstname.value}, ${lastname.value}, ${age.value}`;
      eachPersonElement.append(infoPargraph);
      // на новаобразованны текст добавляем слшатель события и если кликним п нему...
      infoPargraph.addEventListener("click", () => {
        // то пусть этот элемент удалится
        infoPargraph.remove();
      });
      container.append(eachPersonElement);
    });
  }
};
