import React from 'react'

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Data Analyst",
      company: "TechCorp Analytics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "WebScrapper transformed our entire research workflow. We can now serve 3x more clients with the same team. The AI-powered data cleaning saves us hours every day.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director", 
      company: "GrowthHack Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "The ROI is incredible. We've automated our competitor analysis and now catch market opportunities 10x faster. Best investment we've made this year.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      role: "Research Lead",
      company: "InsightPro Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "From 40 hours of manual work to automated insights in minutes. WebScrapper didn't just save time - it revolutionized how we approach data collection.",
      rating: 5
    }
  ]

  const clientLogos = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" }
  ]

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500M+", label: "Data Points Extracted" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support Available" }
  ]

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: "🛡️"
    },
    {
      name: "ISO 27001", 
      description: "Information Security",
      icon: "🔐"
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection",
      icon: "🇪🇺"
    },
    {
      name: "CCPA Compliant",
      description: "Privacy Rights",
      icon: "🗽"
    }
  ]

  const reviews = [
    {
      platform: "G2",
      rating: 4.8,
      reviewCount: 1247,
      badge: "High Performer"
    },
    {
      platform: "Capterra",
      rating: 4.9,
      reviewCount: 892,
      badge: "Best Value"
    },
    {
      platform: "TrustPilot", 
      rating: 4.7,
      reviewCount: 2156,
      badge: "Excellent"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-gray-400 font-bold text-lg">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - see what industry leaders are saying
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <svg key={starIndex} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rated Excellent Across All Platforms
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
                <div className="text-lg font-semibold text-gray-900 mb-2">{review.platform}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg 
                      key={starIndex} 
                      className={`w-5 h-5 ${starIndex < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{review.rating}/5</div>
                <div className="text-sm text-gray-600 mb-2">{review.reviewCount} reviews</div>
                <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                  {review.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Compliance
            </h3>
            <p className="text-gray-600">
              Your data security is our top priority. We maintain the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="text-3xl mb-2">{cert.icon}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{cert.name}</div>
                <div className="text-xs text-gray-600">{cert.description}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Security Features:</span> End-to-end encryption, 
              Regular security audits, 24/7 monitoring, Secure data centers, 
              Role-based access control
            </p>
          </div>
        </div>

        {/* Media Mentions */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-bold text-lg">TechCrunch</div>
            <div className="text-gray-400 font-bold text-lg">Forbes</div>
            <div className="text-gray-400 font-bold text-lg">VentureBeat</div>
            <div className="text-gray-400 font-bold text-lg">Product Hunt</div>
            <div className="text-gray-400 font-bold text-lg">Hacker News</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
