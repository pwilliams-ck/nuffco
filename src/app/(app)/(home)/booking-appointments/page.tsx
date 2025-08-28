import { CheckCircle, Star, Shield, Award, TrendingUp, Users, Phone, ArrowRight, Target } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <TrendingUp className="h-4 w-4 mr-2" />
              Limited Time: 50% Off Setup Fee - Only 7 Spots Left This Month
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Losing <span className="text-red-600">$50,000+</span> Per Year to No-Shows
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our AI booking system reduces no-shows by <strong className="text-blue-600">73%</strong> and increases revenue by <strong className="text-green-600">$4,200</strong> per month on average. Join 2,847+ service businesses already saving thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 flex items-center justify-center">
                Get Your Free ROI Analysis <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" /> Schedule Demo Call
              </button>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-green-600 mr-2" />
              <span className="font-semibold">BBB A+ Rated</span>
            </div>
            <div className="flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="font-semibold">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-semibold">2024 Tech Innovation Award</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by 2,847+ Service Businesses</h2>
            <p className="text-gray-600">See how our clients are saving thousands every month</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Cut our no-shows from 40% to just 8%. We&apos;re saving over $6,000 per month now. Best investment we&apos;ve ever made for our dental practice.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  DR
                </div>
                <div>
                  <p className="font-semibold">Dr. Sarah Rodriguez</p>
                  <p className="text-sm text-gray-500">Rodriguez Family Dentistry</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Increased our booking efficiency by 85%. No more phone tag with clients. The system pays for itself in the first month.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MJ
                </div>
                <div>
                  <p className="font-semibold">Mike Johnson</p>
                  <p className="text-sm text-gray-500">Elite Fitness Studio</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;ROI was immediate. We recovered $3,200 in lost appointments in just the first 30 days. Our clients love the convenience.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  AC
                </div>
                <div>
                  <p className="font-semibold">Amanda Chen</p>
                  <p className="text-sm text-gray-500">Serenity Spa & Wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Real Cost of No-Shows</h2>
            <p className="text-xl text-gray-600">Stop bleeding money from missed appointments</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-2xl font-bold text-red-700 mb-4">Without Our System:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Average no-show rate: <strong>25-40%</strong>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Lost revenue per month: <strong>$4,000-$8,000</strong>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Staff time wasted: <strong>15+ hours/week</strong>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Customer satisfaction: <strong>Declining</strong>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-2xl font-bold text-green-700 mb-4">With Our System:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    No-show rate reduced to: <strong>6-8%</strong>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Revenue recovery: <strong>$4,200+/month</strong>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Staff time saved: <strong>12+ hours/week</strong>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Customer satisfaction: <strong>95% rating</strong>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-lg font-bold text-green-800">
                    Average ROI: <span className="text-2xl">340%</span> in first 90 days
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg transition-all duration-200">
              Calculate My Potential Savings
            </button>
          </div>
        </div>
      </div>

      {/* Urgency Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full mb-6 font-bold text-lg">
            <Target className="h-5 w-5 mr-2" />
            FLASH SALE ENDS AUGUST 31ST
          </div>
          <h2 className="text-4xl font-bold mb-6">Don&apos;t Wait - Every Day Costs You Money</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-bold text-yellow-300">$275</div>
              <p>Average daily loss from no-shows</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-bold text-yellow-300">7</div>
              <p>Spots left this month</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-bold text-yellow-300">50%</div>
              <p>Discount on setup fee</p>
            </div>
          </div>
          <p className="text-xl mb-8">
            Join now and save <strong>$160</strong> on setup + get 30-day money-back guarantee
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-lg font-bold text-xl shadow-lg transition-all duration-200">
            Claim Your Spot Now - 50% Off
          </button>
        </div>
      </div>

      {/* Pricing Section with Guarantee */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment That Pays For Itself</h2>
            <p className="text-xl text-gray-600">Average payback period: 28 days</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full font-bold">
              LIMITED TIME: 50% OFF SETUP
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="text-center border-r border-gray-200 pr-8">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-400 line-through">$325</div>
                  <div className="text-5xl font-bold text-green-600">$165</div>
                  <div className="text-gray-600">One-time setup</div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">$150</div>
                  <div className="text-gray-600">per month</div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited bookings
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 AI support
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All integrations included
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Iron-Clad Guarantee
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>✓ 30-day money-back guarantee</li>
                    <li>✓ Reduce no-shows by 70% or full refund</li>
                    <li>✓ Free migration from current system</li>
                    <li>✓ Dedicated success manager</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-200">
                    Get Started - Save $160 Today
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-lg font-bold text-lg transition-all duration-200">
                    Schedule Free Consultation
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Average client saves $1,050/month • Setup in 2-3 weeks • No long-term contracts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Stop Losing Money to No-Shows?</h2>
          <p className="text-xl mb-8">
            Join 2,847+ successful service businesses. Get started in under 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 flex items-center justify-center">
              Start Free Trial - No Credit Card <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
            </button>
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-8 opacity-70">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>2,847+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;