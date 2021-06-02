const pagewrapper = document.createElement('div');
document.body.appendChild(pagewrapper);

const button = document.querySelector('button');
button.addEventListener('click',showInput);



function showInput(){

    const myInput = document.querySelector('input');
    console.log(myInput.value);

}