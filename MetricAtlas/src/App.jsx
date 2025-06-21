import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Compare from './Components/Compare.jsx'
import Metric from './Components/Metric.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className='min-h-screen playfair-font'>
      <Navbar/>
      <Header/>
      <Compare/>
      <Metric/>
      <Footer/>
    </div>
  )
}

export default App
