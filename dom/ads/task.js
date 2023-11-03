let bannerName = Array.from(document.querySelectorAll(".rotator__case"));

let index = 0;  
let interval = setInterval(() => {
  let currentElem = bannerName[index++ % bannerName.length];
  bannerName.forEach((item) => {
    item.classList.remove("rotator__case_active");
  });
  currentElem.classList.add("rotator__case_active");
}, 1000);
