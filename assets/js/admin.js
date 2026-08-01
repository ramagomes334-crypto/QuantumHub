/* ==========================================
   QUANTUM HUB V3
   Admin Users
========================================== */

const Admin={

async init(){

await this.loadUsers();

},

async loadUsers(){

const tbody=document.getElementById("usersTable");

if(!tbody)return;

tbody.innerHTML="<tr><td colspan='4'>Loading...</td></tr>";

try{

const result=await API.users();

if(!result.success){

tbody.innerHTML="<tr><td colspan='4'>Gagal memuat data</td></tr>";

return;

}

const users=result.data.users||result.data;

tbody.innerHTML="";

users.forEach((user,index)=>{

tbody.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${user.username}</td>

<td>${user.role}</td>

<td>

<span class="badge badge-success">

Aktif

</span>

</td>

</tr>

`;

});

}catch{

tbody.innerHTML="<tr><td colspan='4'>Server Error</td></tr>";

}

}

};

document.addEventListener(

"DOMContentLoaded",

()=>{

Admin.init();

}

);