let buttonSize = Array.from(document.querySelectorAll(".font-size"));
let sizeContent = document.querySelector(".book");

const clearActiveClass = (element, className = "font-size_active") => {
  element.find((item) => item.classList.remove(`${className}`));
}; // функция удаляет активный класс

const setActiveClass = (element, index, className = "font-size_active") => {
  element[index].classList.add(`${className}`);
}; // функция добавляет активный класс

const checkClassButton = (itemClassButton, indexClassbutton) => {
  itemClassButton.addEventListener("click", (event) => {
    if (itemClassButton.dataset.size == "small") {
      sizeContent.classList.add("font-size_small");
      sizeContent.classList.remove("font-size_big");
    } else if (itemClassButton.dataset.size == "big") {
      sizeContent.classList.add("font-size_big");
      sizeContent.classList.remove("font-size_small");
    } else if (!itemClassButton.dataset.size) {
      sizeContent.classList.remove("font-size_small");
      sizeContent.classList.remove("font-size_big");
    }
    clearActiveClass(buttonSize);
    setActiveClass(buttonSize, indexClassbutton);
    event.preventDefault();
  });
}; // функция проверяет активный класс

buttonSize.forEach(checkClassButton);
