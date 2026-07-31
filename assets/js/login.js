/* ==========================================
   QUANTUM HUB V2
   Login Controller
========================================== */

const Login = {

    init() {

        const button = document.getElementById("loginBtn");

        if (button) {

            button.addEventListener(
                "click",
                async () => await this.submit()
            );

        }

    },


    async submit() {

        const username = document
            .getElementById("username")
            .value
            .trim();

        const password = document
            .getElementById("password")
            .value
            .trim();

        const status = document
            .getElementById("status");


        if (!username || !password) {

            status.textContent =
                "Username dan password wajib diisi";

            return;

        }

        status.textContent = "Sedang login...";

        const result =
            await API.login(
                username,
                password
            );

        if (
            result.success &&
            result.data.success
        ) {

            localStorage.setItem(
                "token",
                result.data.token
            );

            status.textContent =
                "Login berhasil";

            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 800);

        } else {

            status.textContent =
                result.data?.message ||
                result.message ||
                "Login gagal";

        }

    }

};

document.addEventListener(
    "DOMContentLoaded",
    () => {

        Login.init();

    }
);