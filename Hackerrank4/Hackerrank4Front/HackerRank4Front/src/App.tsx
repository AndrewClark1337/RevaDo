import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MeterDisplay from './controllers/MeterDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MeterDisplay />
    </div>
  )
}

export default App

export interface Reading {
  timestamp?: bigint;
  meterId?: string;
  sectorName?: string;
  usageKwh?: number;
  voltage?: number;
  status?: string;

}