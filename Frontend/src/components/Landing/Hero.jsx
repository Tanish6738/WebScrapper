import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="aceternity-hero min-h-screen flex items-center pt-16 relative">
      {/* Dynamic Background Effects */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <div className="aceternity-badge inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 group cursor-default">
                <span className="aceternity-pulse-dot w-2 h-2 rounded-full mr-3"></span>
                <span className="relative z-10">Trusted by 10,000+ Businesses Worldwide</span>
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              {/* Main Headline with Gradient Animation */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="aceternity-title block">Extract Any Data From</span>
                <span className="aceternity-title-accent block">Any Website</span>
                <span className="aceternity-title block">in Seconds</span>
              </h1>
              
              {/* Enhanced Subheadline */}
              <p className="aceternity-subtitle text-xl lg:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0">
                AI-powered web scraping platform with{' '}
                <span className="text-cyan-400 font-semibold">99.9% success rate</span>.
                No coding required, enterprise-grade security, and real-time data extraction.
              </p>
              
              {/* Animated Value Props */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
                <div className="aceternity-value-prop flex items-center text-sm group">
                  <svg className="aceternity-check-icon w-5 h-5 mr-3 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">No Coding Required</span>
                </div>
                <div className="aceternity-value-prop flex items-center text-sm group">
                  <svg className="aceternity-check-icon w-5 h-5 mr-3 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">99.9% Success Rate</span>
                </div>
                <div className="aceternity-value-prop flex items-center text-sm group">
                  <svg className="aceternity-check-icon w-5 h-5 mr-3 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Real-Time Processing</span>
                </div>
                <div className="aceternity-value-prop flex items-center text-sm group">
                  <svg className="aceternity-check-icon w-5 h-5 mr-3 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Enterprise Security</span>
                </div>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                <Link 
                  to="/scraper"
                  className="aceternity-cta-primary px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 aceternity-focus-ring group"
                >
                  <span className="flex items-center justify-center space-x-3 relative z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Start Free Trial</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <button className="aceternity-cta-secondary px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 aceternity-focus-ring group">
                  <span className="flex items-center justify-center space-x-3">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Watch 2-Min Demo</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </button>
              </div>
              
              {/* Enhanced Social Proof */}
              <div className="aceternity-stats flex flex-wrap justify-center lg:justify-start gap-8 pt-8 backdrop-blur-sm rounded-2xl px-6 py-6">
                <div className="text-center group cursor-default">
                  <div className="aceternity-stat-number text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110">500M+</div>
                  <div className="aceternity-stat-label text-sm font-medium">Data Points Extracted</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="aceternity-stat-number text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110">99.9%</div>
                  <div className="aceternity-stat-label text-sm font-medium">Uptime SLA</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="aceternity-stat-number text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110">24/7</div>
                  <div className="aceternity-stat-label text-sm font-medium">Expert Support</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="aceternity-stat-number text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110">150+</div>
                  <div className="aceternity-stat-label text-sm font-medium">Countries Supported</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Enhanced Visual */}
          <div className="lg:col-span-6 mt-16 lg:mt-0">
            <div className="relative perspective-1000">
              {/* Main Dashboard Mockup */}
              <div className="aceternity-visual-card rounded-3xl shadow-2xl overflow-hidden transform-gpu">
                {/* Browser Header */}
                <div className="aceternity-browser-header px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="aceternity-browser-dot w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                    <div className="aceternity-browser-dot w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                    <div className="aceternity-browser-dot w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-white text-sm font-medium bg-white/10 px-4 py-1 rounded-full inline-block">
                      🕷️ WebScrapper AI Dashboard
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Live</span>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-8 space-y-6">
                  {/* Scraping Jobs */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-lg">Active Scrapers</h3>
                      <div className="text-cyan-400 text-sm font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                        12 Running
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium">E-commerce Product Data</div>
                          <div className="text-gray-400 text-sm">amazon.com • 1.2K products/min</div>
                        </div>
                        <div className="text-green-400 text-sm font-semibold">98.5%</div>
                      </div>
                      
                      <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium">Social Media Analytics</div>
                          <div className="text-gray-400 text-sm">twitter.com • 850 posts/min</div>
                        </div>
                        <div className="text-blue-400 text-sm font-semibold">99.1%</div>
                      </div>
                      
                      <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium">Financial Data Mining</div>
                          <div className="text-gray-400 text-sm">bloomberg.com • 350 records/min</div>
                        </div>
                        <div className="text-purple-400 text-sm font-semibold">97.8%</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold">Today's Progress</div>
                        <div className="text-gray-400 text-sm">2.5M data points extracted</div>
                      </div>
                      <div className="text-cyan-400 text-2xl font-bold">87%</div>
                    </div>
                    <div className="aceternity-progress-bar w-full h-3 rounded-full overflow-hidden">
                      <div className="aceternity-progress-fill h-full w-[87%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="aceternity-floating-element aceternity-demo-badge -top-6 -right-6 px-4 py-2 rounded-full text-sm font-semibold shadow-xl">
                🚀 Live Demo
              </div>
              
              <div className="aceternity-floating-element aceternity-success-badge -bottom-6 -left-6 px-6 py-3 rounded-2xl text-sm font-semibold shadow-xl">
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Data Extracted Successfully</span>
                </span>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-1/4 -left-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-center shadow-xl">
                <div className="text-cyan-400 text-xl font-bold">2.5K</div>
                <div className="text-xs text-gray-300">Requests/min</div>
              </div>
              
              <div className="absolute top-3/4 -right-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-center shadow-xl">
                <div className="text-purple-400 text-xl font-bold">99.9%</div>
                <div className="text-xs text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  )
}

export default Hero