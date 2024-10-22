window.onload = function() {
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn");
  
    if (modal && openModalBtn) {
      openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
  
     
      document.querySelector(".close-btn").addEventListener("click", () => {
        modal.style.display = "none";
      });
  

      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    } else {
      console.error("Modal or button not found");
    }
  };
  