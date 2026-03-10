import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddBook from './components/addbook'
import GetBooks from './components/getBooks'
function App() {
 

  return (
    <>
      <AddBook />
      <GetBooks />
    </>
  )
}

export interface Book {
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  pages: number;
}


export default App
