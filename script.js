const dialog = document.querySelector('dialog');
const cardsContainer = document.querySelector('.cards-container');
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
    const isRead = document.getElementById('isRead').checked;

    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    createCard(title, author, pages, isRead);
}

function createCard(tit, auth, pg, rd){
    const containerDiv = document.createElement('div');

    const title = document.createElement('p');
    title.textContent = tit;

    const author = document.createElement('p');
    author.textContent = auth;

    const pages = document.createElement('p');
    pages.textContent = pg;

    const isRead = document.createElement('button');
    rd === true ? isRead.textContent = "Read" : isRead.textContent = "Not read";

    const removeButton = document.createElement('button');

    containerDiv.classList.add('card');
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