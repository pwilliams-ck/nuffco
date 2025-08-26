"use client";
import {
  MessageCircle,
  Star,
  Shield,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Phone,
  Award,
  Quote,
} from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section - Conversion Focused */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-700 dark:via-blue-800 dark:to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="h-4 w-4 mr-2" />
              LIMITED TIME: Only 12 spots left this month
            </div>

            {/* Main Headline - Pain Point Focused */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Losing Customers to
              <span className="text-yellow-400 dark:text-yellow-300 block">
                Unanswered Questions
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your website into a 24/7 sales machine with our AI chat
              widget that converts visitors into customers while you sleep
            </p>

            {/* ROI Highlight */}
            <div className="bg-white bg-opacity-15 dark:bg-white dark:bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto border border-white border-opacity-20">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-black dark:text-black mr-3" />
                <span className="text-2xl font-bold text-black">
                  Average ROI: 4,200%
                </span>
              </div>
              <p className="text-black">
                Our clients typically see $42 in revenue for every $1 invested
              </p>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 font-semibold text-white px-8 py-4 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-200 min-w-[250px]">
                Start Free Trial - Then $75/month
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 dark:hover:bg-slate-100 dark:hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
                See Live Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>1,000+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by 1,000+ Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100">
              See what our clients are saying about their results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="h-8 w-8 text-gray-300 dark:text-gray-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-100 mb-4 italic">
                &quot;Our customer inquiries increased by 340% and conversion
                rates jumped from 2% to 8.5%. The ROI was immediate.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Jennifer Davis
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-200">
                    CEO, TechFlow Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="h-8 w-8 text-gray-300 dark:text-gray-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-100 mb-4 italic">
                &quot;We recovered $127,000 in potential lost sales in just 3
                months. The chat widget pays for itself every single day.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MR
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Michael Rodriguez
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-200">
                    Director, E-commerce Plus
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="h-8 w-8 text-gray-300 dark:text-gray-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-100 mb-4 italic">
                &quot;Customer satisfaction scores improved 45%. Our team now
                focuses on complex issues while AI handles the routine
                questions.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  SK
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Sarah Kim
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-200">
                    VP Customer Success, Growth Corp
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-100 mb-8">
              Certified and trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 dark:opacity-80">
              <div className="flex items-center text-gray-700 dark:text-gray-100">
                <Shield className="h-8 w-8 mr-2" />
                <span className="font-semibold">SOC 2 Certified</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-100">
                <Award className="h-8 w-8 mr-2" />
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-100">
                <CheckCircle className="h-8 w-8 mr-2" />
                <span className="font-semibold">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - ROI Focused */}
      <div className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Smart Businesses Choose Our Chat Widget
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Stop letting potential customers slip away. Start converting more
              visitors into paying customers today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                340% More Inquiries
              </h3>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                Capture leads 24/7 when your sales team isn&apos;t available.
                Never miss another potential customer.
              </p>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  Average: +$6,000 monthly revenue
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Instant Response Time
              </h3>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                Respond to customer questions in under 2 seconds. Convert
                impatient visitors before they leave.
              </p>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  78% higher conversion rates
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Reduce Support Costs
              </h3>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                Handle 80% of common questions automatically. Free up your team
                for high-value tasks.
              </p>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  Save $1,280/month in staff costs
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Perfect Brand Match
              </h3>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                Seamlessly integrates with your website design. Looks like it
                was built just for you.
              </p>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  Zero design work needed
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Smart Escalation
              </h3>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                AI knows when to hand off to humans. Complex issues get routed
                to your team instantly.
              </p>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  95% customer satisfaction
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                Bank-level encryption and compliance. Your customer data is
                always protected.
              </p>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  SOC 2 &amp; GDPR compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section - Urgency & Scarcity */}
      <div className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Clock className="h-4 w-4 mr-2" />
              FREE TRIAL AVAILABLE
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Start Free Trial - Then Just $75/month
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100">
              Try it free for 30 days. Regular price $75/month.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-bl-2xl font-bold">
              SAVE $2,400/YEAR
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Everything You Need to Start Converting
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 dark:text-yellow-300 mr-3" />
                    <span>24/7 AI chat widget installation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 dark:text-yellow-300 mr-3" />
                    <span>Up to 1,000 conversations/month</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 dark:text-yellow-300 mr-3" />
                    <span>Custom branding &amp; design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 dark:text-yellow-300 mr-3" />
                    <span>Smart escalation to your team</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 dark:text-yellow-300 mr-3" />
                    <span>Real-time analytics dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 dark:text-yellow-300 mr-3" />
                    <span>Priority support &amp; training</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-10 dark:bg-white dark:bg-opacity-5 rounded-xl p-6 mb-6">
                  <div className="text-sm text-yellow-400 dark:text-yellow-300 font-semibold mb-2">
                    FLASH SALE PRICE
                  </div>
                  <div className="text-5xl text-black font-bold mb-2">$75</div>
                  <div className="text-lg text-black opacity-75">per month</div>
                  <div className="text-sm text-black line-through opacity-60 mt-2">
                    Regular: $200/month
                  </div>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 mb-4">
                  Secure Your Spot Now
                </button>

                <div className="text-sm opacity-75">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    Only 8 spots left this month
                  </div>
                  <div>30-day money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-100 mb-4">
              Setup fee waived (normally $499) • Additional conversations at
              $0.15 each
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-200">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Secure checkout
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No long-term contract
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              100% Risk-Free 30-Day Guarantee
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-100 mb-6 max-w-2xl mx-auto">
              Try our chat widget for 30 days. If you don&apos;t see an increase
              in customer inquiries and conversions, we&apos;ll refund every
              penny. No questions asked.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Results Guaranteed
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-100">
                  See measurable improvement or get your money back
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  No Questions Asked
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-100">
                  Simple cancellation process, no hidden fees
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Full Refund
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-100">
                  Get back every cent if you&apos;re not satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="h-4 w-4 mr-2" />
            URGENT: Only 8 spots remaining
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don&apos;t Let Another Customer Slip Away
          </h2>

          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Every minute you wait, potential customers are leaving your website
            without buying. Start converting them today with our proven AI chat
            widget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black px-12 py-5 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-200 min-w-[300px]">
              YES, I Want More Customers Now!
            </button>
          </div>

          <div className="text-white space-y-2">
            <div className="flex items-center justify-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Setup completed in 1-3 weeks</span>
            </div>
            <div className="flex items-center justify-center">
              <Award className="h-5 w-5 mr-2" />
              <span>Cancel anytime, no penalties</span>
            </div>
          </div>

          <div className="mt-8 text-yellow-400 dark:text-yellow-300 font-semibold">
            <p>⚠️ Flash sale price expires in 48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
