const secondInput = document.createElement('input');
document.body.appendChild(secondInput);

const thirdButton = document.createElement('button');
document.body.appendChild(thirdButton);
thirdButton.innerHTML = "BUTTON"

 secondInput.addEventListener('input',dothis);


 function dothis(event){
     console.log(event.target.value)

 }