import React from 'react'

const UseCases = () => {
  const useCases = [
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Monitor competitor prices, track product availability, and analyze market trends.",
      examples: ["Price Comparison", "Product Reviews", "Inventory Tracking", "Market Analysis"],
      metrics: "Save 40+ hours/week on manual research",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "🏢",
      title: "Real Estate",
      description: "Extract property listings, market data, and investment opportunities automatically.",
      examples: ["Property Listings", "Price Trends", "Market Reports", "Investment Analysis"],
      metrics: "Process 1000+ listings in minutes",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "📈",
      title: "Marketing Agencies",
      description: "Generate leads, research competitors, and analyze content performance at scale.",
      examples: ["Lead Generation", "Content Research", "Social Media Data", "SEO Analysis"],
      metrics: "Generate 10x more qualified leads",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💰",
      title: "Financial Services",
      description: "Monitor market data, news sentiment, and financial indicators in real-time.",
      examples: ["Stock Prices", "News Analysis", "Economic Data", "Risk Assessment"],
      metrics: "Real-time market insights",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🎓",
      title: "Academic Research",
      description: "Collect research data, academic papers, and statistical information efficiently.",
      examples: ["Research Papers", "Statistical Data", "Survey Results", "Citation Analysis"],
      metrics: "Accelerate research by 80%",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🚀",
      title: "Startups",
      description: "Validate markets, analyze competitors, and gather customer insights quickly.",
      examples: ["Market Validation", "Competitor Analysis", "Customer Reviews", "Trend Analysis"],
      metrics: "Validate ideas in days, not months",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  const transformationStories = [
    {
      company: "TechCorp Analytics",
      industry: "Marketing Agency",
      challenge: "Spending 30+ hours weekly manually collecting competitor data",
      solution: "Automated data collection from 500+ sources",
      result: "Reduced research time by 90%, increased client capacity by 300%",
      quote: "WebScrapper transformed our entire research workflow. We can now serve 3x more clients with the same team.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      company: "PropertyMax Solutions",
      industry: "Real Estate", 
      challenge: "Missing market opportunities due to slow manual property research",
      solution: "Real-time property listing monitoring across 50+ platforms",
      result: "Identified investment opportunities 10x faster",
      quote: "We closed 5 major deals in the first month that we would have missed otherwise.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      company: "RetailEdge Inc",
      industry: "E-commerce",
      challenge: "Competitors constantly undercutting prices without notice",
      solution: "Automated price monitoring and alert system",
      result: "Maintained competitive pricing, increased revenue by 25%",
      quote: "Our pricing strategy is now data-driven and always competitive.",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="use-cases" className="aceternity-bg py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="aceternity-badge inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="aceternity-pulse-dot w-2 h-2 rounded-full mr-3"></span>
            <span className="relative z-10">Trusted Across Industries</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="aceternity-title">Powering Every </span>
            <span className="aceternity-title-accent">Industry</span>
          </h2>
          <p className="aceternity-subtitle text-xl lg:text-2xl max-w-4xl mx-auto">
            From startups to Fortune 500 companies, see how different industries 
            leverage WebScrapper to gain competitive advantages and drive growth.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="aceternity-visual-card rounded-2xl p-8 group cursor-default transform transition-all duration-300 hover:scale-105"
            >
              {/* Icon with animated background */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${useCase.gradient} p-5 mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                <div className="text-2xl relative z-10">{useCase.icon}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {useCase.title}
              </h3>
              
              <p className="aceternity-subtitle text-base mb-6 leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {useCase.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="aceternity-value-prop flex items-center text-sm group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 transition-all duration-300 group-hover/item:scale-125"></div>
                    <span className="font-medium">{example}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className={`text-sm font-semibold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                  {useCase.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Stories */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="aceternity-title">Transformation </span>
              <span className="aceternity-title-accent">Stories</span>
            </h3>
            <p className="aceternity-subtitle text-lg lg:text-xl">
              Real results from real customers who transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transformationStories.map((story, index) => (
              <div 
                key={index}
                className="aceternity-visual-card rounded-2xl p-8 group relative overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${story.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {story.company}
                    </h4>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent`}>
                      {story.industry}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-red-400 mb-2">Challenge:</div>
                      <div className="text-sm text-gray-300">{story.challenge}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-400 mb-2">Solution:</div>
                      <div className="text-sm text-gray-300">{story.solution}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-400 mb-2">Result:</div>
                      <div className="text-sm font-semibold text-green-300">{story.result}</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-sm aceternity-subtitle italic border-l-3 border-cyan-400/50 pl-4 bg-white/5 p-4 rounded-r-lg">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Problem vs Solution */}
        <div className="aceternity-visual-card rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-green-500/10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Before - Problems */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Before WebScrapper</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Manual copy-paste consuming 40+ hours weekly",
                  "Unreliable tools breaking frequently",
                  "Technical expertise required for setup",
                  "Inconsistent data formats",
                  "Missing market opportunities"
                ].map((problem, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="aceternity-subtitle group-hover:text-gray-200 transition-colors duration-300">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After - Solutions */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">With WebScrapper</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Automated extraction in minutes, not hours",
                  "99.9% uptime with enterprise reliability",
                  "No coding required - anyone can use it",
                  "Clean, structured data every time",
                  "Real-time insights and competitive advantage"
                ].map((solution, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="aceternity-subtitle group-hover:text-gray-200 transition-colors duration-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>        </div>
      </div>
    </section>
  )
}

export default UseCases
