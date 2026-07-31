/* ==========================================
   QUANTUM HUB V2
   Admin Users Controller
========================================== */


const Admin = {


    async init(){


        await this.loadUsers();


    },


    async loadUsers(){


        const list =
            document.getElementById(
                "userList"
            );


        if(!list) return;



        try{


            const result =
                await API.users();



            if(
                result.success &&
                result.data.success
            ){


                list.innerHTML = "";



                result.data.users.forEach(
                    user => {


                    list.innerHTML += `

                    <tr>

                    <td>
                    ${user.id}
                    </td>


                    <td>
                    ${user.username}
                    </td>


                    <td>
                    ${user.role}
                    </td>


                    </tr>

                    `;


                });


            } else {


                list.innerHTML =
                `
                <tr>
                <td colspan="3">
                Gagal mengambil data
                </td>
                </tr>
                `;


            }



        }catch(error){


            console.error(
                "Admin Error:",
                error
            );


        }


    }


};



document.addEventListener(
"DOMContentLoaded",
()=>{

    Admin.init();

});