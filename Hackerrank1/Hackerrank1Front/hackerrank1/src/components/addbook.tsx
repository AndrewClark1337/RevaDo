import React from 'react'
import type { Book } from '../App';
import './addbook.css'



function Addbook() {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [year, setYear] = React.useState(0);
    const [pages, setPages] = React.useState(0);
    async function newBook() {
        const book: Book = {
            title: title,
            author: author,
            genre: genre,
            publishedYear: year,
            pages: pages
        };
        console.log("New Book: ",JSON.stringify(book));
      
        
        const response = await fetch(`http://localhost:8083/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        console.log("Response Status: ", response.status);
        const result = await response.json();
        console.log(result);
        // Handle book submission logic here
    }



  return (
    <div>
        <h2>Add a New Book: </h2>
      <form className='addbook' onSubmit={newBook}>
        <label>Title: <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} /></label>
        <br></br>
        <label>Author: <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} /></label>
        <br></br>
        <label>Genre: <input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} /></label>
        <br></br>
        <label>Publication Year: <input type="number" placeholder="Year" onChange={(e) => setYear(parseInt(e.target.value) || 0)} /></label>
        <br></br>
        <label>Pages: <input type="number" placeholder="Pages" onChange={(e) => setPages(parseInt(e.target.value) || 0)} /></label>
        <br></br>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default Addbook
