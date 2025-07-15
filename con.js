let tab = document.querySelector("table").querySelector("tbody");
let btn = document.querySelector("button");
let ph = document.querySelector("#phone-number");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let act;
if(tab.querySelectorAll('tr').length > 0){
    act = document.querySelector("#"+ph.value);
    act.addEventListener('click',del(act.id));
}

btn.addEventListener('click',call);





function call(){
    let tr = document.createElement('tr');
    let one = document.createElement('td');
    let two = document.createElement('td');
    let three = document.createElement('td');
    let op = document.createElement('td');

    let ebt = document.createElement('button');
    ebt.textContent = 'Edit';
    ebt.setAttribute('class','edit');

    let dbt = document.createElement('button');
    dbt.textContent = 'Delete';
    dbt.setAttribute('class','delete');

    op.appendChild(ebt);
    op.appendChild(dbt);

    one.textContent = ph.value;
    two.textContent = email.value;
    three.textContent = three.value;
    dbt.setAttribute('id',ph.value);

    tr.appendChild(one);
    tr.appendChild(two);
    tr.appendChild(three);
    tr.appendChild(op);

    tab.appendChild(tr);
}

function del(id){
    const all = tab.querySelectorAll('tr');
    for(let i = 0;i<all.length;i++){
        if(rows[i].cells[0].textContent === id){
            tab.remove(all[i]);
            break;
        }
    }
}