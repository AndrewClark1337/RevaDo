import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RegionGalleryComponent from './components/RegionGalleryComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegionGalleryComponent />
    </>
  )
}

export interface Weather{
    cityName: string;
    region: string;
    temperature: number;
    latitude: number;
    longitude: number;
    timestamp: bigint;
}
export default App
