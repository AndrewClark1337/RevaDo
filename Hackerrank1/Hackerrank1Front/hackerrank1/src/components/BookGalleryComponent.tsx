import React, {   useEffect } from 'react'
import type { Book } from '../App';
import ReactPaginate from 'react-paginate';
import BookListComponent from './BookListComponent';
import SidebarComponent from './SidebarComponent';



function BookGalleryComponent() {
  const [books, setBooks] = React.useState<Book[]>([]);
   async function fetchBooks() 
      {
          const params = new URLSearchParams();
          params.append('author', "");
          params.append('genre', "");
          const response = await fetch(`http://localhost:8083/books?${params}`,{
              method: 'GET',
          
          });
          console.log("Response Status: ", response.status);
          const data = await response.json();
          console.log("Fetched Books: ", data);
          setBooks(data);
      }
   
    useEffect(() => {
      fetchBooks();
    }, []);



  return (
    <div>
      <BookListComponent books={books} />
      <SidebarComponent books={books} setBooks={setBooks} />
    </div>
  )
}




export default BookGalleryComponent
