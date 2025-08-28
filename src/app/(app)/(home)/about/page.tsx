"use client";
import {
  MapPin,
  Users,
  Shield,
  Heart,
  Building2,
  Star,
  Crown,
  Briefcase,
  HandHeart,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              <MapPin className="h-3 w-3 mr-1" />
              Born &amp; Raised in North Dallas
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              About 
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> aihelpd</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Growing up in North Dallas gave me a deep appreciation for the entrepreneurial spirit and 
              community values that define the DFW metroplex. My mission is to bring cutting-edge AI 
              solutions to every corner of the Dallas-Fort Worth area.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Heart className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-blue-800 dark:text-blue-200 font-semibold">Our Mission</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Empowering DFW Businesses with AI
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From Plano to Richardson, from Addison to Carrollton, I&apos;ve seen firsthand how local 
                businesses are the backbone of our communities. Unlike big tech companies that treat you 
                like a number, I understand the unique challenges of running a business in Texas.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white font-semibold">D</div>
                  <div className="h-10 w-10 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white font-semibold">F</div>
                  <div className="h-10 w-10 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white font-semibold">W</div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div className="font-semibold">Serving all of DFW</div>
                  <div>with personalized care</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Why Choose Local?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">I&apos;m not just your AI consultant—I&apos;m your neighbor</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">Understanding of local business culture and needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">Personalized service you won&apos;t get from big tech</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">Committed to making DFW the most AI-forward region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Serving the Entire DFW Metroplex
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From downtown Dallas to suburban communities, we&apos;re here for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto h-12 w-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-lg font-bold text-red-900 dark:text-red-100">Dallas County</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Dallas, Plano, Richardson, Garland, Irving, Mesquite, Carrollton, Farmers Branch
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg font-bold text-blue-900 dark:text-blue-100">Collin County</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Frisco, McKinney, Allen, Wylie, Murphy, Lucas
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg font-bold text-green-900 dark:text-green-100">Tarrant County</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Fort Worth, Arlington, Grand Prairie, Euless, Bedford, Hurst
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg font-bold text-purple-900 dark:text-purple-100">Denton County</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Denton, Lewisville, Flower Mound, Coppell, The Colony
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work with businesses and individuals who share our values of community, growth, and positive impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold">Local Businesses</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  From family restaurants to growing startups, we help local businesses thrive with AI
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-slate-800 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-xl font-bold">Content Creators</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Influencers and content creators building their brand and engaging with audiences
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Crown className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold">Community Leaders</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Those making a positive impact and driving change in their communities
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-slate-800 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold">Service Providers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Lawyers, doctors, consultants, and other professionals serving their clients
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-red-50 to-white dark:from-red-900/20 dark:to-slate-800 border-red-200 dark:border-red-800 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <HandHeart className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl font-bold">Anyone with Good Intent</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  We&apos;re here to help anyone with positive goals and ethical practices succeed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900 dark:text-blue-100">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in lifting up our local DFW community through technology and supporting 
                  businesses that make our region stronger.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-900 dark:text-green-100">Good Intentions Only</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We only work with clients who have positive goals and ethical practices. 
                  Our technology should make the world better, not worse.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto h-16 w-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-red-900 dark:text-red-100">Happiness Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our ultimate goal is making everyone happier through better technology. 
                  Success means our clients and their customers are thriving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6">
            <TrendingUp className="h-8 w-8" />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl mb-8 opacity-95">
            Let&apos;s make the DFW area the most AI-forward region in the country—one happy customer at a time. 
            Whether you&apos;re in downtown Dallas, the growing suburbs of Frisco, or the historic streets of Fort Worth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              Schedule a Call
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mt-8 text-sm opacity-75">
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              No credit card required
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Local Dallas support
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              30-day guarantee
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;