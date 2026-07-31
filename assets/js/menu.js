/* ==========================================
   QUANTUM HUB V2
   Mobile Menu
========================================== */


document.addEventListener(
    "DOMContentLoaded",
    function(){

        const menuBtn =
            document.getElementById("menuBtn");


        const sidebar =
            document.querySelector(".sidebar");


        if(!menuBtn || !sidebar){

            console.log(
                "Menu element tidak ditemukan"
            );

            return;

        }


        menuBtn.onclick = function(){

            sidebar.classList.toggle(
                "active"
            );

        };


    }
);