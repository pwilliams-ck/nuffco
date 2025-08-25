import { Package, Clock, DollarSign, Zap, Sparkles, CheckCircle, Settings, Rocket, Crown, Building, BarChart, Users, MessageCircle, Phone, Mail, Calendar } from "lucide-react";
import { BrutalistBackground } from "@/components/brutalist-background";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16 relative">
      <BrutalistBackground density="heavy" />
      {/* Neo-Brutalist Hero Section */}
      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10">
        <div className="border-4 border-black dark:border-white bg-purple-400 dark:bg-cyan-600 p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 relative">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 border-4 border-black dark:border-white bg-yellow-400 dark:bg-orange-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mr-6">
              <Package className="h-16 w-16 text-black dark:text-white" />
            </div>
            <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-pink-600 p-6">
              <h1 className="text-5xl font-black text-black dark:text-white mb-2 uppercase tracking-wider">Full Communications Suite</h1>
              <div className="flex items-center justify-center">
                <div className="border-2 border-black dark:border-white bg-orange-500 p-1 mr-2">
                  <Crown className="h-6 w-6 text-black dark:text-white" />
                </div>
                <div className="border-2 border-black dark:border-white bg-red-400 dark:bg-blue-600 p-2">
                  <span className="text-lg font-black text-black dark:text-white uppercase tracking-wider">ENTERPRISE SOLUTION</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-4 border-black dark:border-white bg-cyan-400 dark:bg-green-600 p-6 mb-6">
            <p className="text-2xl font-black text-black dark:text-white uppercase tracking-wide leading-tight">
              The ultimate AI-powered communications platform - everything you need in one unified system
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="border-3 border-black dark:border-white bg-green-400 dark:bg-purple-600 p-4 flex items-center">
              <div className="border-2 border-black dark:border-white bg-yellow-500 p-1 mr-2">
                <Sparkles className="h-6 w-6 text-black dark:text-white" />
              </div>
              <span className="text-xl font-black text-black dark:text-white uppercase tracking-wider">
                Perfect for larger businesses, franchises, and enterprise clients!
              </span>
              <div className="border-2 border-black dark:border-white bg-yellow-500 p-1 ml-2">
                <Sparkles className="h-6 w-6 text-black dark:text-white" />
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-red-500 border-4 border-black dark:border-white transform rotate-45"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-500 border-3 border-black dark:border-white"></div>
          <div className="absolute top-4 right-20 w-8 h-8 bg-blue-500 border-2 border-black dark:border-white transform rotate-45"></div>
        </div>
      </div>

      {/* Neo-Brutalist All Services Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10">
        <div className="border-4 border-black dark:border-white bg-orange-400 dark:bg-purple-600 p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative">
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-lime-500 border-3 border-black dark:border-white transform rotate-45"></div>
          <h2 className="text-3xl font-black text-black dark:text-white text-center uppercase tracking-wider">Everything Included</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-4 border-black dark:border-white bg-cyan-400 dark:bg-pink-600 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 relative">
            <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 w-fit mx-auto mb-4">
              <MessageCircle className="h-10 w-10 text-black dark:text-white" />
            </div>
            <div className="border-3 border-black dark:border-white bg-yellow-400 dark:bg-orange-600 p-3 mb-3">
              <h3 className="font-black text-lg text-black dark:text-white uppercase tracking-wide">Chat Widget</h3>
            </div>
            <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-2">
              <p className="text-sm font-bold text-black dark:text-white uppercase">AI website chat support</p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-500 border-2 border-black dark:border-white"></div>
          </div>
          <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-blue-600 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 relative">
            <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 w-fit mx-auto mb-4">
              <Phone className="h-10 w-10 text-black dark:text-white" />
            </div>
            <div className="border-3 border-black dark:border-white bg-purple-400 dark:bg-cyan-600 p-3 mb-3">
              <h3 className="font-black text-lg text-black dark:text-white uppercase tracking-wide">Phone System</h3>
            </div>
            <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-2">
              <p className="text-sm font-bold text-black dark:text-white uppercase">Voice calls & SMS handling</p>
            </div>
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-orange-500 border-2 border-black dark:border-white transform rotate-45"></div>
          </div>
          <div className="border-4 border-black dark:border-white bg-pink-400 dark:bg-green-600 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 relative">
            <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 w-fit mx-auto mb-4">
              <Mail className="h-10 w-10 text-black dark:text-white" />
            </div>
            <div className="border-3 border-black dark:border-white bg-green-400 dark:bg-purple-600 p-3 mb-3">
              <h3 className="font-black text-lg text-black dark:text-white uppercase tracking-wide">Email Automation</h3>
            </div>
            <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-2">
              <p className="text-sm font-bold text-black dark:text-white uppercase">Intelligent email responses</p>
            </div>
            <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 border-2 border-black dark:border-white transform rotate-45"></div>
          </div>
          <div className="border-4 border-black dark:border-white bg-yellow-400 dark:bg-red-600 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 relative">
            <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 w-fit mx-auto mb-4">
              <Calendar className="h-10 w-10 text-black dark:text-white" />
            </div>
            <div className="border-3 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-3 mb-3">
              <h3 className="font-black text-lg text-black dark:text-white uppercase tracking-wide">Booking System</h3>
            </div>
            <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-2">
              <p className="text-sm font-bold text-black dark:text-white uppercase">Smart appointment scheduling</p>
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 border-2 border-black dark:border-white"></div>
          </div>
        </div>
      </div>

      {/* Neo-Brutalist Content Sections */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Description & Timeline Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Neo-Brutalist Enterprise Features */}
            <div className="border-4 border-black dark:border-white bg-green-400 dark:bg-red-600 p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 border-3 border-black dark:border-white transform rotate-45"></div>
              <div className="flex items-center mb-6">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mr-4">
                  <Crown className="h-8 w-8 text-black dark:text-white" />
                </div>
                <div className="border-3 border-black dark:border-white bg-yellow-400 dark:bg-blue-600 p-3">
                  <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-wide">Enterprise Features</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-start">
                    <div className="border-2 border-black dark:border-white bg-blue-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <BarChart className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <p className="text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                      Advanced analytics and reporting dashboard
                    </p>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-start">
                    <div className="border-2 border-black dark:border-white bg-green-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <Building className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <p className="text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                      Multi-location and franchise support
                    </p>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-start">
                    <div className="border-2 border-black dark:border-white bg-purple-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <Users className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <p className="text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                      Team management and role-based access
                    </p>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-start">
                    <div className="border-2 border-black dark:border-white bg-orange-500 p-1 mr-3 mt-1 flex-shrink-0">
                      <Settings className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <p className="text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                      Custom integrations and white-label options
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neo-Brutalist Timeline Section */}
            <div className="border-4 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] relative">
              <div className="absolute -bottom-4 -left-4 w-10 h-16 bg-blue-500 border-3 border-black dark:border-white"></div>
              <div className="flex items-center mb-6">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mr-4">
                  <Clock className="h-8 w-8 text-black dark:text-white" />
                </div>
                <div className="border-3 border-black dark:border-white bg-pink-400 dark:bg-purple-600 p-3">
                  <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-wide">Enterprise Implementation</h2>
                </div>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-blue-500 p-2 mr-4">
                      <Settings className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Planning & architecture: 2-3 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Custom solution planning and system design</p>
                    </div>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-purple-500 p-2 mr-4">
                      <Rocket className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Core development & integration: 12-18 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Building your complete communications hub with all integrations</p>
                    </div>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-green-500 p-2 mr-4">
                      <Zap className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Testing & optimization: 4-5 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Enterprise-grade quality assurance and performance tuning</p>
                    </div>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-orange-500 p-2 mr-4">
                      <CheckCircle className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Training & deployment: 2-4 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Team training and comprehensive go-live support</p>
                    </div>
                  </div>
                </div>
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4">
                  <div className="flex items-center">
                    <div className="border-2 border-black dark:border-white bg-cyan-500 p-2 mr-4">
                      <Users className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-black text-black dark:text-white uppercase tracking-wide">Post-launch optimization: 2 weeks</p>
                      <p className="text-sm font-bold text-black dark:text-white">Fine-tuning based on real-world usage</p>
                    </div>
                  </div>
                </div>
                <div className="border-4 border-black dark:border-white bg-yellow-400 dark:bg-red-600 p-6 mt-6">
                  <div className="flex items-center justify-center mb-2">
                    <div className="border-2 border-black dark:border-white bg-orange-500 p-1 mr-3">
                      <Crown className="h-8 w-8 text-black dark:text-white" />
                    </div>
                    <p className="font-black text-2xl text-black dark:text-white uppercase tracking-wide">
                      Total: Ready in 22-28 weeks*
                    </p>
                  </div>
                  <div className="border-3 border-black dark:border-white bg-red-400 dark:bg-purple-600 p-3 mt-3">
                    <p className="text-xs font-black text-black dark:text-white text-center uppercase tracking-wide">
                      Timeline may be subject to delays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neo-Brutalist Pricing Section */}
          <div className="lg:col-span-1">
            <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-pink-600 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] h-fit sticky top-8 relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-500 border-4 border-black dark:border-white transform rotate-45"></div>
              <div className="flex items-center justify-center mb-6">
                <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mr-4">
                  <DollarSign className="h-8 w-8 text-black dark:text-white" />
                </div>
                <div className="border-3 border-black dark:border-white bg-orange-400 dark:bg-cyan-600 p-3">
                  <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-wide">Enterprise Investment</h2>
                </div>
              </div>
              <div className="space-y-6 text-center">
                <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex items-center justify-center mb-4">
                    <div className="border-2 border-black dark:border-white bg-yellow-500 p-2 mr-2">
                      <Crown className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div className="border-2 border-black dark:border-white bg-purple-400 dark:bg-green-600 p-2">
                      <p className="font-black text-xl text-black dark:text-white uppercase">Enterprise Setup</p>
                    </div>
                  </div>
                  <div className="border-4 border-black dark:border-white bg-red-400 dark:bg-blue-600 p-4 mb-3">
                    <p className="text-4xl font-black text-black dark:text-white">$9,999</p>
                  </div>
                  <div className="border-2 border-black dark:border-white bg-gray-200 dark:bg-gray-800 p-2">
                    <p className="text-sm font-bold text-black dark:text-white uppercase">One-time investment</p>
                  </div>
                </div>
                
                <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative">
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-cyan-500 border-3 border-black dark:border-white"></div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="border-2 border-black dark:border-white bg-orange-500 p-2 mr-2">
                      <Zap className="h-6 w-6 text-black dark:text-white" />
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-400 dark:bg-purple-600 p-2">
                      <p className="font-black text-xl text-black dark:text-white uppercase">Monthly Platform</p>
                    </div>
                  </div>
                  <div className="border-4 border-black dark:border-white bg-yellow-400 dark:bg-red-600 p-4 mb-4">
                    <p className="text-5xl font-black text-black dark:text-white">$1,499</p>
                    <p className="text-sm font-black text-black dark:text-white uppercase">/month</p>
                  </div>
                  
                  <div className="text-left space-y-2 text-sm">
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">All 4 AI services included</span>
                      </div>
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <Crown className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Priority enterprise support</span>
                      </div>
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Custom integrations</span>
                      </div>
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <BarChart className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Advanced analytics</span>
                      </div>
                    </div>
                    <div className="border-2 border-black dark:border-white bg-green-200 dark:bg-green-800 p-2">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 text-black dark:text-white mr-2" />
                        <span className="font-bold text-black dark:text-white">Multi-location support</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-3 border-black dark:border-white bg-purple-200 dark:bg-blue-800 p-4 text-sm space-y-2">
                  <p className="font-black text-black dark:text-white uppercase text-center">
                    Enterprise pricing available for large deployments
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="border-2 border-black dark:border-white bg-yellow-500 p-1 mr-2">
                      <Sparkles className="h-4 w-4 text-black dark:text-white" />
                    </div>
                    <p className="font-bold text-black dark:text-white uppercase">
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