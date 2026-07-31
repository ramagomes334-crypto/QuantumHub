/* ==========================================
   QUANTUM HUB V2
   QR Generator Controller
========================================== */


const QRGenerator = {
  
  
  init() {
    
    const button =
      document.getElementById("generateQR");
    
    
    if (button) {
      
      button.addEventListener(
        "click",
        () => this.generate()
      );
      
    }
    
    
  },
  
  
  generate() {
    
    
    const text =
      document.getElementById("qrText").value.trim();
    
    
    const preview =
      document.getElementById("qrPreview");
    
    
    
    if (!text) {
      
      
      App.toast(
        "Masukkan teks atau link terlebih dahulu",
        "error"
      );
      
      
      return;
      
    }
    
    
    
    preview.innerHTML = `

        <div class="card">

            <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}"
            alt="QR Code"
            style="
            margin:auto;
            border-radius:15px;
            ">

            <br>

            <a 
            class="btn"
            href="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(text)}"
            download="quantum-qr.png">

            Download QR

            </a>

        </div>

        `;
    
    
  }
  
  
};



document.addEventListener(
  "DOMContentLoaded",
  () => {
    
    QRGenerator.init();
    
  }
);