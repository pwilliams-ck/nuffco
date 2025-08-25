import { MessageCircle, Clock, DollarSign, Zap, Sparkles, CheckCircle, Settings, Rocket } from "lucide-react";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg mr-4">
              <MessageCircle className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Chat Widget</h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Transform your website with AI-powered customer support that works 24/7
          </p>
          <div className="flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
              Our fastest and most cost-effective solution!
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
                <Zap className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What You Get</h2>
              </div>
              <div className="space-y-4 text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  Embed our AI-powered chat widget directly into your existing website with zero hassle
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  Seamless integration with your current design - it looks like it was always there
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  24/7 instant responses for your customers, with smart escalation to your team
                </p>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Implementation Timeline</h2>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Setup: 4-6 hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Initial configuration and integration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Sparkles className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Customization: 1-2 days</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Brand matching and feature tuning</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Testing & Launch: 3 days</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quality assurance and go-live</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-center">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                    <p className="font-bold text-xl text-gray-900 dark:text-white">
                      Total: Ready in 1-3 weeks*
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
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800 h-fit sticky top-8">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-purple-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Investment</h2>
              </div>
              <div className="space-y-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-center mb-2">
                    <Rocket className="h-6 w-6 text-orange-500 mr-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">Setup Fee</p>
                  </div>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">$499</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">One-time only</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-purple-500">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">Monthly Service</p>
                  </div>
                  <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">$299</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">/month</p>
                  
                  <div className="text-left space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Up to 1,000 conversations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">24/7 AI support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Custom branding</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm space-y-2">
                  <p className="text-gray-600 dark:text-gray-400">
                    Additional conversations at $0.15 each
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

