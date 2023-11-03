window.addEventListener("scroll", () => {
    const disclosure = document.querySelectorAll(".reveal");
  
    disclosure.forEach((item) => {
      const { top, bottom } = item.getBoundingClientRect();
      if (top > 0 && bottom < window.innerHeight) {
        item.classList.add("reveal_active");
      } else {
        item.classList.remove("reveal_active");
      }
    });
  });
  