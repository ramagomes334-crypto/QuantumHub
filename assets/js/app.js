/* ==========================================
   QUANTUM HUB V3
   App Controller
========================================== */

const App = {

    init(){

        this.updateGreeting();

        this.updateYear();

        this.initMenu();

        console.log("Quantum Hub V3 Loaded");

    },

    updateGreeting(){

        const welcome =
            document.getElementById("welcomeUser");

        if(!welcome) return;

        const user =
            Auth.getUser();

        if(user){

            welcome.innerHTML =
            `Halo, ${user.username} 👋`;

        }

    },

    updateYear(){

        const footer =
            document.querySelector(".footer p");

        if(!footer) return;

        footer.innerHTML =
        `© ${new Date().getFullYear()} Quantum Hub V3 • Powered by Cloudflare Workers & D1`;

    },

    initMenu(){

        const btn =
            document.getElementById("menuBtn");

        if(!btn) return;

        btn.addEventListener("click",()=>{

            Toast.show(
                "Menu Mobile Segera Hadir 🚀",
                "success"
            );

        });

    }

};

document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        App.init();

    }
);