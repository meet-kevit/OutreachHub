const em = document.querySelector("#email");
const p = document.querySelector("#pass");
const homenav = document.querySelector(".btn");
homenav.addEventListener('click',call);

function call(e){
    if(!iname.value.trim() || !em.value.trim() || !p.value.trim()){
        alert("enter all inputs");
        return;
    }
    e.preventDefault();
    const url = `https://68779c3edba809d901f02af6.mockapi.io/login?email=${em.value.trim()}`;

    fetch(url)
    .then(response => response.json())
    .then(users => {
        const user = users[0];
        if(user && user.password === p.value.trim()){
            alert(user);
            localStorage.setItem('user',JSON.stringify(user));
            window.location.href = 'homepage.html';
        }
        else{
            alert('no no not login');
        }
    })
    .catch(er =>{
        alert("sorry"+er);
    });
}