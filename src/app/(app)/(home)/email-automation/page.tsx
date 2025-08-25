"use client";

import {
  Mail,
  Clock,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Shield,
  Star,
  Phone,
  MessageSquare,
  AlertCircle,
  Timer,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Professional Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 border-0"
                >
                  <Zap className="h-3 w-3 mr-1" />
                  AI-Powered Solution
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200"
                >
                  <Timer className="h-3 w-3 mr-1" />
                  Limited Time Offer
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Never Miss a
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Lead{" "}
                </span>
                Again
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Our AI Email Automation responds to every inquiry in under 2
                minutes, 24/7. Turn missed opportunities into paying customers
                while you sleep.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg rounded-lg border-2 hover:bg-gray-50 dark:hover:bg-slate-800"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Book Demo Call
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white font-semibold">
                    B
                  </div>
                  <div className="h-10 w-10 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white font-semibold">
                    C
                  </div>
                  <div className="h-10 w-10 rounded-full bg-orange-600 border-2 border-white flex items-center justify-center text-white font-semibold">
                    +
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div className="font-semibold">500+ businesses</div>
                  <div>already saving time</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Auto-Responding
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <div className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        New Email Received
                      </div>
                      <div className="text-sm text-blue-700 dark:text-blue-200">
                        &quot;Hi, I&apos;m interested in your services...&quot;
                      </div>
                    </div>
                    <div className="text-center py-2">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium">
                        <Zap className="h-3 w-3 mr-1 text-yellow-500" />
                        AI Processing - 1.2 seconds
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <div className="text-sm font-semibold text-green-900 dark:text-green-100">
                        Personalized Response Sent
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-200">
                        &quot;Thank you for your interest! Based on your needs...&quot;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI and Benefits Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stop Losing Money to Missed Leads
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every missed email costs you customers. Our clients see immediate
              ROI from faster response times and higher conversion rates.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-b from-red-50 to-white dark:from-red-900/20 dark:to-slate-800 border-red-200 dark:border-red-800">
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-red-900 dark:text-red-100">
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  67%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  of leads never get a response
                </div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  $600
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  average value per lost lead
                </div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  24 hours
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  typical response time
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 border-blue-200 dark:border-blue-800 transform scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  of emails get responses
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  &lt; 2 min
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  average response time
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  always working
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-slate-800 border-green-200 dark:border-green-800">
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-900 dark:text-green-100">
                  Your Results
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  340%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  increase in lead conversion
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  $2,050
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  average monthly ROI
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  20+ hours
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  saved per week
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Calculate Your ROI
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof and Testimonials */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how our email automation has transformed businesses just like
              yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white dark:bg-slate-800 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                  &quot;We went from missing 60% of our leads to responding to every
                  single one. Our conversion rate jumped from 12% to 41% in just
                  2 months!&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mr-3">
                    JR
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Jennifer Rodriguez
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CEO, Martinez Legal Services
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                  &quot;The ROI was immediate. In our first month, we captured
                  $47,000 in leads that would have been lost. The system paid
                  for itself in week 2.&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold mr-3">
                    MK
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Michael Kim
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Owner, Premier Dental Group
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                  &quot;Our team was spending 3-4 hours daily on email. Now we focus
                  on high-value activities while AI handles the initial
                  responses perfectly.&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold mr-3">
                    SL
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Sarah Liu
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Director, TechFlow Consulting
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-12 opacity-60">
            <div className="text-gray-400 font-semibold">TRUSTED BY</div>
            <div className="h-8 flex items-center text-gray-400 font-bold">
              ACME CORP
            </div>
            <div className="h-8 flex items-center text-gray-400 font-bold">
              BETA LLC
            </div>
            <div className="h-8 flex items-center text-gray-400 font-bold">
              GAMMA INC
            </div>
            <div className="h-8 flex items-center text-gray-400 font-bold">
              DELTA CO
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges and Guarantees */}
      <section className="py-16 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">
                SOC 2 Compliant
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Enterprise-grade security
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">
                99.9% Uptime
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Guaranteed availability
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">
                30-Day Guarantee
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Full refund if not satisfied
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="h-16 w-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">
                24/7 Support
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Expert help when you need it
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency and Scarcity */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border-2 border-red-200 dark:border-red-800">
            <div className="flex items-center justify-center mb-6">
              <Badge
                variant="destructive"
                className="bg-red-600 text-white px-4 py-2 text-lg font-bold animate-pulse"
              >
                <Timer className="h-5 w-5 mr-2" />
                LIMITED TIME OFFER
              </Badge>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Don&apos;t Let Another Lead Slip Away
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We&apos;re only accepting <strong>50 new clients this month</strong> to
              ensure personalized setup and support. Once we&apos;re full, there&apos;s a
              3-month waitlist.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  38
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Spots Remaining
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  7 days
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Offer Expires
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  $50
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Setup Discount
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
            >
              <Zap className="h-6 w-6 mr-3" />
              Claim Your Spot Now
            </Button>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Setup normally $175 • Limited time: Only $125 • Save $50
            </p>
          </div>
        </div>
      </section>

      {/* Benefits-Focused Content */}
      <section className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Transforms Your Business
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stop worrying about missed opportunities. Focus on growing your
              business while AI handles every email perfectly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Never Lose Another Lead
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every single email gets a personalized response within 2
                    minutes. No more &quot;sorry for the delayed response&quot; - your
                    leads get immediate attention when their interest is
                    highest.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Triple Your Conversion Rate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fast, personalized responses convert 3x more leads into
                    customers. Our AI learns your business voice and responds
                    exactly how you would - but faster and more consistently.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Reclaim 20+ Hours Per Week
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Stop spending hours crafting email responses. Focus on
                    high-value activities like closing deals and growing your
                    business while AI handles the initial conversations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Maintain Your Brand Voice
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI learns from your existing emails to match your tone,
                    style, and expertise. Customers can&apos;t tell the difference -
                    they just love the fast, helpful responses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                What Your Customers Experience
              </h3>
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Customer emails at 11:47 PM
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    &quot;Hi, I&apos;m interested in your services for next month...&quot;
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Responded in 1 minute 23 seconds
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/50 rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Your AI responds
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    &quot;Thank you for your interest! I&apos;d love to help you with your
                    project. Based on your needs, here are a few options...&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              See It In Action - Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Redesigned Pricing Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Investment vs. Cost of Missed Leads
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The average business loses $600 per missed lead. With 10+ missed
              leads per month, you&apos;re losing $6,000+ while spending just
              $100/month saves you money from day one.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Cost of Doing Nothing */}
            <Card className="bg-gradient-to-b from-red-50 to-white dark:from-red-900/20 dark:to-slate-800 border-2 border-red-200 dark:border-red-800">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto h-16 w-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-red-900 dark:text-red-100">
                  Cost of Doing Nothing
                </CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300">
                  What you&apos;re losing every month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                    $6,000+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Lost revenue from missed leads
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      10 missed leads × $600
                    </span>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      $6,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Staff time on emails (40h × $25)
                    </span>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      $250
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Opportunity cost
                    </span>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      $1,250
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-gray-900 dark:text-white">
                        Total Monthly Loss
                      </span>
                      <span className="text-red-600 dark:text-red-400">
                        $7,500
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Solution Value */}
            <Card className="bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-slate-800 border-2 border-green-200 dark:border-green-800 relative transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-bold">
                  BEST VALUE
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <div className="mx-auto h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-900 dark:text-green-100">
                  AI Email Automation
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Turn costs into profit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                    Setup: $175
                  </div>
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    $100<span className="text-lg font-normal">/month</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    + $125 setup (save $50)
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Capture 10 additional leads × $600
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      +$6,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Save 40h staff time × $6
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      +$250
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Service cost
                    </span>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      -$100
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-gray-900 dark:text-white">
                        Net Monthly Profit
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        +$6,150
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                      Return on Investment
                    </div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      6,170%
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    2,000+ automated responses included
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Advanced AI learning and customization
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    24/7 support and monitoring
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    30-day money-back guarantee
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Start Saving Money Today
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Additional emails beyond 2,000/month: Only $0.05 each
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg rounded-lg border-2"
              >
                <Phone className="h-5 w-5 mr-2" />
                Schedule Strategy Call
              </Button>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get Started Risk-Free
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              No contracts • Cancel anytime • 30-day guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
