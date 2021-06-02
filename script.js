const my_input = document.createElement('input');
document.body.appendChild(my_input);

const Btn = document.createElement('button');
document.body.appendChild(Btn);
Btn.innerHTML='Add'


const UL = document.createElement('ul');
document.body.appendChild(UL);

Btn.addEventListener('click',show);


function show(){
    const Text = document.createTextNode(my_input.value);
    const LI = document.createElement('li');
    UL.appendChild(LI);
    LI.appendChild(Text);
    document.querySelector('input').value='';
}