import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BikeDisplay from './components/BikeDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BikeDisplay />
    </>
  )
}

export default App

export interface Bike {
  id: number;
  modelType: string;
  batteryLevel: number;
  status: string;
  latitude: number;
  longitude: number;
  lastServiceDate: Date;
}