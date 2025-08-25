import { Phone, Clock, DollarSign, Zap, Sparkles, CheckCircle, Rocket, MessageSquare, Users, Brain } from "lucide-react";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg mr-4">
              <Phone className="h-12 w-12 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Phone Interaction</h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            AI-powered phone system for voice calls and SMS that feels completely natural
          </p>
          <div className="flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-lg font-semibold text-green-600 dark:text-green-400">
              Human-like conversations that your customers will love!
            </span>
            <Sparkles className="h-5 w-5 text-yellow-500 ml-2" />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Description Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Communication Hub</h2>
              </div>
              <div className="space-y-4 text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  AI handles voice calls with natural, human-like conversations your customers will trust
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <MessageSquare className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  SMS text messaging for quick responses and instant customer support
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Users className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  Smart routing to the right department with seamless handoffs to your team
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  Handles appointment scheduling, FAQs, and message taking automatically
                </p>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Implementation Timeline</h2>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone number setup: 2-4 days</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Dedicated business line configuration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Brain className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">AI training: 1-2 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Custom training on your business knowledge</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Voice optimization: 1 week</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fine-tuning for natural conversations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Testing: 3-5 days</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quality assurance and final adjustments</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
                    <p className="font-bold text-xl text-gray-900 dark:text-white">
                      Total: Ready in 4-8 weeks*
                    </p>
                  </div>
                  <p className="text-xs text-orange-600 dark:text-orange-400 text-center mt-2 italic">
                    Timeline may be subject to delays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800 h-fit sticky top-8">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Investment</h2>
              </div>
              <div className="space-y-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-center mb-2">
                    <Rocket className="h-6 w-6 text-orange-500 mr-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">Setup Fee</p>
                  </div>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">$799</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">One-time only</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-green-500">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">Monthly Service</p>
                  </div>
                  <p className="text-4xl font-bold text-green-600 dark:text-green-400">$499</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">/month</p>
                  
                  <div className="text-left space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">500 minutes of voice calls</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">1,000 SMS messages</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Dedicated phone number</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Natural voice AI</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm space-y-2">
                  <p className="text-gray-600 dark:text-gray-400">
                    Additional usage billed separately
                  </p>
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-yellow-500 mr-1" />
                    <p className="text-gray-500 dark:text-gray-500">
                      Multi-year discounts available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;