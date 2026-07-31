/* ==========================================
   QUANTUM HUB V2
   Fake Chat Controller
========================================== */


const FakeChat = {
  
  
  init() {
    
    const button =
      document.getElementById("createChat");
    
    
    if (button) {
      
      button.addEventListener(
        "click",
        () => this.create()
      );
      
    }
    
    
  },
  
  
  create() {
    
    
    const name =
      document.getElementById("contactName")
      .value
      .trim();
    
    
    const message =
      document.getElementById("messageText")
      .value
      .trim();
    
    
    const preview =
      document.getElementById("chatPreview");
    
    
    
    if (!name || !message) {
      
      
      App.toast(
        "Isi nama dan pesan terlebih dahulu",
        "error"
      );
      
      
      return;
      
    }
    
    
    
    preview.innerHTML = `

        <div style="
        background:#075e54;
        padding:15px;
        border-radius:12px 12px 0 0;
        ">

        <h3>${name}</h3>

        </div>


        <div style="
        margin-top:20px;
        display:flex;
        justify-content:flex-end;
        ">


        <div style="
        background:#2563eb;
        color:white;
        padding:12px;
        border-radius:12px;
        max-width:80%;
        ">

        ${message}


        <div style="
        font-size:12px;
        opacity:.7;
        margin-top:5px;
        text-align:right;
        ">

        12:00 ✓✓

        </div>


        </div>


        </div>

        `;
    
    
    
  }
  
  
};



document.addEventListener(
  "DOMContentLoaded",
  () => {
    
    FakeChat.init();
    
  }
);