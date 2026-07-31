/* ==========================================
   QUANTUM HUB V2
   Settings Controller
========================================== */


const Settings = {


    init(){

        this.loadProfile();

        this.logout();

        this.theme();

    },


    loadProfile(){

        const user =
        Auth.getUser();


        const name =
        document.getElementById("profileName");


        if(user && name){

            name.textContent =
            user.username;

        }


    },


    logout(){

        const button =
        document.getElementById("logoutBtn");


        if(button){

            button.addEventListener(
                "click",
                ()=>{

                    Auth.logout();

                }
            );

        }


    },


    theme(){

        const button =
        document.getElementById("themeBtn");


        if(!button) return;


        button.addEventListener(
            "click",
            ()=>{


                document.body.classList.toggle(
                    "light-mode"
                );


                localStorage.setItem(

                    "qh_theme",

                    document.body.classList.contains(
                        "light-mode"
                    )
                    ?
                    "light"
                    :
                    "dark"

                );


            }
        );


    }


};



document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        Settings.init();

    }
);