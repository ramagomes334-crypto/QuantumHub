/* ==========================================
   QUANTUM HUB V2
   App Core
========================================== */

const App = {
  
  name: "Quantum Hub",
  
  version: "2.0.0",
  
  init() {
    
    console.log(`${this.name} v${this.version} Loaded`);
    
    this.setYear();
    
    this.checkConnection();
    
    this.bindButtons();
    
  },
  
  setYear() {
    
    const year = document.getElementById("year");
    
    if (year) {
      
      year.textContent = new Date().getFullYear();
      
    }
    
  },
  
  checkConnection() {
    
    window.addEventListener("online", () => {
      
      this.toast("Koneksi kembali online", "success");
      
    });
    
    window.addEventListener("offline", () => {
      
      this.toast("Koneksi terputus", "error");
      
    });
    
  },
  
  bindButtons() {
    
    document.querySelectorAll("[data-page]").forEach(btn => {
      
      btn.addEventListener("click", () => {
        
        location.href = btn.dataset.page;
        
      });
      
    });
    
  },
  
  toast(message, type = "success") {
    
    const old = document.querySelector(".toast");
    
    if (old) old.remove();
    
    const toast = document.createElement("div");
    
    toast.className = `toast ${type}`;
    
    toast.innerHTML = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add("show"), 100);
    
    setTimeout(() => {
      
      toast.classList.remove("show");
      
      setTimeout(() => toast.remove(), 300);
      
    }, 3000);
    
  }
  
};

document.addEventListener("DOMContentLoaded", () => {
  
  App.init();
  
});