const Menu = {

init(){

const btn =
document.getElementById("menuBtn");


const sidebar =
document.querySelector(".sidebar");


if(btn){

btn.onclick = ()=>{

sidebar.classList.toggle("active");

};

}

}

};


document.addEventListener(
"DOMContentLoaded",
()=>{

Menu.init();

});