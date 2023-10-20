// https://learn.javascript.ru/onload-ondomcontentloaded
// https://developer.mozilla.org/ru/docs/Web/API/Document/DOMContentLoaded_event
const saveFormValue = () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const age = document.getElementById("age").value;

        const userObject = {
            name,
            lastName,
            age,
            isAdult: age >= 18 ? true : false
        };

        const stringifiedObject = JSON.stringify(userObject);
        localStorage.setItem("user", stringifiedObject);
        form.reset();
    })
}

document.addEventListener("DOMContentLoaded", saveFormValue)