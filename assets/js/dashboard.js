/* ==========================================
   QUANTUM HUB V3
   Dashboard Controller
========================================== */

const Dashboard = {

    async init(){

        await this.loadUser();

        await this.loadStats();

        this.loadTime();

        this.loadStatus();

    },

    /* ===========================
       User
    =========================== */

    async loadUser(){

        const user = Auth.getUser();

        if(!user) return;

        const avatar =
            document.querySelector(".avatar");

        if(avatar){

            avatar.textContent =
                user.username
                .charAt(0)
                .toUpperCase();

        }

        const welcome =
            document.getElementById("welcomeUser");

        if(welcome){

            welcome.innerHTML =
                `Halo, ${user.username} 👋`;

        }

        const role =
            document.getElementById("userRole");

        if(role){

            role.textContent =
                user.role || "Administrator";

        }

    },

    /* ===========================
       Stats
    =========================== */

    async loadStats(){

        try{

            const result =
                await API.stats();

            if(result.success){

                const data = result.data;

                document.getElementById("totalUsers").textContent =
                    data.users;

                const tools =
                    document.getElementById("totalTools");

                if(tools){

                    tools.textContent =
                        data.tools;

                }

                const status =
                    document.getElementById("apiStatus");

                if(status){

                    status.innerHTML =
                    `<span class="badge badge-success">
                        ${data.status}
                    </span>`;

                }

            }

        }catch(err){

            console.error(err);

        }

    },

    /* ===========================
       Login Time
    =========================== */

    loadTime(){

        const login =
            document.getElementById("lastLogin");

        if(login){

            login.textContent =
                new Date().toLocaleString("id-ID");

        }

    },

    /* ===========================
       Online Status
    =========================== */

    loadStatus(){

        console.log("Quantum Hub Online");

    }

};

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        Dashboard.init();

    }

);