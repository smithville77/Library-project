let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.Info = function () {
    console.log(`${this.title} by ${this.author} , ${this.pages} pages, read: ${this.read}`)
  }
}

// TheHobbit = new Book("The Hobbit", "Tolkein", 696, "yes")

// alert(TheHobbit.Info)


function addBookToLibrary() {

}