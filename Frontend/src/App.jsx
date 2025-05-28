import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Scraper from './page/Scraper'
import './App.css'
import Landing from './page/Landing'
import FeaturesPage from './page/FeaturesPage'
import PricingPage from './page/PricingPage'
import UseCasesPage from './page/UseCasesPage'
import NotFound from './page/NotFound'
import Navbar from './components/Landing/Navbar'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/scraper" element={<Scraper />} />
      <Route path="/features" element={<><Navbar /><FeaturesPage /></>} />
      <Route path="/pricing" element={<><Navbar /><PricingPage /></>} />
      <Route path="/use-cases" element={<><Navbar /><UseCasesPage /></>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App