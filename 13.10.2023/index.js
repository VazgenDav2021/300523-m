const openButton = document.querySelector(".open_modal");
const modal = document.querySelector(".modal");


openButton.addEventListener("click", () => {
    // метод toggle делает следуйщее: Если у элемента есть этот класс то его надо удалить,
    // если у элемента нет данного класса то его надо добавить
    modal.classList.toggle('show')

    // делается проверка для отаброжения текста внутри кнопки
    // 1:
    //  Если текст кнопки Open Modal то меняем его на Close Modal
    //  Если текст кнопку любой другой текст(Close Modal) то тогда меняем обратно на  Open Modal
    // if (openButton.textContent ==="Open Modal"){
    //     openButton.textContent = "Close Modal"
    // } else {
    //     openButton.textContent = "Open Modal"
    // }


    // 2 и 3 тоже самое просто разным способом написания
    // Есл у элемента modal есть класс show то текст кнопки прировнять
    // Если у элемента modal нет класса show то текст кнопки прировнать Open Modal

    // if (modal.classList.contains("show")) {
    //     openButton.textContent = "Close Modal"
    // } else {
    //     openButton.textContent = "Open Modal"
    // }

    modal.classList.contains("show") ? openButton.textContent = "Close Modal" : openButton.textContent = "Open Modal"
});

// Если модалка открыта то при нажатии на клавиш "escape" закрывать модальное окноэ
document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("show") && event.key === "Escape") {
        modal.classList.remove("show")
    }
});

const mode = document.querySelector(".mode")
mode.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    modal.classList.toggle("darkMode")


    if (modal.classList.contains("darkMode")){
        mode.textContent="Light Mode"
    } else {
        mode.textContent="Dark Mode"
    }
})