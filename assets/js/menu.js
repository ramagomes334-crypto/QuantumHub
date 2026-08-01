/* ==========================================
   QUANTUM HUB V3
   Mobile Menu
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const btn=document.getElementById("menuBtn");

const sidebar=document.querySelector(".sidebar");

if(!btn||!sidebar)return;

btn.onclick=()=>{

sidebar.classList.toggle("show");

};

document.addEventListener("click",(e)=>{

if(window.innerWidth>768)return;

if(!sidebar.contains(e.target)&&!btn.contains(e.target)){

sidebar.classList.remove("show");

}

});

});