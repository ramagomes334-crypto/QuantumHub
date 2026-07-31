/* ==========================================
   QUANTUM HUB V2
   Login Controller
========================================== */


const Login = {
  
  
  init() {
    
    const button =
      document.getElementById("loginBtn");
    
    
    if (button) {
      
      button.addEventListener(
        "click",
        () => this.submit()
      );
      
    }
    
    
  },
  
  
  submit() {
    
    
    const username =
      document.getElementById("username")
      .value
      .trim();
    
    
    const password =
      document.getElementById("password")
      .value
      .trim();
    
    
    const status =
      document.getElementById("status");
    
    
    
    if (!username || !password) {
      
      
      status.textContent =
        "Username dan password wajib diisi";
      
      
      return;
      
    }
    
    
    
    const result =
      Auth.login(
        username,
        password
      );
    
    
    
    if (result.success) {
      
      
      status.textContent =
        result.message;
      
      
      setTimeout(() => {
        
        window.location.href =
          "dashboard.html";
        
      }, 800);
      
      
      
    } else {
      
      
      status.textContent =
        result.message;
      
      
    }
    
    
  }
  
  
};



document.addEventListener(
  "DOMContentLoaded",
  () => {
    
    Login.init();
    
  }
);