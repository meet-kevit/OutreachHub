// let tab = document.querySelector("table").querySelector("tbody");
// let btn = document.querySelector("button");
// const ph = document.querySelector("#phone-number");
// const fullname = document.querySelector("#fullname");
// const email = document.querySelector("#email");
// let len = null;
// btn.addEventListener('click',add);
// let curr = JSON.parse(localStorage.getItem('user'));

// const url = `https://68779c3edba809d901f02af6.mockapi.io/contact`;

// fetch(url).
//     then(response => {
//         if(!response.ok){
//             throw new Error("Error!!");
//         }
//         return response.json();
//     })
//     .then(data => {
//         len = data.length;
//         data.forEach(curr => {

//         let tr = document.createElement('tr');
//         let one = document.createElement('td');
//         let two = document.createElement('td');
//         let three = document.createElement('td');
//         let op = document.createElement('td');

//         let ebt = document.createElement('button');
//         ebt.textContent = 'Edit';
//         ebt.setAttribute('class','edit');

//         let view = document.createElement('button');
//         view.textContent = 'View';
//         view.setAttribute('class','vbt');
//         view.addEventListener('click',() => {
//             window.location.href = 'view.html';
//         });

//         let dbt = document.createElement('button');
//         dbt.textContent = 'Delete';
//         dbt.setAttribute('class','delete');
//         dbt.setAttribute('id',curr["id"]);
//         dbt.addEventListener('click', function () {
//            if(confirm("Are you sure to delete this contact?")){

//             fetch(`${url}/${dbt.id}`,{
//                 method: 'DELETE'
//             })
//             .then(() => {
//                 tr.remove(); 
//             })
//             .catch(err =>{
//                 alert("Sorry "+err);
//             });
//            }
//         });

//         ebt.addEventListener('click',() => {
//             localStorage.setItem('tempedit',JSON.stringify({ph:one.textContent,email:two.textContent,name: three.textContent,id:curr["id"]}));
//             window.location.href = 'editc.html';
//         });

//        op.appendChild(view);
//        op.appendChild(ebt);
//        op.appendChild(dbt);

//        one.textContent = curr["contact"];
//        two.textContent = curr["email"];
//        three.textContent = curr["name"];

//        tr.appendChild(one);
//        tr.appendChild(two);
//        tr.appendChild(three);
//        tr.appendChild(op);

//        tab.appendChild(tr);
//        });
//     })

// function add(){
//     if(!ph.value.trim() || !email.value.trim() || !fullname.value.trim()){
//         alert("Enter all inputs");
//         return;
//     }
//     len++;
//     const oa = {
//         contact: ph.value,
//         email: email.value,
//         name: fullname.value,
//         id: len
//     }

//     fetch(`${url}`,{
//         method : 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(oa)
//     })
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Adding failed!");
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert("New data added!"+data);
//         let tr = document.createElement('tr');
//         let one = document.createElement('td');
//         let two = document.createElement('td');
//         let three = document.createElement('td');
//         let op = document.createElement('td');

//         let ebt = document.createElement('button');
//         ebt.textContent = 'Edit';
//         ebt.setAttribute('class','edit');

//         let view = document.createElement('button');
//         view.textContent = 'View';
//         view.setAttribute('class','vbt');
//         view.addEventListener('click',() => {
//             window.location.href = 'view.html';
//         });

//         let dbt = document.createElement('button');
//         dbt.textContent = 'Delete';
//         dbt.setAttribute('class','delete');
//         dbt.setAttribute('id',curr["id"]);
//         dbt.addEventListener('click', function () {
//            if(confirm("Are you sure to delete this contact?")){

//             fetch(`${url}/${dbt.id}`,{
//                 method: 'DELETE'
//             })
//             .then(() => {
//                 tr.remove(); 
//             })
//             .catch(err =>{
//                 alert("Sorry "+err);
//             });
//            }
//         });

//         ebt.addEventListener('click',() => {
//             localStorage.setItem('tempedit',JSON.stringify({ph:one.textContent,email:two.textContent,name: three.textContent,id:curr["id"]}));
//             window.location.href = 'editc.html';
//         });

//        op.appendChild(view);
//        op.appendChild(ebt);
//        op.appendChild(dbt);

//        one.textContent = ph.value;
//        two.textContent = email.value;
//        three.textContent = fullname.value;

//        tr.appendChild(one);
//        tr.appendChild(two);
//        tr.appendChild(three);
//        tr.appendChild(op);

