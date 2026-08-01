/* ==========================================
   QUANTUM HUB V3
   Bottom Navigation
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".bottom-nav a");

    const page = location.pathname.split("/").pop();

    links.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === page) {

            link.classList.add("active");

        }

    });

});