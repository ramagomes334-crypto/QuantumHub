/* ==========================================
   QUANTUM HUB V2
   API Manager
========================================== */

const API = {

    // Nanti ganti dengan URL Cloudflare Worker

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


    // Login

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


    // User profile

    async profile(){


        return this.request(

            "/profile"

        );


    },


    // Statistik dashboard

    async stats(){


        return this.request(

            "/stats"

        );


    },


    // Admin user list

    async users(){


        return this.request(

            "/users"

        );


    }


};


window.API = API;