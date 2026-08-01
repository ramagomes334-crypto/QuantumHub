/* ==========================================
   Quantum Hub V3
   Menu
========================================== */

const Menu = {

    init(){

        const current =
            location.pathname
            .split("/")
            .pop();

        document
        .querySelectorAll(".bottom-nav a")
        .forEach(item=>{

            item.classList.remove("active");

            if(
                item.getAttribute("href")
                === current
            ){

                item.classList.add("active");

            }

        });

    }

};

document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        Menu.init();

    }
);