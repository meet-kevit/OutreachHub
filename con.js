let tab = document.querySelector("table").querySelector("tbody");
let btn = document.querySelector("button");
const ph = document.querySelector("#phone-number");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");

btn.addEventListener('click',add);

function add(e){
    e.preventDefault();
    let tr = document.createElement('tr');
    let one = document.createElement('td');
    let two = document.createElement('td');
    let three = document.createElement('td');
    let op = document.createElement('td');

    if(!ph.value.trim() || !email.value.trim() || !fullname.value.trim()){
        alert("Enter all inputs");
        return;
    }

    let ebt = document.createElement('button');
    ebt.textContent = 'Edit';
    ebt.setAttribute('class','edit');

    let dbt = document.createElement('button');
    dbt.textContent = 'Delete';
    dbt.setAttribute('class','delete');
    dbt.addEventListener('click', function () {
        tr.remove();  
    });

    ebt.addEventListener('click',() => {
        if(ebt.textContent === 'Edit'){
            one.innerHTML = `<input type="text" class="tempp" placeholder="Enter new mobile number" value="${one.textContent}">`;
           two.innerHTML = `<input type="email" class="tempp" placeholder="Enter new email" value="${two.textContent}">`;
           three.innerHTML = `<input type="text" class="tempp" placeholder="Enter new name" value="${three.textContent}">`;
           ebt.textContent = 'Save';
        }
        else
        {
            one.textContent = `${one.querySelector('input').value}`;
            two.textContent = `${two.querySelector('input').value}`;
            three.textContent = `${three.querySelector('input').value}`;
            ebt.textContent = 'Edit';
        }
    });

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

    ph.value = '';
    email.value = '';
    fullname.value = '';
}
