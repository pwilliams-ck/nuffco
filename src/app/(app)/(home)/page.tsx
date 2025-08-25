"use client";
import Link from "next/link";
import { 
  Check, 
  Clock, 
  Shield, 
  Star,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  Calendar,
  Zap,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Home() {
  const products = [
    {
      name: "Live Chat",
      price: 299,
      originalPrice: 599,
      savings: "Save $300",
      timeline: "Live in 5 days",
      href: "/chat-widget",
      icon: MessageSquare,
      popular: true,
      features: [
        "24/7 AI-powered responses",
        "Instant customer support",
        "99.9% uptime guarantee",
        "Unlimited conversations"
      ],
      spotsLeft: 3
    },
    {
      name: "Phone AI",
      price: 125,
      originalPrice: 250,
      savings: "Save $125",
      timeline: "Live in 2 weeks",
      href: "/phone-interaction",
      icon: Phone,
      features: [
        "Natural voice conversations",
        "Call routing & screening",
        "Appointment booking",
        "CRM integration"
      ],
      spotsLeft: 7
    },
    {
      name: "Email Automation",
      price: 100,
      originalPrice: 200,
      savings: "Save $100",
      timeline: "Live in 1 week",
      href: "/email-automation",
      icon: Mail,
      features: [
        "Smart email responses",
        "Lead nurturing flows",
        "Personalization at scale",
        "Analytics dashboard"
      ],
      spotsLeft: 5
    },
    {
      name: "Booking System",
      price: 150,
      originalPrice: 300,
      savings: "Save $150",
      timeline: "Live in 3 weeks",
      href: "/booking-appointments",
      icon: Calendar,
      features: [
        "Smart scheduling",
        "Payment processing",
        "Reminder automation",
        "Calendar sync"
      ],
      spotsLeft: 4
    },
    {
      name: "Complete Suite",
      price: 375,
      originalPrice: 1000,
      savings: "Save $625!",
      timeline: "Full setup in 4 weeks",
      href: "/communications-suite",
      icon: Zap,
      bestValue: true,
      features: [
        "Everything included",
        "Priority support",
        "Custom integrations",
        "Dedicated success manager"
      ],
      spotsLeft: 2
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Dallas",
      text: "Our response time went from hours to seconds. Customer satisfaction up 47% in just 2 months.",
      rating: 5,
      revenue: "+$32K/month"
    },
    {
      name: "Marcus Rodriguez",
      role: "Owner, Rodriguez Law Firm",
      text: "The AI handles 80% of initial consultations. I've recovered 15 hours per week.",
      rating: 5,
      time: "15 hrs/week saved"
    },
    {
      name: "Jennifer Wu",
      role: "Director, Wellness Center",
      text: "Booking no-shows dropped 73%. The ROI was immediate.",
      rating: 5,
      metric: "73% fewer no-shows"
    }
  ];

  const stats = [
    { value: "2.3M+", label: "Messages Handled" },
    { value: "47%", label: "Avg Revenue Increase" },
    { value: "< 2s", label: "Response Time" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen">
      {/* Professional Announcement Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-3 text-center border-b border-slate-800">
        <p className="text-sm font-medium">
          Special Offer: Get started today and save 50% on your first 3 months
        </p>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trusted by 500+ Dallas Businesses
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Stop Losing $2,500+/Month <br />
              to Missed Customer Messages
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Your competitors respond in seconds. You&apos;re taking hours. 
              <span className="font-semibold text-slate-900 dark:text-white"> We&apos;ll fix that in 5 days or less.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold shadow-lg">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold">
                Watch 2-Min Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-green-500" />
                Setup in 5 minutes
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-green-500" />
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dallas Businesses Are Already Winning
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {testimonial.revenue || testimonial.time || testimonial.metric}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products with Urgency */}
      <section className="py-20" id="our-products">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Growth Plan</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Join 500+ Dallas businesses already ahead of you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={i} 
                  className={`relative p-6 ${
                    product.bestValue 
                      ? 'border-2 border-blue-500 shadow-xl scale-105' 
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {product.bestValue && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white">
                      BEST VALUE - SAVE $2,500
                    </Badge>
                  )}
                  {product.popular && (
                    <Badge className="absolute -top-3 right-4 bg-orange-500 text-white">
                      MOST POPULAR
                    </Badge>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold">${product.price}</span>
                      <span className="text-slate-500 line-through">${product.originalPrice}</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {product.savings}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">per month</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Badge variant="outline" className="w-full justify-center py-2 border-orange-300 text-orange-700 dark:border-orange-700 dark:text-orange-400">
                      <Clock className="h-3 w-3 mr-1" />
                      {product.timeline}
                    </Badge>
                    
                    <Badge variant="outline" className="w-full justify-center py-2 border-red-300 text-red-700 dark:border-red-700 dark:text-red-400">
                      Only {product.spotsLeft} spots left this month
                    </Badge>

                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                    >
                      <Link href={product.href}>
                        Get Started <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900 rounded-full mb-6">
            <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            If you don&apos;t see measurable results in 30 days, we&apos;ll refund every penny. 
            No questions asked. That&apos;s how confident we are.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-4 bg-white dark:bg-slate-800">
              <Users className="h-8 w-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">500+ Happy Clients</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Join Dallas&apos;s fastest-growing businesses
              </p>
            </Card>
            <Card className="p-4 bg-white dark:bg-slate-800">
              <Award className="h-8 w-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Industry Leader</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                #1 rated AI solution in North Texas
              </p>
            </Card>
            <Card className="p-4 bg-white dark:bg-slate-800">
              <Clock className="h-8 w-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">5-Day Setup</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Fastest implementation guaranteed
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your Competitors Are Already Using AI
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Every day you wait, you&apos;re losing customers to businesses that respond instantly.
            Start your free trial now and see results in 5 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
              Schedule Demo Call
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}