import { Phone, Clock, DollarSign, Shield, Star, CheckCircle, TrendingUp, Users, AlertTriangle, Award, Headphones, Timer, ArrowRight, Zap, Target, Building } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              URGENT: Every Missed Call Costs You Money
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Stop Losing $12,500+ Per Year to<br />
              <span className="text-yellow-300">Missed Phone Calls</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Studies show businesses lose an average of $15,500 annually from unanswered calls. 
              Our AI Phone Assistant answers every call, captures every lead, and converts visitors into customers 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-colors flex items-center">
                Get My AI Phone Assistant Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <div className="text-sm text-blue-200">
                ⚡ Limited Time: 50% Off Setup Fee - Only 12 Spots Left This Month
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-300" />
              <div className="font-semibold">100% Secure</div>
              <div className="text-sm text-blue-200">SOC2 Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <div className="font-semibold">Industry Leading</div>
              <div className="text-sm text-blue-200">99.9% Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 mx-auto mb-2 text-purple-300" />
              <div className="font-semibold">500+ Businesses</div>
              <div className="text-sm text-blue-200">Trust Our AI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-300" />
              <div className="font-semibold">300% ROI</div>
              <div className="text-sm text-blue-200">Average Return</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Hidden Cost of Missed Calls
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">27% of Calls Go Unanswered</h3>
                    <p className="text-gray-600 dark:text-gray-300">That&apos;s potential customers calling your competitors instead</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <DollarSign className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">$125 Average Customer Value Lost</h3>
                    <p className="text-gray-600 dark:text-gray-300">Each missed call represents lost revenue opportunity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">After Hours = No Sales</h3>
                    <p className="text-gray-600 dark:text-gray-300">60% of calls happen outside business hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Calculate Your Lost Revenue
              </h3>
              <div className="space-y-4 text-center">
                <div className="bg-blue-50 dark:bg-blue-900/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">25</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Missed calls per week</div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">×</div>
                <div className="bg-green-50 dark:bg-green-900/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600">$125</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average customer value</div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">=</div>
                <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border-2 border-red-200">
                  <div className="text-4xl font-bold text-red-600">$16,250</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Lost revenue per year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Turn Every Call Into Revenue
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our AI Phone Assistant works 24/7 to capture leads, book appointments, and grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Never Miss Another Call</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Answers every call in under 2 rings, 24/7/365. No more lost leads to voicemail.
              </p>
              <div className="bg-green-50 dark:bg-green-900/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-green-700 dark:text-green-400">Call Answer Rate</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Qualify & Convert Leads</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Intelligently qualifies prospects and books appointments directly into your calendar.
              </p>
              <div className="bg-green-50 dark:bg-green-900/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">73%</div>
                <div className="text-sm text-green-700 dark:text-green-400">Conversion Increase</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Human-Like Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced AI that sounds natural and understands complex customer questions.
              </p>
              <div className="bg-green-50 dark:bg-green-900/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-green-700 dark:text-green-400">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-400">4.9/5 from 500+ reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                &quot;We went from missing 30% of calls to answering 100%. Our appointment bookings increased by 85% in the first month alone.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <Building className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Medical Practice Owner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                &quot;The AI handles our overflow calls perfectly. It&apos;s like having a full-time receptionist for a fraction of the cost.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <Building className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Mike Rodriguez</div>
                  <div className="text-sm text-gray-500">Law Firm Partner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                &quot;ROI was immediate. We recovered our investment in the first month just from previously missed calls.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <Building className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Lisa Chen</div>
                  <div className="text-sm text-gray-500">HVAC Company CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Timer className="h-4 w-4 mr-2" />
              LIMITED TIME OFFER - 50% OFF SETUP
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Start Capturing Every Lead Today
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-4">
              <div className="text-lg font-semibold">Professional AI Phone Assistant</div>
              <div className="text-sm opacity-90">Everything you need to never miss a call</div>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-left">
                    <div className="text-sm text-gray-500 line-through">Setup: $400</div>
                    <div className="text-2xl font-bold text-green-600">Setup: $200</div>
                    <div className="text-sm text-green-600">Save $200 Today!</div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">+</div>
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">$125</div>
                    <div className="text-lg text-gray-600 dark:text-gray-400">/month</div>
                  </div>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/50 rounded-lg p-3 mb-6">
                  <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                    💰 Typical ROI: 300%+ in first 3 months
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What&apos;s Included:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">500 AI voice call minutes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">1,000 SMS messages</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Dedicated business phone number</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Custom AI training for your business</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">AI Capabilities:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Appointment scheduling</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Lead qualification & capture</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">FAQ answering</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Human handoff when needed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center">
                  Get Started Now - Save $200
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    30-Day Money Back Guarantee
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    Setup in 2-4 Weeks
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ⚠️ Only 12 setup slots available this month. Offer expires in 7 days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency/CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Don&apos;t Lose Another $1,250+ This Month
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Every day you wait is money walking out the door. Join 500+ businesses already capturing every lead.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="text-3xl font-bold mb-2">⏰ Limited Time Offer Ends Soon</div>
            <div className="text-lg text-red-200">Only 12 setup slots remaining this month</div>
          </div>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center">
            Claim My Spot Now - Save $200
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <div className="mt-4 text-sm text-red-200">
            💪 30-Day Money Back Guarantee • 🔒 No Long-Term Contracts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;