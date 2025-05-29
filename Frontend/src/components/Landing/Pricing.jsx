import React, { useState } from 'react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, annual: 0 },
      features: [
        "100 scrapes per month",
        "Basic data cleaning",
        "CSV & JSON export",
        "Community support",
        "Single user account"
      ],
      limitations: [
        "No API access",
        "No priority support",
        "Basic features only"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: { monthly: 49, annual: 490 },
      features: [
        "Unlimited scraping",
        "Advanced data cleaning",
        "All export formats",
        "API access",
        "Priority email support",
        "Team collaboration (5 users)",
        "Custom data formatting",
        "Scheduled scraping"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: { monthly: "Custom", annual: "Custom" },
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantees",
        "Unlimited users",
        "White-label options",
        "On-premise deployment",
        "Advanced security features",
        "Training & onboarding"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  const faqs = [
    {
      question: "What happens if I exceed my scraping limit?",
      answer: "For the Free plan, scraping will be paused until the next month. Professional users get overage billing at $0.10 per additional scrape. Enterprise plans include unlimited scraping."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your account will remain active until the end of your billing period."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes! Professional plan comes with a 14-day free trial with full access to all features. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund, no questions asked."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can change your plan at any time. Upgrades are prorated and take effect immediately. Downgrades take effect at the next billing cycle."
    }
  ]

  const getPrice = (plan) => {
    if (typeof plan.price.monthly === 'string') return plan.price.monthly
    return isAnnual ? plan.price.annual / 12 : plan.price.monthly
  }

  const getSavings = (plan) => {
    if (typeof plan.price.monthly === 'string') return null
    return plan.price.monthly * 12 - plan.price.annual
  }

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-medium">
              ✨ Transparent Pricing
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
              Simple, Transparent
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-shift">
              Pricing
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose the plan that fits your needs. Start free, upgrade when you're ready.
            All plans include our 30-day money-back guarantee.
          </p>
          
          {/* Animated Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 p-2 bg-gray-800/50 border border-gray-700 rounded-lg backdrop-blur-sm w-fit mx-auto">
            <span className={`text-sm transition-all duration-300 ${!isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm transition-all duration-300 ${isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-gradient-to-r from-green-500 to-emerald-400 text-white text-xs px-3 py-1 rounded-full font-medium animate-bounce">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                plan.popular ? 'scale-105 z-10' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Card Background with Gradient Border */}
              <div className={`relative rounded-2xl p-[2px] bg-gradient-to-b ${plan.gradient} ${
                plan.popular ? 'animate-pulse' : ''
              }`}>
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <span className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg animate-shimmer`}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Floating Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} p-3 mb-6 transform transition-transform duration-300 ${
                    hoveredPlan === index ? 'rotate-12 scale-110' : ''
                  }`}>
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {plan.name === 'Free' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                      {plan.name === 'Professional' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )}
                      {plan.name === 'Enterprise' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
                      )}
                    </svg>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    {/* Animated Price */}
                    <div className="mb-2">
                      <span className={`text-4xl font-bold transition-all duration-300 ${
                        hoveredPlan === index 
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}` 
                          : 'text-white'
                      }`}>
                        {typeof getPrice(plan) === 'string' ? getPrice(plan) : `$${getPrice(plan)}`}
                      </span>
                      {typeof getPrice(plan) !== 'string' && (
                        <span className="text-gray-400">/month</span>
                      )}
                    </div>
                    
                    {isAnnual && getSavings(plan) && (
                      <div className="text-sm text-green-400 font-medium animate-pulse">
                        Save ${getSavings(plan)} per year
                      </div>
                    )}
                  </div>

                  {/* CTA Button with Hover Effects */}
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 mb-8 group-hover:shadow-lg ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-blue-500/25 text-white`
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600'
                    } transform group-hover:scale-105`}
                  >
                    <span className="flex items-center justify-center">
                      {plan.cta}
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                  {/* Features List */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-3 flex items-center">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.gradient} mr-2`}></span>
                        Included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start group/item">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110`}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-medium text-white mb-3 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
                          Limitations:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-start">
                              <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${plan.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>        {/* Enhanced ROI Calculator */}
        <div className="relative group">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-sm font-medium">
                  📊 ROI Calculator
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Calculate Your ROI</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">See how much time and money WebScrapper can save your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group/stat">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 animate-pulse">40 hours</div>
                <div className="text-sm text-gray-400">Saved per week vs manual methods</div>
              </div>
              
              <div className="text-center group/stat">
                <div className="bg-gradient-to-br from-green-500 to-emerald-400 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2 animate-pulse">$8,000</div>
                <div className="text-sm text-gray-400">Monthly savings (at $50/hour)</div>
              </div>
              
              <div className="text-center group/stat">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 animate-pulse">16,000%</div>
                <div className="text-sm text-gray-400">ROI on Professional plan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 text-sm font-medium">
                ❓ FAQ
              </span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-lg text-gray-300">Got questions? We have answers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{faq.question}</h4>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-300 text-sm leading-relaxed border-t border-gray-800 pt-3">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Money Back Guarantee */}
        <div className="relative group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
          
          <div className="relative text-center p-8 bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-3xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                30-Day Money-Back Guarantee
              </span>
            </h3>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Try WebScrapper risk-free. If you're not completely satisfied within 30 days, 
              we'll refund your money, no questions asked.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>Instant Refund</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>No Questions Asked</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
