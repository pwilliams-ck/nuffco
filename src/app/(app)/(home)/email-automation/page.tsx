import { Mail, Clock, DollarSign, Zap, Sparkles, CheckCircle, Settings, Rocket, Brain, FileText, Target, Workflow } from "lucide-react";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg mr-4">
              <Mail className="h-12 w-12 text-purple-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Email Automation</h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Intelligent AI that reads, understands, and responds to your emails automatically
          </p>
          <div className="flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
              Never miss an email again - your AI assistant is always working!
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
                <Brain className="h-8 w-8 text-purple-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Email Intelligence</h2>
              </div>
              <div className="space-y-4 text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  Automatically reads and analyzes every incoming email with advanced AI understanding
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Target className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  Generates contextually perfect responses that match your business voice and tone
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <Workflow className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  Handles inquiries, appointments, support tickets, and complex customer questions
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  Learns from your existing email patterns to maintain brand consistency
                </p>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-8 border border-pink-200 dark:border-pink-800">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-pink-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Implementation Timeline</h2>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email system integration: 1 week</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connect to your existing email infrastructure</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Brain className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">AI training on your data: 2-3 weeks</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Custom learning from your historical emails</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Response template creation: 1 week</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Building your personalized response library</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Testing & refinement: 1 week</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quality assurance and fine-tuning</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-center">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
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
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800 h-fit sticky top-8">
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
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">$699</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">One-time only</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-purple-500">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">Monthly Service</p>
                  </div>
                  <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">$399</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">/month</p>
                  
                  <div className="text-left space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">2,000 automated responses</span>
                    </div>
                    <div className="flex items-center">
                      <Brain className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Advanced AI analysis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Brand voice matching</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm space-y-2">
                  <p className="text-gray-600 dark:text-gray-400">
                    Additional emails at $0.05 each
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