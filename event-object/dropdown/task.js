function getMenu() {
  document
    .querySelector(".dropdown__list")
    .classList.toggle("dropdown__list_active");
}

const currentValue = document.querySelector(".dropdown__value");

currentValue.addEventListener("click", getMenu);

let codeList = document.querySelectorAll(".dropdown__item");
codeList.forEach((item) => {
  item.addEventListener("click", (event) => {
    getMenu();
    currentValue.textContent = item.textContent;
    event.preventDefault();
  });
});

// codeList.forEach((item) => {
//   item.onclick = () => {
//     getMenu();
//     currentValue.textContent = item.textContent;
//     return false;
//   };
// });
