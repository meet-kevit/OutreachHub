const url = `https://68779c3edba809d901f02af6.mockapi.io/login`;

    const sbtn = document.querySelector(".btn");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    const cpass = document.querySelector("#cpass");
    const fname = document.querySelector("#iname");
    sbtn.addEventListener('click',sign);
    
    function sign(e){
      
       e.preventDefault();
       if(!fname.value.trim() || !email.value.trim() || !pass.value.trim() || !cpass.value.trim()){
        alert("Enter all value");
        return;
       }
       if(pass.value !== cpass.value){
        alert("both password don't match");
        return;
       } 
       console.log(email.value);
       let newUserId = 5; 

       const obj = {
           email: email.value.trim(),
           name: fname.value.trim(),
           password: pass.value.trim(),
           contact: '9999999999999999999',
           id:'00'
      };

      fetch(`${url}`,{
        method:'POST',
        heeader: {'Content-Type' : 'application/json'},
        body: JSON.stringify(obj)
      })
      .then(response => {
        if(!response.ok){
          throw new Error('Sign up failed');
        }
        return response.json();
      })
      .then(data => {
        alert("Sign up sccesssful!");
        localStorage.setItem('user',JSON.stringify(obj));
         window.location.href = 'homepage.html';
         alert("hhhh");
      })
      .catch(err => {
        alert("Error sign up failed",err);
      })
     
    }
    