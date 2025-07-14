const homenav = document.querySelector("button");
homenav.addEventListener('click',call);
const iname = document.querySelector("#iname");
const h2 = document.querySelector(".welhome");

function call(){
    window.location.href = 'homepage.html';
    h2.textContent = "Welcome" + iname.value;
    alert(h2.textContent);
}


