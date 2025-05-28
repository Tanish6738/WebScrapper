import React from 'react'
import UseCases from '../components/Landing/UseCases'
import Footer from '../components/Landing/Footer'

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        <UseCases />
      </main>
      <Footer />
    </div>
  )
}

export default UseCasesPage
