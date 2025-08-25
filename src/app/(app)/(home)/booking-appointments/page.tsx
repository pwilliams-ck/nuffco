import { Calendar, Clock, DollarSign, Zap, Sparkles, CheckCircle, Settings, Rocket, Repeat, Bell, Globe, Workflow } from "lucide-react";
import { BrutalistBackground } from "@/components/brutalist-background";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16 relative">
      <BrutalistBackground density="heavy" />
      {/* Neo-Brutalist Hero Section */}
      <div className="max-w-5xl mx-auto px-6 mb-12 relative z-10">
        <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-purple-600 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 border-4 border-black dark:border-white bg-white dark:bg-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] mr-6">
              <Calendar className="h-12 w-12 text-black dark:text-white" />
            </div>
            <div className="border-4 border-black dark:border-white bg-orange-400 dark:bg-cyan-600 p-4">
              <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-wider">Booking Appointments</h1>
            </div>
          </div>
          <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-6 mb-4">
            <p className="text-xl font-bold text-black dark:text-white uppercase tracking-wide">
              Complete AI appointment system that manages your entire scheduling process automatically
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="border-2 border-black dark:border-white bg-yellow-400 dark:bg-pink-600 p-3 flex items-center">
              <Sparkles className="h-6 w-6 text-black dark:text-white mr-2" />
              <span className="text-lg font-black text-black dark:text-white uppercase tracking-wide">
                Perfect for service businesses - Never miss another booking!
              </span>
              <Sparkles className="h-6 w-6 text-black dark:text-white ml-2" />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 border-4 border-black dark:border-white transform rotate-45"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 border-2 border-black dark:border-white"></div>
        </div>
      </div>

      {/* Neo-Brutalist Content Sections */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Description Section */}
          <div className="lg:col-span-2">
            <div className="border-4 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mb-8 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 border-2 border-black dark:border-white transform rotate-45"></div>
              <div className="flex items-center mb-6">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mr-4">
                  <Workflow className="h-8 w-8 text-black dark:text-white" />
                </div>
                <div className="border-3 border-black dark:border-white bg-pink-400 dark:bg-yellow-600 p-3">
                  <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-wide">Smart Scheduling Hub</h2>
                </div>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <p className="text-lg font-bold text-black dark:text-white flex items-start">
                    <div className="border-2 border-black dark:border-white bg-blue-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <Calendar className="h-4 w-4 text-black dark:text-white" />
                    </div>
                    Complete integration with all major calendar platforms for seamless scheduling
                  </p>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <p className="text-lg font-bold text-black dark:text-white flex items-start">
                    <div className="border-2 border-black dark:border-white bg-green-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <Repeat className="h-4 w-4 text-black dark:text-white" />
                    </div>
                    Customers can book, reschedule, and cancel through multiple channels effortlessly
                  </p>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <p className="text-lg font-bold text-black dark:text-white flex items-start">
                    <div className="border-2 border-black dark:border-white bg-purple-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <Bell className="h-4 w-4 text-black dark:text-white" />
                    </div>
                    Automated reminders and follow-ups keep your schedule running smoothly
                  </p>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <p className="text-lg font-bold text-black dark:text-white flex items-start">
                    <div className="border-2 border-black dark:border-white bg-teal-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <Globe className="h-4 w-4 text-black dark:text-white" />
                    </div>
                    Smart time zone handling and real-time availability management
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="border-4 border-black dark:border-white bg-yellow-400 dark:bg-green-600 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative">
              <div className="absolute -bottom-2 -left-2 w-6 h-12 bg-blue-500 border-2 border-black dark:border-white"></div>
              <div className="flex items-center mb-6">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mr-4">
                  <Clock className="h-8 w-8 text-black dark:text-white" />
                </div>
                <div className="border-3 border-black dark:border-white bg-orange-400 dark:bg-purple-600 p-3">
                  <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-wide">Implementation Timeline</h2>
                </div>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-blue-500 p-2 mr-4">
                      <Calendar className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Calendar integration: 2-3 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Connect to Google, Outlook, Apple Calendar, and more</p>
                    </div>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-orange-500 p-2 mr-4">
                      <Settings className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Booking system development: 4-8 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Custom booking flows and business rules</p>
                    </div>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-purple-500 p-2 mr-4">
                      <Zap className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">AI training & optimization: 3-4 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Learning your booking patterns and preferences</p>
                    </div>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-green-500 p-2 mr-4">
                      <Rocket className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Multi-channel deployment: 3 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Website, phone, email, and social media integration</p>
                    </div>
                  </div>
                </div>
                <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-pink-600 p-4 mt-6">
                  <div className="flex items-center justify-center mb-2">
                    <div className="border-2 border-black dark:border-white bg-red-500 p-1 mr-2">
                      <Sparkles className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <p className="font-black text-xl text-black dark:text-white uppercase tracking-wide">
                      Total: Ready in 12-18 weeks*
                    </p>
                  </div>
                  <div className="border-2 border-black dark:border-white bg-orange-400 dark:bg-red-600 p-2">
                    <p className="text-xs font-black text-black dark:text-white text-center uppercase">
                      Timeline may be subject to delays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="lg:col-span-1">
            <div className="border-4 border-black dark:border-white bg-pink-400 dark:bg-blue-600 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] h-fit sticky top-8 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-500 border-3 border-black dark:border-white transform rotate-45"></div>
              <div className="flex items-center justify-center mb-6">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mr-4">
                  <DollarSign className="h-8 w-8 text-black dark:text-white" />
                </div>
                <div className="border-3 border-black dark:border-white bg-yellow-400 dark:bg-cyan-600 p-3">
                  <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-wide">Investment</h2>
                </div>
              </div>
              <div className="space-y-6 text-center">
                <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex items-center justify-center mb-4">
                    <div className="border-2 border-black dark:border-white bg-orange-500 p-2 mr-2">
                      <Rocket className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div className="border-2 border-black dark:border-white bg-purple-400 dark:bg-green-600 p-2">
                      <p className="font-black text-lg text-black dark:text-white uppercase">Setup Fee</p>
                    </div>
                  </div>
                  <div className="border-3 border-black dark:border-white bg-red-400 dark:bg-purple-600 p-4">
                    <p className="text-3xl font-black text-black dark:text-white">$1,299</p>
                  </div>
                  <div className="border-2 border-black dark:border-white bg-gray-200 dark:bg-gray-800 p-2 mt-2">
                    <p className="text-sm font-bold text-black dark:text-white uppercase">One-time only</p>
                  </div>
                </div>
                
                <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-lime-400 border-2 border-black dark:border-white"></div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="border-2 border-black dark:border-white bg-yellow-500 p-2 mr-2">
                      <Zap className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div className="border-2 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-2">
                      <p className="font-black text-lg text-black dark:text-white uppercase">Monthly Service</p>
                    </div>
                  </div>
                  <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-pink-600 p-4 mb-4">
                    <p className="text-4xl font-black text-black dark:text-white">$599</p>
                    <p className="text-sm font-black text-black dark:text-white uppercase">/month</p>
                  </div>
                  
                  <div className="text-left space-y-2 text-sm">
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Unlimited bookings</span>
                      </div>
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <Repeat className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Calendar sync</span>
                      </div>
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <Bell className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Automated reminders</span>
                      </div>
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Premium features</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-3 border-black dark:border-white bg-yellow-200 dark:bg-blue-800 p-4 text-sm space-y-2">
                  <p className="font-black text-black dark:text-white uppercase text-center">
                    Premium features included
                  </p>
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-black dark:text-white mr-1" />
                    <p className="font-bold text-black dark:text-white uppercase">
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