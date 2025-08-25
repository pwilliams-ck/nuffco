import { Package, Clock, DollarSign, Zap, Sparkles, CheckCircle, Settings, Rocket, Crown, Building, BarChart, Users, MessageCircle, Phone, Mail, Calendar } from "lucide-react";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-xl p-10 border-2 border-indigo-200 dark:border-indigo-800">
          <div className="flex items-center justify-center mb-6">
            <div className="p-5 rounded-full bg-white dark:bg-gray-800 shadow-xl mr-6">
              <Package className="h-16 w-16 text-indigo-500" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-2">Full Communications Suite</h1>
              <div className="flex items-center">
                <Crown className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">ENTERPRISE SOLUTION</span>
              </div>
            </div>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            The ultimate AI-powered communications platform - everything you need in one unified system
          </p>
          <div className="flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-yellow-500 mr-3" />
            <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
              Perfect for larger businesses, franchises, and enterprise clients!
            </span>
            <Sparkles className="h-6 w-6 text-yellow-500 ml-3" />
          </div>
        </div>
      </div>

      {/* All Services Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Everything Included</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <MessageCircle className="h-10 w-10 text-blue-500 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Chat Widget</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI website chat support</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <Phone className="h-10 w-10 text-green-500 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Phone System</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Voice calls & SMS handling</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <Mail className="h-10 w-10 text-purple-500 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Email Automation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Intelligent email responses</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
            <Calendar className="h-10 w-10 text-orange-500 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Booking System</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Smart appointment scheduling</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Description & Timeline Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enterprise Features */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-center mb-6">
                <Crown className="h-8 w-8 text-indigo-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <BarChart className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  Advanced analytics and reporting dashboard
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Building className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  Multi-location and franchise support
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Users className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  Team management and role-based access
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Settings className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  Custom integrations and white-label options
                </p>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-indigo-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Implementation</h2>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Planning & architecture: 2-3 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Custom solution planning and system design</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Core development & integration: 12-18 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Building your complete communications hub with all integrations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Testing & optimization: 4-5 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade quality assurance and performance tuning</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Training & deployment: 2-4 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Team training and comprehensive go-live support</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-teal-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Post-launch optimization: 2 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fine-tuning based on real-world usage</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mt-6">
                  <div className="flex items-center justify-center mb-2">
                    <Crown className="h-8 w-8 text-yellow-500 mr-3" />
                    <p className="font-black text-2xl text-gray-900 dark:text-white">
                      Total: Ready in 22-28 weeks*
                    </p>
                  </div>
                  <p className="text-xs text-orange-600 dark:text-orange-400 text-center italic">
                    Timeline may be subject to delays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-indigo-200 dark:border-indigo-800 h-fit sticky top-8">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-indigo-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Investment</h2>
              </div>
              <div className="space-y-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <Crown className="h-8 w-8 text-yellow-500 mr-2" />
                    <p className="font-bold text-xl text-gray-900 dark:text-white">Enterprise Setup</p>
                  </div>
                  <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">$9,999</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">One-time investment</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-3 border-indigo-500">
                  <div className="flex items-center justify-center mb-3">
                    <Zap className="h-8 w-8 text-yellow-500 mr-2" />
                    <p className="font-bold text-xl text-gray-900 dark:text-white">Monthly Platform</p>
                  </div>
                  <p className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">$1,499</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">/month</p>
                  
                  <div className="text-left space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">All 4 AI services included</span>
                    </div>
                    <div className="flex items-center">
                      <Crown className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Priority enterprise support</span>
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Custom integrations</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Advanced analytics</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Multi-location support</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm space-y-2">
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Enterprise pricing available for large deployments
                  </p>
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                    <p className="text-gray-500 dark:text-gray-500 font-semibold">
                      Significant multi-year discounts available
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