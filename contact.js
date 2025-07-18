let tab = document.querySelector("table").querySelector("tbody");
let btn = document.querySelector("button");
const ph = document.querySelector("#phone-number");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
let len = null;
btn.addEventListener('click',add);
let curr = JSON.parse(localStorage.getItem('user'));

const url = `https://68779c3edba809d901f02af6.mockapi.io/contact`;

fetch(url).
    then(response => {
        if(!response.ok){
            throw new Error("Error!!");
        }
        return response.json();
    })
    .then(data => {
        len = data.length;
        data.forEach(curr => {

        let tr = document.createElement('tr');
        let one = document.createElement('td');
        let two = document.createElement('td');
        let three = document.createElement('td');
        let op = document.createElement('td');

        let ebt = document.createElement('button');
        ebt.textContent = 'Edit';
        ebt.setAttribute('class','edit');
        
        let view = document.createElement('button');
        view.textContent = 'View';
        view.setAttribute('class','vbt');
        view.addEventListener('click',() => {
            window.location.href = 'view.html';
        });

        let dbt = document.createElement('button');
        dbt.textContent = 'Delete';
        dbt.setAttribute('class','delete');
        dbt.setAttribute('id',curr["id"]);
        dbt.addEventListener('click', function () {
           if(confirm("Are you sure to delete this contact?")){

            fetch(`${url}/${dbt.id}`,{
                method: 'DELETE'
            })
            .then(() => {
                tr.remove(); 
            })
            .catch(err =>{
                alert("Sorry "+err);
            });
           }
        });

        ebt.addEventListener('click',() => {
            localStorage.setItem('tempedit',JSON.stringify({ph:one.textContent,email:two.textContent,name: three.textContent,id:curr["id"]}));
            window.location.href = 'editc.html';
        });

       op.appendChild(view);
       op.appendChild(ebt);
       op.appendChild(dbt);

       one.textContent = curr["contact"];
       two.textContent = curr["email"];
       three.textContent = curr["name"];

       tr.appendChild(one);
       tr.appendChild(two);
       tr.appendChild(three);
       tr.appendChild(op);

       tab.appendChild(tr);
       });
    })

function add(){
    if(!ph.value.trim() || !email.value.trim() || !fullname.value.trim()){
        alert("Enter all inputs");
        return;
    }
    len++;
    const oa = {
        contact: ph.value,
        email: email.value,
        name: fullname.value,
        id: len
    }

    fetch(`${url}`,{
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(oa)
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Adding failed!");
        }
        return response.json();
    })
    .then(data => {
        alert("New data added!"+data);
        let tr = document.createElement('tr');
        let one = document.createElement('td');
        let two = document.createElement('td');
        let three = document.createElement('td');
        let op = document.createElement('td');

        let ebt = document.createElement('button');
        ebt.textContent = 'Edit';
        ebt.setAttribute('class','edit');
        
        let view = document.createElement('button');
        view.textContent = 'View';
        view.setAttribute('class','vbt');
        view.addEventListener('click',() => {
            window.location.href = 'view.html';
        });

        let dbt = document.createElement('button');
        dbt.textContent = 'Delete';
        dbt.setAttribute('class','delete');
        dbt.setAttribute('id',curr["id"]);
        dbt.addEventListener('click', function () {
           if(confirm("Are you sure to delete this contact?")){

            fetch(`${url}/${dbt.id}`,{
                method: 'DELETE'
            })
            .then(() => {
                tr.remove(); 
            })
            .catch(err =>{
                alert("Sorry "+err);
            });
           }
        });

        ebt.addEventListener('click',() => {
            localStorage.setItem('tempedit',JSON.stringify({ph:one.textContent,email:two.textContent,name: three.textContent,id:curr["id"]}));
            window.location.href = 'editc.html';
        });

       op.appendChild(view);
       op.appendChild(ebt);
       op.appendChild(dbt);

       one.textContent = ph.value;
       two.textContent = email.value;
       three.textContent = fullname.value;

       tr.appendChild(one);
       tr.appendChild(two);
       tr.appendChild(three);
       tr.appendChild(op);

       tab.appendChild(tr);
    })
    .catch(err => {
        alert("No add",err);
    });
    alert("complete");
}
