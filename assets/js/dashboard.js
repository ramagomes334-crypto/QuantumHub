/* ==========================================
   QUANTUM HUB V2
   Dashboard Controller
========================================== */


const Dashboard = {


    init() {

        this.loadUser();

        this.loadStats();

    },


    loadUser() {


        const user =
            Auth.getUser();


        if (!user) return;



        const avatar =
            document.querySelector(".avatar");



        if (avatar) {

            avatar.textContent =
                user.username
                    .charAt(0)
                    .toUpperCase();

        }


    },


    async loadStats() {


        const totalUsers =
            document.getElementById(
                "totalUsers"
            );


        if (!totalUsers) return;



        try {


            const result =
                await API.stats();



            if (
                result.success &&
                result.data.success
            ) {


                totalUsers.textContent =
                    result.data.users;


            } else {


                totalUsers.textContent =
                    "0";


            }



        } catch (error) {


            console.error(
                "Stats Error:",
                error
            );


            totalUsers.textContent =
                "0";


        }


    }


};



document.addEventListener(
    "DOMContentLoaded",
    () => {

        Dashboard.init();

    }
);