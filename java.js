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
  addBookToLibrary();
  log.textContent = `Book added!`;
  event.preventDefault();
}
  
// global variable declarations
const form = document.getElementById("submit-form").addEventListener('submit', submitForm);
const log = document.getElementById('log');



