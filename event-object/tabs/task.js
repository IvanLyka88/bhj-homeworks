let tabsBtn = Array.from(document.querySelectorAll(".tab"));
let changeContent = Array.from(document.querySelectorAll(".tab__content"));

tabsBtn.forEach((currentBtn, indexBtn) => {
  currentBtn.addEventListener("click", () => { 
    tabsBtn.forEach((clearTabs) => {
      clearTabs.classList.remove("tab_active");  
    });

    changeContent.forEach((content, indexContent) => {
     
      content.classList.remove("tab__content_active");  

      if (indexBtn === indexContent) {
        
        content.classList.add("tab__content_active");
      }
    });

    currentBtn.classList.add("tab_active");  
  });
});
