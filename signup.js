import { users } from './script.js';

    const sbtn = document.querySelector(".btn");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    const cpass = document.querySelector("#cpass");
    const fname = document.querySelector("#iname");
    sbtn.addEventListener('click',sign);

    function sign(fname,email,pass,cpass,users){
       if(!fname.value.trim() || !email.value.trim() || !pass.value.trim() || !cpass.value.trim()){
        alert("Enter all value");
        return;
       }
       if(pass.value !== cpass.value){
        alert("both password don't match");
        return;
       } 
       let newUserId = "o" + (Object.keys(users).length + 1); 
       users[newUserId] = {
       email: email.value,
       pass: pass.value
      };
      window.location.href = 'homepage.html';
      alert("hhhh");
    }
    