//        tab.appendChild(tr);
//     })
//     .catch(err => {
//         alert("No add",err);
//     });
//     alert("complete");
// }

let token = localStorage.getItem('access_token');
let tab = document.querySelector("table").querySelector("tbody");
let btn = document.querySelector("#con-btn");
const ph = document.querySelector("#phone-number");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
let len = null;

const lg = document.querySelector("#lg");
lg.addEventListener('click', logout);

const url = `http://localhost:3000/contacts`;

let arg = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 
    }
}

fetch(url, arg).
    then(response => {
        if (!response.ok) {
            throw new Error("Error!!");
        }
        return response.json();
    })
    .then(res => {
        len = res.length;
        console.log(res);
        let i = 0;
        res.data.forEach(cur => {

            let tr = document.createElement('tr');
            let one = document.createElement('td');
            let two = document.createElement('td');
            let three = document.createElement('td');
            let op = document.createElement('td');

            let ebt = document.createElement('button');
            ebt.textContent = 'Edit';
            ebt.setAttribute('class', 'edit');

            let view = document.createElement('button');
            view.textContent = 'View';
            view.setAttribute('class', 'vbt');
            view.addEventListener('click', () => {
                localStorage.setItem('tempedit', JSON.stringify({ ph: one.textContent, email: two.textContent, name: three.textContent, id: cur.id }));
                window.location.href = 'view.html';
            });

            let dbt = document.createElement('button');
            dbt.textContent = 'Delete';
            dbt.setAttribute('class', 'delete');
            dbt.addEventListener('click', function () {
                if (confirm("Are you sure to delete this contact?")) {

                    fetch(`${url}/${cur.id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` }
                    })
                        .then(() => {
                            tr.remove();
                        })
                        .catch(err => {
                            alert("Sorry " + err);
                        });
                }
            });

            ebt.addEventListener('click', () => {
                localStorage.setItem('tempedit', JSON.stringify({ ph: one.textContent, email: two.textContent, name: three.textContent, id: cur.id }));
                window.location.href = 'editc.html';
            });

            op.appendChild(view);
            op.appendChild(ebt);
            op.appendChild(dbt);

            one.textContent = cur.phoneNumber;
            two.textContent = cur.id;
            three.textContent = cur.name;

            tr.appendChild(one);
            tr.appendChild(two);
            tr.appendChild(three);
            tr.appendChild(op);

            tab.appendChild(tr);
            i++;
        });
    })

const add=(e)=> {
    e.preventDefault();
    console.log("call");
    if (!ph.value.trim() || !email.value.trim() || !fullname.value.trim()) {
        alert("Enter all inputs");
        return;
    }

    const contact = {
        name: fullname.value,
        phoneNumber: ph.value,
        id: email.value, // Assuming 'id' is the email in this context
        tags: null
    };

    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}`, 'Content-Type': 'application/json' }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Adding failed!");
            }
            console.log("con");
            return response.json();
        })
        .then(data => {
            alert("New data added!" + JSON.stringify(data));
            let tr = document.createElement('tr');
            let one = document.createElement('td');
            let two = document.createElement('td');
            let three = document.createElement('td');
            let op = document.createElement('td');

            let ebt = document.createElement('button');
            ebt.textContent = 'Edit';
            ebt.setAttribute('class', 'edit');

            let view = document.createElement('button');
            view.textContent = 'View';
            view.setAttribute('class', 'vbt');
            view.addEventListener('click', () => {
                localStorage.setItem('tempedit', JSON.stringify({ ph: one.textContent, email: two.textContent, name: three.textContent, id: data.id }));
                window.location.href = 'view.html';
            });

            let dbt = document.createElement('button');
            dbt.textContent = 'Delete';
            dbt.setAttribute('class', 'delete');
            dbt.addEventListener('click', function () {
                alert("yes")
                if (confirm("Are you sure to delete this contact?")) {

                    fetch(`${url}/${dbt.id}`, {
                        method: 'DELETE'
                    })
                        .then(() => {
                            tr.remove();
                        })
                        .catch(err => {
                            alert("Sorry " + err);
                        });
                }
            });

            ebt.addEventListener('click', () => {
                localStorage.setItem('tempedit', JSON.stringify(contact));
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
        }).catch(err => {
            alert(err.message);
        });
}
btn.addEventListener("click", add);
function logout() {
    if (confirm(localStorage.getItem('user') + " will be logged out")) {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        localStorage.removeItem('userdata');
        window.location.href = '../index.html'; // Redirect to login page
    }
    alert("Logged out successfully");

}