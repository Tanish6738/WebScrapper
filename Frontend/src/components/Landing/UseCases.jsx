import React from 'react'

const UseCases = () => {
  const useCases = [
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Monitor competitor prices, track product availability, and analyze market trends.",
      examples: ["Price Comparison", "Product Reviews", "Inventory Tracking", "Market Analysis"],
      metrics: "Save 40+ hours/week on manual research"
    },
    {
      icon: "🏢",
      title: "Real Estate",
      description: "Extract property listings, market data, and investment opportunities automatically.",
      examples: ["Property Listings", "Price Trends", "Market Reports", "Investment Analysis"],
      metrics: "Process 1000+ listings in minutes"
    },
    {
      icon: "📈",
      title: "Marketing Agencies",
      description: "Generate leads, research competitors, and analyze content performance at scale.",
      examples: ["Lead Generation", "Content Research", "Social Media Data", "SEO Analysis"],
      metrics: "Generate 10x more qualified leads"
    },
    {
      icon: "💰",
      title: "Financial Services",
      description: "Monitor market data, news sentiment, and financial indicators in real-time.",
      examples: ["Stock Prices", "News Analysis", "Economic Data", "Risk Assessment"],
      metrics: "Real-time market insights"
    },
    {
      icon: "🎓",
      title: "Academic Research",
      description: "Collect research data, academic papers, and statistical information efficiently.",
      examples: ["Research Papers", "Statistical Data", "Survey Results", "Citation Analysis"],
      metrics: "Accelerate research by 80%"
    },
    {
      icon: "🚀",
      title: "Startups",
      description: "Validate markets, analyze competitors, and gather customer insights quickly.",
      examples: ["Market Validation", "Competitor Analysis", "Customer Reviews", "Trend Analysis"],
      metrics: "Validate ideas in days, not months"
    }
  ]

  const transformationStories = [
    {
      company: "TechCorp Analytics",
      industry: "Marketing Agency",
      challenge: "Spending 30+ hours weekly manually collecting competitor data",
      solution: "Automated data collection from 500+ sources",
      result: "Reduced research time by 90%, increased client capacity by 300%",
      quote: "WebScrapper transformed our entire research workflow. We can now serve 3x more clients with the same team."
    },
    {
      company: "PropertyMax Solutions",
      industry: "Real Estate",
      challenge: "Missing market opportunities due to slow manual property research",
      solution: "Real-time property listing monitoring across 50+ platforms",
      result: "Identified investment opportunities 10x faster",
      quote: "We closed 5 major deals in the first month that we would have missed otherwise."
    },
    {
      company: "RetailEdge Inc",
      industry: "E-commerce",
      challenge: "Competitors constantly undercutting prices without notice",
      solution: "Automated price monitoring and alert system",
      result: "Maintained competitive pricing, increased revenue by 25%",
      quote: "Our pricing strategy is now data-driven and always competitive."
    }
  ]

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, see how different industries 
            leverage WebScrapper to gain competitive advantages.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {useCase.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {useCase.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {example}
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm font-medium text-blue-600">
                  {useCase.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Transformation Stories
            </h3>
            <p className="text-lg text-gray-600">
              Real results from real customers who transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transformationStories.map((story, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-blue-500"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {story.company}
                  </h4>
                  <div className="text-sm text-blue-600 font-medium">
                    {story.industry}
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Challenge:</div>
                    <div className="text-sm text-gray-600">{story.challenge}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Solution:</div>
                    <div className="text-sm text-gray-600">{story.solution}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Result:</div>
                    <div className="text-sm font-semibold text-green-600">{story.result}</div>
                  </div>
                </div>
                
                <blockquote className="text-sm text-gray-600 italic border-l-3 border-gray-200 pl-4">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before - Problems */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Before WebScrapper</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Manual copy-paste consuming 40+ hours weekly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Unreliable tools breaking frequently</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Technical expertise required for setup</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Inconsistent data formats</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Missing market opportunities</span>
                </li>
              </ul>
            </div>

            {/* After - Solutions */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">With WebScrapper</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Automated extraction in minutes, not hours</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">99.9% uptime with enterprise reliability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">No coding required - anyone can use it</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Clean, structured data every time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Real-time insights and competitive advantage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases
