const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Moby-Dick", author: "Herman Melville" }
];

const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

function displayBooks(books) {
    bookList.innerHTML = books.map(book => `
        <div class="book-item">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        </div>
    `).join('');
}

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
});

// Initial display of all books
displayBooks(books);
