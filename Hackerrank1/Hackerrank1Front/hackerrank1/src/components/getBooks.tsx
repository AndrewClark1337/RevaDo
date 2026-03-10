import React from 'react'
import type { Book } from '../App';


function GetBooks() {
    const [books, setBooks] = React.useState([]);
    const [author, setAuthor] = React.useState("");
    const [genre, setGenre] = React.useState("");

    async function fetchBooks(e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('author', author);
        params.append('genre', genre);
        const response = await fetch(`http://localhost:8083/books?${params}`,{
            method: 'GET',
          
        });
        console.log("Response Status: ", response.status);
        const data = await response.json();
        console.log("Fetched Books: ", data);
        setBooks(data);
    }

  return (
    <div>
      {(books.length) > 0 ? (
        <ul>
          {books.map((book: Book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Published Year: {book.publishedYear}</p>
              <p>Pages: {book.pages}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
      <br></br>
      <div>
        <form onSubmit={fetchBooks}>
            <label> Author: <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} /></label>
            <label> Genre: <input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} /></label>
                <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default GetBooks
