const dialog = document.querySelector('dialog');
const addBtn = document.getElementById('addBtn');
const readBtn = document.querySelector(".readBtn");
const removeBtn = document.querySelector(".removeBtn");
const card = document.querySelector('.card');

addBtn.addEventListener('click', () =>{
    dialog.showModal();
});

dialog.addEventListener('click', e =>{
    const dialogDimensions = dialog.getBoundingClientRect();
    if(e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom){
        dialog.close();
    }
});

readBtn.addEventListener('click', () =>{
    if(readBtn.textContent==="READ"){
        readBtn.textContent = "NOT READ";
        readBtn.style.backgroundColor = "red";
    }
    else{
        readBtn.textContent = "READ";
        readBtn.style.backgroundColor = "green";S
    }
});

removeBtn.addEventListener('click', () =>{
    card.st
});