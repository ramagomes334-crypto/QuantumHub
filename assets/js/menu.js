/* ==========================================
   QUANTUM HUB V2
   Mobile Menu Controller
========================================== */


const Menu = {


    init(){

        const button =
            document.getElementById(
                "menuBtn"
            );


        const sidebar =
            document.querySelector(
                ".sidebar"
            );


        if(button && sidebar){


            button.addEventListener(
                "click",
                ()=>{

                    sidebar.classList.toggle(
                        "active"
                    );

                }
            );


        }


    }


};


document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        Menu.init();

    }
);