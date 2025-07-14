const btn = document.querySelector("button");
const par = document.querySelector(".temp");

btn.addEventListener('click',call);

function call(){
    if(par.classList.contains('temp')){
        par.classList.remove('temp');
    }
    else{
        par.classList.add('temp');
    }
}
