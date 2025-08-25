import { Calendar, Clock, DollarSign, Zap, Sparkles, CheckCircle, Settings, Rocket, Repeat, Bell, Globe, Workflow } from "lucide-react";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg mr-4">
              <Calendar className="h-12 w-12 text-orange-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Booking Appointments</h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Complete AI appointment system that manages your entire scheduling process automatically
          </p>
          <div className="flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-lg font-semibold text-orange-600 dark:text-orange-400">
              Perfect for service businesses - never miss another booking!
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
                <Workflow className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Scheduling Hub</h2>
              </div>
              <div className="space-y-4 text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Calendar className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  Complete integration with all major calendar platforms for seamless scheduling
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Repeat className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  Customers can book, reschedule, and cancel through multiple channels effortlessly
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Bell className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  Automated reminders and follow-ups keep your schedule running smoothly
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Globe className="h-6 w-6 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  Smart time zone handling and real-time availability management
                </p>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-8 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-amber-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Implementation Timeline</h2>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Calendar integration: 1-2 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connect to Google, Outlook, Apple Calendar, and more</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Booking system setup: 3-4 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Custom booking flows and business rules</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">AI training & testing: 2-3 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Learning your booking patterns and preferences</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Multi-channel deployment: 1-2 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Website, phone, email, and social media integration</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
                    <p className="font-bold text-xl text-gray-900 dark:text-white">
                      Total: Ready in 12-18 weeks*
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
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800 h-fit sticky top-8">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Investment</h2>
              </div>
              <div className="space-y-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-center mb-2">
                    <Rocket className="h-6 w-6 text-red-500 mr-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">Setup Fee</p>
                  </div>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">$1,299</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">One-time only</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-orange-500">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">Monthly Service</p>
                  </div>
                  <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">$599</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">/month</p>
                  
                  <div className="text-left space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Unlimited bookings</span>
                    </div>
                    <div className="flex items-center">
                      <Repeat className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Calendar sync</span>
                    </div>
                    <div className="flex items-center">
                      <Bell className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Automated reminders</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Premium features</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm space-y-2">
                  <p className="text-gray-600 dark:text-gray-400">
                    Premium features included
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