/* ==========================================
   QUANTUM HUB V3
   API Manager
========================================== */

const API = {


    // Cloudflare Worker URL

    baseURL: "https://quantumhub-api.kyrogarut.workers.dev",



    async request(endpoint, options = {}){


        try{


            const response = await fetch(

                this.baseURL + endpoint,

                {

                    method:
                    options.method || "GET",


                    headers:{

                        "Content-Type":
                        "application/json"

                    },


                    body:

                    options.body

                    ?

                    JSON.stringify(options.body)

                    :

                    null


                }

            );



            const data =
            await response.json();



            return {

                success:true,

                data:data

            };



        }catch(error){


            console.error(

                "API Error:",

                error

            );



            return {

                success:false,

                message:
                "Server tidak tersedia"

            };


        }


    },




    // =========================
    // AUTH
    // =========================


    async login(username,password){


        return this.request(

            "/login",

            {

                method:"POST",

                body:{

                    username,

                    password

                }

            }

        );


    },




    // =========================
    // PROFILE
    // =========================


    async profile(){


        return this.request(

            "/profile"

        );


    },




    // =========================
    // DASHBOARD
    // =========================


    async stats(){


        return this.request(

            "/stats"

        );


    },




    // =========================
    // ADMIN USERS
    // =========================


    async users(){


        return this.request(

            "/users"

        );


    },




    // Tambah User

    async addUser(user){


        return this.request(

            "/users",

            {

                method:"POST",

                body:user

            }

        );


    },




    // Hapus User

    async deleteUser(id){


        return this.request(

            "/users/" + id,

            {

                method:"DELETE"

            }

        );


    },




    // Update User

    async updateUser(id,user){


        return this.request(

            "/users/" + id,

            {

                method:"PUT",

                body:user

            }

        );


    },




    // =========================
    // TOOLS
    // =========================


    async tools(){


        return this.request(

            "/tools"

        );


    },




    async addTool(tool){


        return this.request(

            "/tools",

            {

                method:"POST",

                body:tool

            }

        );


    }




};




// Global

window.API = API;