const myLibrary = [];

//constructor function to create new book objects
function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
}

//function that gets the input values from user and creates an instantiated book object;
function addBookToLibrary() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read-status").value;



  if (title == "" || author == "" || pages == "") {
    alert("Please don't leave anything blank")
    openForm();
  } else {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    
  }
}

//submits the form 
function submitForm(event) {
  event.preventDefault();
  clearTable();
  addBookToLibrary();
  tableDisplay();
  clearInputs();
  console.log(myLibrary);
}


// adds books to display table
function tableDisplay() {
  
  myLibrary.forEach(book => {
    const display = document.getElementById('display-body');
    let row = display.insertRow(0);
    row.dataset.id = myLibrary.length;
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pageCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    let btnCell = row.insertCell(4)
    

    


    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pageCell.textContent = book.pages;
    // readCell.textContent = book.read;

   let toggle = document.createElement("BUTTON");
   let toggleText  = document.createTextNode(book.read);
   toggle.appendChild(toggleText);
   readCell.appendChild(toggle);

   toggle.addEventListener("click", function() {
    readToggle(book);
   })

// creates and appends delete button to object in table
    let delButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode("Delete");
    delButton.appendChild(buttonText)
    btnCell.appendChild(delButton);

    //function to delete object from table
    delButton.addEventListener("click", function() {
      myLibrary.splice(myLibrary.indexOf(book),1)
      clearTable();
      tableDisplay();
      console.log(myLibrary);
    })

    
  })
}



function clearTable() {
  let display = document.getElementById('display-body');
  display.textContent = "";
}

function openForm() {
  document.getElementById("popup-section").style.display = "block";
  document.getElementById("overlay").style.display = "block"
}

function closeForm() {
  document.getElementById("popup-section").style.display = "none";
  document.getElementById("overlay").style.display = "none"
}

// clears input boxes to be called after information is submitted
function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";

}

function readToggle(book) {
  if (book.read == "Read") {
    book.read.value = "Not read";
  } else if (book.read == "Not read") {
    book.read.value = "Read";
  }
};


// global variable declarations
const form = document.getElementById("submit-form").addEventListener('submit', submitForm);
const log = document.getElementById('log');



