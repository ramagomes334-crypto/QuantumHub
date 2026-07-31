/* ==========================================
   QUANTUM HUB V2
   Admin Controller
========================================== */


const Admin = {
  
  
  init() {
    
    this.checkAdmin();
    
    this.loadUsers();
    
    this.loadActivity();
    
  },
  
  
  
  checkAdmin() {
    
    
    const user = Auth.getUser();
    
    
    if (!user) {
      
      return;
      
    }
    
    
    if (user.role !== "admin") {
      
      
      alert(
        "Akses hanya untuk Admin"
      );
      
      
      window.location.href =
        "dashboard.html";
      
      
    }
    
    
  },
  
  
  
  async loadUsers() {
    
    
    console.log(
      "Loading users..."
    );
    
    
    // Nanti diganti:
    
    // const result = await API.users();
    
    
    
    const users = [
      
      {
        username: "admin",
        role: "Admin",
        status: "Online"
      },
      
      {
        username: "user01",
        role: "User",
        status: "Offline"
      }
      
    ];
    
    
    
    console.log(
      users
    );
    
    
  },
  
  
  
  loadActivity() {
    
    
    const logs = [
      
      "Admin login",
      
      "Dashboard dibuka",
      
      "System berjalan"
      
    ];
    
    
    
    console.log(
      "Activity:",
      logs
    );
    
    
  }
  
  
  
};



document.addEventListener(
  "DOMContentLoaded",
  () => {
    
    
    Admin.init();
    
    
  }
);