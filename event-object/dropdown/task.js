
function getMenu() {
  document
    .querySelector(".dropdown__list")
    .classList.toggle("dropdown__list_active");
}

const currentValue = document.querySelector(".dropdown__value");

currentValue.addEventListener("click", getMenu);

let codeList = document.querySelectorAll(".dropdown__item");
codeList.forEach((item, index) => {
  item.onclick = () => {
    getMenu();
    currentValue.textContent = codeList[index].textContent;
    return false;
  };
});
