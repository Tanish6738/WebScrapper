import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`aceternity-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 aceternity-logo rounded-xl flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl relative z-10">⚡</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">WebScrapper</span>
                <span className="text-xs text-gray-400 leading-none">AI-Powered</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link 
                to="/features" 
                className="aceternity-nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="aceternity-nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                Pricing
              </Link>
              <Link 
                to="/use-cases" 
                className="aceternity-nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                Use Cases
              </Link>
              <a 
                href="#docs" 
                className="aceternity-nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                API Docs
              </a>
              <a 
                href="#contact" 
                className="aceternity-nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                Support
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">

            <Link
              to="/scraper"
              className="aceternity-cta-primary px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 aceternity-focus-ring"
            >
              <span className="flex items-center space-x-2 relative z-10">
                <span>Try Scraper</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-xl border-t border-gray-800">
            <Link 
              to="/features" 
              className="aceternity-nav-link block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Features</span>
              </span>
            </Link>
            <Link 
              to="/pricing" 
              className="aceternity-nav-link block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span>Pricing</span>
              </span>
            </Link>
            <Link 
              to="/use-cases" 
              className="aceternity-nav-link block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Use Cases</span>
              </span>
            </Link>
            <a 
              href="#docs" 
              className="aceternity-nav-link block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>API Docs</span>
              </span>
            </a>
            <a 
              href="#contact" 
              className="aceternity-nav-link block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Support</span>
              </span>
            </a>
            
            <div className="pt-4 pb-3 border-t border-gray-800 mt-4">
              <div className="flex flex-col space-y-3 px-4">
                <button className="aceternity-nav-link flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Sign In</span>
                </button>
                <Link
                  to="/scraper"
                  className="aceternity-cta-primary px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center space-x-2 relative z-10">
                    <span>Start Free Trial</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>      )}
    </nav>
  )
}

export default Navbar
