const homenav = document.querySelector(".btn");
const iname = document.querySelector("#iname");
const h2 = document.querySelector(".welhome");
const em = document.querySelector("#email");
const p = document.querySelector("#pass");
homenav.addEventListener('click',call);


let users = {
    o1 : {
       email : 'meet.madani@kevit.io',
       pass : 'randompass1'
    },
    o2 : {
       email : 'saurabh.solanki@kevit.io',
       pass : 'randompass2'
    }
}

function call(){

    // console.log('call');
    
    if(!iname.value.trim() || !em.value.trim() || !p.value.trim()){
        alert("enter all inputs");
        return;
    }
    
    for(let obs in users){
        if(users[obs].email === em.value && users[obs].pass === p.value){
            window.location.href = 'homepage.html';
            break;
        }
    }
    
    alert("invalid credentials!");
    return;
}

export {users};



