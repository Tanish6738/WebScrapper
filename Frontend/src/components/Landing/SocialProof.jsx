import React from 'react'

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Data Analyst",
      company: "TechCorp Analytics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "WebScrapper transformed our entire research workflow. We can now serve 3x more clients with the same team. The AI-powered data cleaning saves us hours every day.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director", 
      company: "GrowthHack Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "The ROI is incredible. We've automated our competitor analysis and now catch market opportunities 10x faster. Best investment we've made this year.",
      rating: 5,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Thompson",
      role: "Research Lead",
      company: "InsightPro Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "From 40 hours of manual work to automated insights in minutes. WebScrapper didn't just save time - it revolutionized how we approach data collection.",
      rating: 5,
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  const clientLogos = [
    { name: "Microsoft", gradient: "from-blue-500 to-blue-600" },
    { name: "Amazon", gradient: "from-orange-500 to-yellow-500" },
    { name: "Google", gradient: "from-red-500 to-yellow-500" },
    { name: "Salesforce", gradient: "from-blue-400 to-blue-600" },
    { name: "Shopify", gradient: "from-green-500 to-green-600" },
    { name: "Slack", gradient: "from-purple-500 to-purple-600" }
  ]

  const stats = [
    { number: "10,000+", label: "Happy Customers", gradient: "from-blue-400 to-cyan-400" },
    { number: "500M+", label: "Data Points Extracted", gradient: "from-green-400 to-emerald-400" },
    { number: "99.9%", label: "Uptime SLA", gradient: "from-purple-400 to-pink-400" },
    { number: "24/7", label: "Support Available", gradient: "from-orange-400 to-red-400" }
  ]

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: "🛡️",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "ISO 27001", 
      description: "Information Security",
      icon: "🔐",
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection",
      icon: "🇪🇺",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "CCPA Compliant",
      description: "Privacy Rights",
      icon: "🗽",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const reviews = [
    {
      platform: "G2",
      rating: 4.8,
      reviewCount: 1247,
      badge: "High Performer",
      gradient: "from-orange-500 to-red-500"
    },
    {
      platform: "Capterra",
      rating: 4.9,
      reviewCount: 892,
      badge: "Best Value",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      platform: "TrustPilot", 
      rating: 4.7,
      reviewCount: 2156,
      badge: "Excellent",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="aceternity-bg py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trusted By Section */}
        <div className="text-center mb-20">
          <div className="aceternity-badge inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="aceternity-pulse-dot w-2 h-2 rounded-full mr-3"></span>
            <span className="relative z-10">Trusted by Industry Leaders</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-12">
            <span className="aceternity-title">Powering Innovation at </span>
            <span className="aceternity-title-accent">Global Scale</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center group cursor-default">
                <div className={`bg-gradient-to-r ${client.gradient} bg-clip-text text-transparent font-bold text-lg transition-all duration-300 group-hover:scale-110`}>
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className={`text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110`}>
                {stat.number}
              </div>
              <div className="aceternity-stat-label font-medium">{stat.label}</div>
              <div className={`w-12 h-1 bg-gradient-to-r ${stat.gradient} mx-auto mt-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Customer Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="aceternity-title">What Our </span>
              <span className="aceternity-title-accent">Customers Say</span>
            </h3>
            <p className="aceternity-subtitle text-lg lg:text-xl">
              Don't just take our word for it - see what industry leaders are saying
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="aceternity-visual-card rounded-2xl p-8 group relative overflow-hidden">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <svg key={starIndex} className="w-5 h-5 text-yellow-400 transition-all duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="aceternity-subtitle text-base mb-8 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 border-2 border-white/20 transition-all duration-300 group-hover:border-cyan-400/50"
                      />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-40`}></div>
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm aceternity-text-secondary">{testimonial.role}</div>
                      <div className={`text-sm font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Review Platforms */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="aceternity-title">Rated </span>
              <span className="aceternity-title-accent">Excellent</span>
              <span className="aceternity-title"> Everywhere</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="aceternity-visual-card rounded-2xl p-8 text-center group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${review.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{review.platform}</div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg 
                        key={starIndex} 
                        className={`w-6 h-6 transition-all duration-300 hover:scale-125 ${starIndex < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{review.rating}/5</div>
                  <div className="text-sm aceternity-text-secondary mb-4">{review.reviewCount} reviews</div>
                  <div className={`inline-block bg-gradient-to-r ${review.gradient} text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg`}>
                    {review.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Security & Compliance */}
        <div className="aceternity-visual-card rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="aceternity-title">Enterprise-Grade </span>
              <span className="aceternity-title-accent">Security</span>
            </h3>
            <p className="aceternity-subtitle text-lg lg:text-xl">
              Your data security is our top priority. We maintain the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
            {certifications.map((cert, index) => (
              <div key={index} className="aceternity-visual-card rounded-2xl p-6 text-center group cursor-default">
                <div className="text-4xl mb-4 transition-all duration-300 group-hover:scale-125">{cert.icon}</div>
                <div className="font-bold text-white text-sm mb-2 group-hover:text-cyan-400 transition-colors duration-300">{cert.name}</div>
                <div className="text-xs aceternity-text-secondary">{cert.description}</div>
                <div className={`w-8 h-1 bg-gradient-to-r ${cert.gradient} mx-auto mt-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center relative z-10">
            <p className="aceternity-subtitle text-sm">
              <span className="font-semibold text-cyan-400">Security Features:</span> End-to-end encryption, 
              Regular security audits, 24/7 monitoring, Secure data centers, 
              Role-based access control
            </p>
          </div>
        </div>

        {/* Enhanced Media Mentions */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-12">
            <span className="aceternity-title">Featured In</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["TechCrunch", "Forbes", "VentureBeat", "Product Hunt", "Hacker News"].map((media, index) => (
              <div key={index} className="aceternity-text-secondary font-bold text-lg transition-all duration-300 hover:text-cyan-400 hover:scale-110 cursor-default">
                {media}
              </div>
            ))}
          </div>        </div>
      </div>
    </section>
  )
}

export default SocialProof
