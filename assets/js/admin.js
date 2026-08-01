/* ==========================================
   QUANTUM HUB V3
   Admin Users
========================================== */

const Admin = {

async init(){

    await this.loadUsers();

    this.events();

},


async loadUsers(){

    const tbody = document.getElementById("usersTable");

    if(!tbody) return;


    tbody.innerHTML =
    `
    <tr>
    <td colspan="5">
    Loading...
    </td>
    </tr>
    `;


    try{

        const result = await API.users();


        if(!result.success){

            tbody.innerHTML =
            `
            <tr>
            <td colspan="5">
            Gagal memuat data
            </td>
            </tr>
            `;

            return;

        }


        const users = result.data.users || result.data;


        tbody.innerHTML="";


        users.forEach((user,index)=>{


            tbody.innerHTML +=
            `
            <tr>

            <td>${index+1}</td>

            <td>${user.username}</td>

            <td>${user.role}</td>

            <td>
            <span class="badge badge-success">
            Aktif
            </span>
            </td>

            <td>

            <button 
            class="btn delete-user"
            data-id="${user.id}">
            
            Hapus

            </button>

            </td>

            </tr>
            `;


        });


    }catch(error){


        tbody.innerHTML =
        `
        <tr>
        <td colspan="5">
        Server Error
        </td>
        </tr>
        `;


    }


},



events(){


const addBtn =
document.getElementById("addUserBtn");


if(addBtn){


addBtn.onclick = ()=>{


const username =
prompt("Username baru:");



const password =
prompt("Password:");



if(!username || !password){

alert("Data belum lengkap");

return;

}



this.addUser(
username,
password
);



};


}



},



async addUser(username,password){


try{


const result =
await API.addUser({

username,
password,
role:"user"

});



if(result.success){


alert("User berhasil ditambahkan");


this.loadUsers();



}else{


alert("Gagal menambahkan user");


}



}catch{


alert("Error server");


}



}



};



document.addEventListener(

"DOMContentLoaded",

()=>{

Admin.init();

}

);