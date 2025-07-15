const homenav = document.querySelector(".btn");
homenav.addEventListener('click',call);
const iname = document.querySelector("#iname");
const h2 = document.querySelector(".welhome");
localStorage.setItem("iname",iname);


function call(){
    const cname = localStorage.getItem("iname");
    window.location.href = 'homepage.html';
    h2.textContent = `Welcome ${cname}`;
    alert(h2.textContent);
}



