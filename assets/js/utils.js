/* ==========================================
   QUANTUM HUB V2
   Utilities
========================================== */

const Utils = {


    // Cek element

    exists(selector){

        return document.querySelector(selector) !== null;

    },


    // Ambil element

    get(selector){

        return document.querySelector(selector);

    },


    // Ambil banyak element

    getAll(selector){

        return document.querySelectorAll(selector);

    },


    // Simpan data

    save(key,value){

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    },


    // Ambil data

    getData(key){

        const data = localStorage.getItem(key);

        if(!data) return null;


        try{

            return JSON.parse(data);

        }catch{

            return data;

        }

    },


    // Hapus data

    remove(key){

        localStorage.removeItem(key);

    },


    // Delay

    wait(ms){

        return new Promise(resolve=>{

            setTimeout(resolve,ms);

        });

    },


    // Generate ID

    id(){

        return Date.now().toString(36)
        +
        Math.random()
        .toString(36)
        .substring(2);

    },


    // Format tanggal

    date(value){

        return new Date(value)
        .toLocaleString("id-ID");

    },


    // Copy text

    async copy(text){

        await navigator.clipboard.writeText(text);

        if(window.App){

            App.toast(
                "Berhasil disalin",
                "success"
            );

        }

    },


    // Loading button

    loading(button,state=true){

        if(!button) return;


        if(state){

            button.disabled=true;

            button.dataset.text=
            button.innerHTML;

            button.innerHTML=
            `
            <span class="loading"></span>
            Loading...
            `;

        }else{

            button.disabled=false;

            button.innerHTML=
            button.dataset.text;

        }

    }


};


window.Utils = Utils;