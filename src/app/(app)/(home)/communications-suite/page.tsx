import { Clock, Zap, CheckCircle, Settings, Crown, Building, BarChart, MessageCircle, Phone, Mail, Calendar, ArrowRight, Shield, Clock10, TrendingUp, Award, AlertCircle, Timer, Star } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center space-x-2">
          <Timer className="h-4 w-4" />
          <span className="text-sm font-semibold">LIMITED TIME: Only 3 enterprise spots remaining for 2024</span>
          <Timer className="h-4 w-4" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4 mr-2" />
            Premium Enterprise Solution
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Complete Communications
            <span className="block text-blue-600 dark:text-blue-400">Transformation Suite</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The all-in-one AI communications platform that replaces 4+ separate tools while delivering 
            <strong className="text-gray-900 dark:text-white"> 400% ROI in the first year</strong>
          </p>
          
          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-green-600 mb-2">$11,750</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Average annual savings vs separate tools</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Reduction in customer response time</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">White-glove enterprise support</div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-gray-50 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Everything You Need, Nothing You Don&apos;t</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Four powerful AI services, perfectly integrated</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Chat Widget</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Intelligent website chat with advanced contextual understanding</p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Value: $299/month</div>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone & SMS System</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Enterprise-grade voice and text message handling</p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Value: $225/month</div>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Automation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Smart email responses and workflow automation</p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Value: $150/month</div>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Booking</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">AI-powered appointment scheduling and management</p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Value: $100/month</div>
            </div>
          </div>
          
          {/* Value Comparison */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Individual Tools: <span className="line-through text-gray-500">$774/month</span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                Your Price: $375/month
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                <strong>Save $399/month ($4,788/year)</strong> with better integration and performance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI & Case Studies Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Proven Enterprise Results</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Real metrics from our enterprise clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-green-600">427% ROI</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">First year average</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                &quot;Replaced 5 tools, reduced staff workload by 60%, increased customer satisfaction to 94%&quot;
              </p>
              <div className="mt-4 text-xs text-gray-500">
                - Fortune 500 Retail Chain
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <Clock10 className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-blue-600">73%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Response time reduction</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                &quot;From 4 hours to 65 minutes average response time across all channels&quot;
              </p>
              <div className="mt-4 text-xs text-gray-500">
                - Multi-location Healthcare Group
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-purple-600">2.3x</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Lead conversion increase</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                &quot;AI qualification and nurturing increased our qualified leads by 130%&quot;
              </p>
              <div className="mt-4 text-xs text-gray-500">
                - Professional Services Firm
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Features Section */}
      <div className="bg-gray-50 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Enterprise-Grade Features</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Advanced Analytics Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Real-time insights, custom reports, and predictive analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Multi-Location Management</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Centralized control with location-specific customization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Enterprise Security & Compliance</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">SOC2, GDPR, HIPAA compliance with SSO integration</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Custom Integrations & API</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Connect with your existing tools and workflows</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Implementation Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">White-Glove Implementation</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Strategic Planning (2-3 weeks)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Dedicated solution architect designs your custom implementation</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Development & Integration (12-18 weeks)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Full platform build with your existing systems integration</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Testing & Training (4-6 weeks)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive testing and team training for smooth launch</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Launch & Optimization (4 weeks)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Go-live support with continuous optimization</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-blue-900 dark:text-blue-100">Total Timeline: 22-30 weeks</span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Dedicated project manager ensures on-time delivery and seamless transition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Enterprise Investment</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Premium solution with guaranteed ROI</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            {/* Urgency Notice */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-red-700 dark:text-red-300">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold">Limited Availability: Only 3 enterprise spots left for 2024</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Setup Investment */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Crown className="h-6 w-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Enterprise Setup</h3>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">$2,500</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">One-time investment</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Complete system architecture & design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Custom integrations & API development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Team training & documentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">White-glove migration support</span>
                  </div>
                </div>
              </div>
              
              {/* Monthly Platform */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-blue-500">
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Zap className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Monthly Platform</h3>
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-1">$375</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">/month</div>
                  <div className="text-xs text-green-600 font-medium mt-1">Save $399/month vs separate tools</div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">All 4 AI communication services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">24/7 enterprise support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">Advanced analytics & reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">Multi-location management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">Priority feature requests</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ROI Guarantee */}
            <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-2">ROI Guarantee</h3>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  If you don&apos;t see a 200%+ ROI within 12 months, we&apos;ll refund your setup fee
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
                <span>Schedule Enterprise Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                Secure your spot • No commitment required • 45-minute strategic session
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;