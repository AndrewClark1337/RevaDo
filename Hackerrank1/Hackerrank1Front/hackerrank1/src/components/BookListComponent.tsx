import React, { useEffect } from 'react'
import type { Book } from '../App';

function BookListComponent({books}: { books: Book[] }) {
 

  const [page, setPage] = React.useState(0);
  const [pageContent, setPageContent] = React.useState<Book[]>([]);
  const itemsPerPage = 10;
 
  useEffect(() => {
     setPageContent(books.slice(page * itemsPerPage, (page + 1) * itemsPerPage));
  
  }, [page, books]);

    if (books.length > 0) {
      return (
      
       
          <div>
            <ul>
              {pageContent.map((book: Book, index) => (
                <li key={index}>
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <p>Published Year: {book.publishedYear}</p>
                  <p>Pages: {book.pages}</p>
                </li>
              ))}
            </ul>
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
              Previous
            </button>
          
            <button onClick={() => setPage(page + 1)} disabled={(page + 1) * itemsPerPage >= books.length}>
              Next
            </button>
          </div>
        )
      }
  else{
    return (
      <div>
        <p>No books available.</p>
      </div>
    )
  }
}

export default BookListComponent
