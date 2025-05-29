import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [stats, setStats] = useState({
    users: 10000,
    scrapes: 2500000,
    saved: 850
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 3),
        scrapes: prev.scrapes + Math.floor(Math.random() * 50),
        saved: prev.saved + Math.floor(Math.random() * 5)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Dynamic Background with Mouse Tracking */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Mouse-following spotlight */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: isHovered ? 0.8 : 0.3
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Stats */}
        <div className="absolute top-0 left-0 right-0 flex justify-between opacity-50">
          <div className="text-xs text-gray-500 animate-pulse">
            <span className="text-blue-400">{stats.users.toLocaleString()}+</span> active users
          </div>
          <div className="text-xs text-gray-500 animate-pulse">
            <span className="text-purple-400">{stats.scrapes.toLocaleString()}+</span> scrapes completed
          </div>
          <div className="text-xs text-gray-500 animate-pulse">
            <span className="text-green-400">{stats.saved}</span> hours saved today
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="max-w-4xl mx-auto mt-16">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-8 animate-shimmer">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-medium">
              🚀 Ready to Transform Your Data Collection?
            </span>
          </div>

          {/* Main Headlines with Stagger Animation */}
          <div className="space-y-2 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white animate-gradient-shift">
                Ready to Transform
              </span>
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-shift" style={{ animationDelay: '0.5s' }}>
                Your Data Collection?
              </span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">10,000+ businesses</span> already using WebScrapper to extract, 
            clean, and export data in seconds. Start your free trial today.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/scraper"
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Free Trial
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>

            <button className="group relative border-2 border-gray-600 hover:border-blue-500 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Schedule Demo
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 mb-16">
            <div className="flex items-center justify-center group hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mr-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center justify-center group hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">14-Day Free Trial</span>
            </div>
            <div className="flex items-center justify-center group hover:text-white transition-colors duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">30-Day Money Back</span>
            </div>
          </div>
        </div>        {/* Secondary CTA Section */}
        <div className="pt-16 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* For Developers */}
            <div className="group text-left p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">For Developers</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Integrate WebScrapper into your applications with our robust API. 
                Full documentation and SDKs available for seamless integration.
              </p>
              <button className="group/btn text-white border border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center font-medium">
                View API Docs
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              {/* Feature highlights */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  RESTful API with rate limiting
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  SDKs for Python, Node.js, PHP
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Webhook notifications
                </div>
              </div>
            </div>

            {/* For Enterprises */}
            <div className="group text-left p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">For Enterprises</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Need custom solutions, dedicated support, or on-premise deployment? 
                Let's discuss your enterprise requirements and scale together.
              </p>
              <button className="group/btn text-white border border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 px-6 py-3 rounded-lg transition-all duration-300 flex items-center font-medium">
                Contact Sales
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              {/* Enterprise features */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Custom SLA agreements
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  On-premise deployment
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Dedicated account manager
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Final Urgency Elements */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
              
              {/* Live Activity Indicator */}
              <div className="flex items-center group">
                <div className="relative mr-4">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                    <span className="animate-pulse">{Math.floor(Math.random() * 50) + 100}</span> users active now
                  </div>
                  <div className="text-sm text-gray-400">Scraping data in real-time</div>
                </div>
              </div>

              {/* Signup Counter */}
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    <span className="animate-pulse">{Math.floor(Math.random() * 20) + 110}</span> signups today
                  </div>
                  <div className="text-sm text-gray-400">Join the growing community</div>
                </div>
              </div>

              {/* Forever Free Badge */}
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                    Free tier forever
                  </div>
                  <div className="text-sm text-gray-400">No hidden costs</div>
                </div>
              </div>
            </div>
            
            {/* Progress bar animation */}
            <div className="mt-8">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>Monthly free tier usage</span>
                <span>73% used across all users</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{ width: '73%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
