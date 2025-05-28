import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Landing/Navbar'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <div className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</div>
            <p className="text-gray-600 mb-8 max-w-md">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Go Back Home
            </Link>
            <div className="flex justify-center space-x-4 text-sm">
              <Link to="/features" className="text-blue-600 hover:text-blue-800">Features</Link>
              <Link to="/pricing" className="text-blue-600 hover:text-blue-800">Pricing</Link>
              <Link to="/scraper" className="text-blue-600 hover:text-blue-800">Try Scraper</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
