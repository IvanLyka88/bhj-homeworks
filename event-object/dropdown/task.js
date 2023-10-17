let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");

dropdownValue.addEventListener("click", () => {
  dropdownList.classList.add("dropdown__list_active");
  let robotCode = document.querySelectorAll(".dropdown__item");
  
  robotCode.forEach((itemCode,index) => {
    itemCode.addEventListener("click", ()=> {
      dropdownValue.textContent = itemCode[index].textContent
    })
  })
  
});
