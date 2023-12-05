const dialog = document.querySelector('dialog');
const cardsContainer = document.querySelector('.cards-container');
const addBtn = document.getElementById('addBtn');
const readBtn = document.querySelector('.readBtn');
const removeBtn = document.querySelector('.removeBtn');
const card = document.querySelector('.card');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('bookForm');

const myLibrary = [];

function Book(title, author, pages, isRead=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function validateForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    if (title.trim() === '' || author.trim() === '' || pages.trim() === '') {
        return false;
    }

    return true;
}

function addBookToLibrary(){
    if(validateForm()){
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const isRead = document.getElementById('isRead').checked;
    
        let book = new Book(title, author, pages, isRead);
        myLibrary.push(book);
        createCard(book);

        dialog.close();
        form.reset();
    }
}

function createCard(book){
    const containerDiv = document.createElement('div');

    const title = document.createElement('p');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.textContent = book.pages;

    const isRead = document.createElement('button');
    book.isRead === true ? isRead.textContent = "READ" : isRead.textContent = "NOT READ";

    const removeButton = document.createElement('button');
    removeButton.textContent = "REMOVE"

    containerDiv.classList.add('card');
    isRead.classList.add('card-btns');
    removeButton.classList.add('card-btns');
    cardsContainer.appendChild(containerDiv);
    containerDiv.appendChild(title);
    containerDiv.appendChild(author);
    containerDiv.appendChild(pages);
    containerDiv.appendChild(isRead);
    containerDiv.appendChild(removeButton); 
}

submitBtn.addEventListener('click', addBookToLibrary);

addBtn.addEventListener('click', () =>{
    dialog.showModal();
});

cancelBtn.addEventListener('click', () =>{
    dialog.close();
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
        readBtn.style.backgroundColor = "green";
    }
});