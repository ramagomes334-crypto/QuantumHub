/* ==========================================
   QUANTUM HUB V2
   Authentication System
========================================== */

const Auth = {

    user: null,

    init() {

        this.loadSession();

        this.checkPage();

    },

    logout() {

        localStorage.removeItem("token");
        localStorage.removeItem("qh_user");

        window.location.href = "login.html";

    },

    loadSession() {

        const data = localStorage.getItem("qh_user");

        if (data) {

            this.user = JSON.parse(data);

        }

    },

    isLogin() {

        return localStorage.getItem("token") !== null;

    },

    checkPage() {

        const page = location.pathname;

        if (
            page.includes("dashboard") ||
            page.includes("admin")
        ) {

            if (!this.isLogin()) {

                window.location.href = "login.html";

            }

        }

    },

    getUser() {

        return this.user;

    }

};

document.addEventListener(
    "DOMContentLoaded",
    () => {

        Auth.init();

    }
);