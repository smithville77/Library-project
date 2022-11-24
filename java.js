const myLibrary = [];

//constructor function to create new book objects
function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.read = read;
}

//function that gets the input values from user and creates an instantiated book object;
function addBookToLibrary() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  let book = new Book(title, author, pages)
  myLibrary.push(book)
  
}

//submits the form 
function submitForm(event) {
  event.preventDefault();
  clearTable();
  addBookToLibrary();
  tableDisplay();
  log.textContent = `Book added!`;
  
}


// adds books to display table
function tableDisplay() {
  
  myLibrary.forEach(book => {
    const display = document.getElementById('display-body');
    let row = display.insertRow(0);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pageCell = row.insertCell(2);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pageCell.textContent = book.pages;
    
  })
}


function clearTable() {
  let display = document.getElementById('display-body');
  display.textContent = "";
}



// global variable declarations
const form = document.getElementById("submit-form").addEventListener('submit', submitForm);
const log = document.getElementById('log');



