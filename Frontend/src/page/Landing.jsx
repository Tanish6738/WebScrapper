import React from 'react'
import Navbar from '../components/Landing/Navbar'
import Hero from '../components/Landing/Hero'
import Features from '../components/Landing/Features'
import UseCases from '../components/Landing/UseCases'
import SocialProof from '../components/Landing/SocialProof'
import Pricing from '../components/Landing/Pricing'
import CTA from '../components/Landing/CTA'
import Footer from '../components/Landing/Footer'

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <SocialProof />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default Landing