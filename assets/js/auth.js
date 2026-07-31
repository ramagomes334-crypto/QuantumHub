/* ==========================================
   QUANTUM HUB V2
   Authentication System
========================================== */

const Auth = {
  
  user: null,
  
  init() {
    
    this.loadSession();
    
    this.checkPage();
    
  },
  
  
  login(username, password) {
    
    // Sementara lokal
    // Nanti diganti API Cloudflare Worker
    
    if (
      username === "admin" &&
      password === "admin123"
    ) {
      
      const data = {
        
        username: "admin",
        
        role: "admin",
        
        loginAt: new Date().toISOString()
        
      };
      
      
      localStorage.setItem(
        "qh_user",
        JSON.stringify(data)
      );
      
      
      return {
        
        success: true,
        
        message: "Login berhasil"
        
      };
      
    }
    
    
    return {
      
      success: false,
      
      message: "Username atau password salah"
      
    };
    
  },
  
  
  logout() {
    
    localStorage.removeItem("qh_user");
    
    window.location.href = "login.html";
    
  },
  
  
  loadSession() {
    
    const data = localStorage.getItem("qh_user");
    
    
    if (data) {
      
      this.user = JSON.parse(data);
      
    }
    
  },
  
  
  isLogin() {
    
    return this.user !== null;
    
  },
  
  
  checkPage() {
    
    const page = location.pathname;
    
    
    if (
      page.includes("dashboard") ||
      page.includes("admin")
    ) {
      
      if (!this.isLogin()) {
        
        window.location.href = "login.html";
        
      }
      
    }
    
  },
  
  
  getUser() {
    
    return this.user;
    
  }
  
};


document.addEventListener(
  "DOMContentLoaded",
  () => {
    
    Auth.init();
    
  }
);