const dialog = document.querySelector('dialog');
const addBtn = document.getElementById('addBtn');
const readBtn = document.querySelector('.readBtn');
const removeBtn = document.querySelector('.removeBtn');
const card = document.querySelector('.card');
const submitBtn = document.getElementById('submitBtn');

const myLibrary = [];

function Book(title, author, pages, isRead=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').value;

    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    console.log(myLibrary[0]);
}

submitBtn.addEventListener('click', addBookToLibrary);

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