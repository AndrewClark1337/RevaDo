import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ShelfOverview from './controllers/ShelfOverview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <ShelfOverview />
      </section>

     
    </>
  )
}

export default App

export interface Inventory{
  shelfLocation: string,
  productName: string,
  category: string,
  stockLevel: number,
  capacity: number,
  lastUpdated: bigint
}