/* ==========================================
   QUANTUM HUB V2
   Dashboard Controller
========================================== */

const Dashboard = {
  
  
  init() {
    
    this.loadUser();
    
    this.loadStats();
    
  },
  
  
  loadUser() {
    
    const user =
      Auth.getUser();
    
    
    if (!user) return;
    
    
    const avatar =
      document.querySelector(".avatar");
    
    
    if (avatar) {
      
      avatar.textContent =
        user.username
        .charAt(0)
        .toUpperCase();
      
    }
    
    
  },
  
  
  async loadStats() {
    
    
    const totalUsers =
      document.getElementById("totalUsers");
    
    
    if (!totalUsers) return;
    
    
    // Data sementara
    
    let stats = {
      
      users: 125,
      
      tools: 3,
      
      status: "Online"
      
    };
    
    
    totalUsers.textContent =
      stats.users;
    
    
    
    console.log(
      "Dashboard Stats:",
      stats
    );
    
    
    // Nanti ganti:
    
    // const result = await API.stats();
    
  }
  
  
};



document.addEventListener(
  "DOMContentLoaded",
  () => {
    
    Dashboard.init();
    
  }
);