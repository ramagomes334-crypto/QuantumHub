/* ==========================================
   QUANTUM HUB V2
   TikTok Downloader Controller
========================================== */


const TikTok = {
  
  
  init() {
    
    const button =
      document.getElementById("downloadBtn");
    
    
    if (button) {
      
      button.addEventListener(
        "click",
        () => this.download()
      );
      
    }
    
    
  },
  
  
  async download() {
    
    
    const input =
      document.getElementById("tiktokUrl");
    
    
    const result =
      document.getElementById("result");
    
    
    const url =
      input.value.trim();
    
    
    
    if (!url) {
      
      
      App.toast(
        "Masukkan link TikTok terlebih dahulu",
        "error"
      );
      
      
      return;
      
    }
    
    
    
    result.innerHTML = `

        <div class="card">

            <div class="loading"></div>

            <p>
            Memproses link...
            </p>

        </div>

        `;
    
    
    
    await Utils.wait(1500);
    
    
    
    // Sementara demo
    // Nanti diganti API Worker
    
    
    result.innerHTML = `

        <div class="card">

            <h3>
            Video ditemukan
            </h3>


            <p>
            Link siap diproses.
            </p>


            <button class="btn">

            Download Video

            </button>


        </div>

        `;
    
    
    
  }
  
  
};



document.addEventListener(
  "DOMContentLoaded",
  () => {
    
    
    TikTok.init();
    
    
  }
);