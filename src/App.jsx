import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Header/Navbar'
import  Combine  from './Pages/Home/Combine'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarketingOverview from './Pages/Marketing/MarketingOverview'
import Compare from './Pages/Compare/Compare'
import Pricing from './Pages/Pricing/Pricing'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route exact path='/' element={<Combine/>} />
            <Route exact path='/compare' element={<Compare/>} />
            <Route exact path='/marketing' element={<MarketingOverview />} />
            <Route exact path='/pricing' element={<Pricing />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>

    </>
  )
}

export default App
