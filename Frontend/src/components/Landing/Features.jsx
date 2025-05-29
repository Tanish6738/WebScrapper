import React from 'react'

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Scraping",
      description: "Extract data from thousands of pages per minute with our optimized scraping engine.",
      features: ["Static & Dynamic Content", "Parallel Processing", "Real-time Updates"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI-Powered Data Cleaning",
      description: "Automatically clean, format, and organize scraped data with intelligent algorithms.",
      features: ["Smart Text Extraction", "Auto-formatting", "Duplicate Removal"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Bank-grade security with encryption, compliance, and data protection standards.",
      features: ["End-to-end Encryption", "GDPR Compliant", "SOC 2 Certified"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: "Multiple Export Formats",
      description: "Export your data in CSV, JSON, Markdown, or plain text formats instantly.",
      features: ["CSV Export", "JSON Format", "Markdown Output", "Custom Formats"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Built-in Text Editor",
      description: "Edit and refine your scraped data with our powerful built-in text editor.",
      features: ["Syntax Highlighting", "Find & Replace", "Real-time Preview"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Responsive",
      description: "Access and manage your scraping projects from any device, anywhere.",
      features: ["Touch Optimized", "Cross-platform", "Offline Capable"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ]

  return (
    <section id="features" className="aceternity-bg py-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="aceternity-badge inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="aceternity-pulse-dot w-2 h-2 rounded-full mr-3"></span>
            <span className="relative z-10">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="aceternity-title">Built for </span>
            <span className="aceternity-title-accent">Performance</span>
          </h2>
          <p className="aceternity-subtitle text-xl lg:text-2xl max-w-4xl mx-auto">
            Everything you need to extract, clean, and export data from any website. 
            Enterprise-grade tools designed for developers and built for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="aceternity-visual-card rounded-2xl p-8 group cursor-default"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                <div className="text-white relative z-10">
                  {feature.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="aceternity-subtitle text-base mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm aceternity-value-prop group/item">
                    <svg className="aceternity-check-icon w-4 h-4 mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Technical Specifications */}
        <div className="aceternity-visual-card rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="aceternity-title">Technical </span>
              <span className="aceternity-title-accent">Specifications</span>
            </h3>
            <p className="aceternity-subtitle text-lg lg:text-xl">Built for performance, reliability, and scale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div className="text-center group cursor-default">
              <div className="aceternity-stat-number text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                1000+
              </div>
              <div className="aceternity-stat-label font-medium">Pages per minute</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="text-center group cursor-default">
              <div className="aceternity-stat-number text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                99.5%
              </div>
              <div className="aceternity-stat-label font-medium">Extraction accuracy</div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="text-center group cursor-default">
              <div className="aceternity-stat-number text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                99.9%
              </div>
              <div className="aceternity-stat-label font-medium">Uptime guarantee</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="text-center group cursor-default">
              <div className="aceternity-stat-number text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                24/7
              </div>
              <div className="aceternity-stat-label font-medium">Support available</div>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
