let username = document.getElementById("uname").value.trim();
let password = document.querySelector("#pass").value.trim();
const homenav = document.querySelector(".btn");
homenav.addEventListener('click',call);


// async function call(e){
//     e.preventDefault();
//     await fetch("http://localhost:3000/auth/login",
//     {
//         method: "POST",
//         body: JSON.stringify({ us, p} ),
//         headers: {
//             "Content-Type": "application/json" }
//     }).then(res=> res.json()).then(res => {
//         console.log(res);
//         alert(res)
//         console.log(res.ok);
//         if(res.ok){
//            localStorage.setItem("token", res.access_token);
//            localStorage.setItem("user", res.username);
//            window.location.href = "homepage.html";
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         alert("Invalid username or password");
//     });
// }

async function call(e){
    e.preventDefault();
    try{
        const url = 'http://localhost:3000/auth/login';
        let obj = {username, password};
        let arg = {method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify(obj)};
        let response = await fetch(url, arg);
        let data = await response.json();
        console.log('Login response:', data);
        console.log(data.access_token);
        console.log(data.username);
        console.log(data.role);

        if(data){
            console.log('Login response:', data);
            console.log(data.access_token);
            console.log(data.username);
            console.log(data.role);
            window.location.href = './homepage.html';
        }
    }
    catch(err){
        alert(err);
    }
}


// const loginForm = document.getElementById('login-form');
 
//     loginForm.addEventListener('submit', async (e) => {
//       e.preventDefault();
 
//       const username = document.getElementById('username').value.trim();
//       const password = document.getElementById('password').value.trim();
 
//       try {
//         const response = await fetch('http://localhost:3000/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ username, password })
//         });
 
//         const data = await response.json();
//         console.log('Login response:', data);
//         console.log(data.access_token);
//         console.log(data.username);
//         console.log(data.role);
//         // console.log(response.ok);
//           if (data) {
//           const jwtToken= data.access_token;
//           const payload = atob(jwtToken.split('.')[1]);
//           console.log("payload", payload);
//           localStorage.setItem('userdata', payload);
//           localStorage.setItem('access_token', data.access_token);
//           //dashboard redirection
//           window.location.href = './homepage.html';
//         } else {
//           alert(data.message || 'Invalid credentials');
//         }
//       } catch (error) {
//         console.error('Login error:', error);
//         alert('Failed to connect to server.');
//       }
//     });