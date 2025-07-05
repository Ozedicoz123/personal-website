function addBook() {
    const title = document.getElementById('title').value.trim()
    const author = document.getElementById('author').value.trim()

    if (title === '' || author === '') {
        alert('please fill the input ');
        return;
    }

    let books = JSON.parse(localStorage.getItem('books')) || [];

    books.push({author, title});

    localStorage.setItem('books', JSON.stringify(books));

    alert('book has being added');

    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
showBooks(); 
}

function showBooks() {
    let bookList = document.getElementById('booklist');
    bookList.innerHTML = "";
    const books = JSON.parse(localStorage.getItem('books')) || [];

    if (books.length === 0) {
        bookList.innerHTML = '<p>no book found in the storage</p>'
        return;
    }

    books.forEach((book, index) => {
        const div = document.createElement("div");
        div.className = "book";
        div.innerText = `📖 Title: " ${book.title}" by ${book.author}`;
        bookList.appendChild(div);
      });
    }
    function clearBooks() {
    localStorage.clear()
    document.getElementById('booklist').innerText = ''
}
    