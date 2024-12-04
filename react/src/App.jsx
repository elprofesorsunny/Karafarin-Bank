import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Announcements from './components/announcements'
import Carousel from './components/carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Header></Header>
      <Announcements></Announcements>
      <Carousel></Carousel>
    </div>

  )
}

export default App
