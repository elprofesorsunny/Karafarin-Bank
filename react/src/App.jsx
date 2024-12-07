import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Announcements from './components/announcements'
import Carousel from './components/carousel'
import NewsAndSidebar from './components/newsSidebar'
import PromotionalBanners from './components/promotionalBanners'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Header></Header>
      <Announcements></Announcements>
      <Carousel></Carousel>
      <NewsAndSidebar></NewsAndSidebar>
      <PromotionalBanners></PromotionalBanners>
    </div>

  )
}

export default App
