document.addEventListener("DOMContentLoaded", async () => {

    const target = document.getElementById("bottomNav");

    if (!target) return;

    const html = await fetch("../components/bottomnav.html");

    target.innerHTML = await html.text();

});