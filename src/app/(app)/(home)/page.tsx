"use client";
import Link from "next/link";
import { BrutalistBackground } from "@/components/brutalist-background";
import {
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Package,
  MapPin,
  Heart,
  Zap,
  Sparkles,
} from "lucide-react";
export default function Home() {
  // const trpc = useTRPC();
  // const { data } = useQuery(trpc.auth.session.queryOptions());
  const products = [
    {
      name: "Chat Widget",
      price: "$299/month",
      timeline: "1-3 weeks*",
      disclaimer: "Timeline may be subject to delays",
      href: "/chat-widget",
      icon: MessageCircle,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Phone Interaction",
      price: "$499/month",
      timeline: "4-8 weeks*",
      disclaimer: "Timeline may be subject to delays",
      href: "/phone-interaction",
      icon: Phone,
      iconColor: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      name: "Email Automation",
      price: "$399/month",
      timeline: "4-8 weeks*",
      disclaimer: "Timeline may be subject to delays",
      href: "/email-automation",
      icon: Mail,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      name: "Booking",
      price: "$599/month",
      timeline: "12-18 weeks*",
      disclaimer: "Timeline may be subject to delays",
      href: "/booking-appointments",
      icon: Calendar,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      name: "Full Suite",
      price: "$1,499/month",
      timeline: "22-28 weeks*",
      disclaimer: "Timeline may be subject to delays",
      href: "/communications-suite",
      icon: Package,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
  ];
  return (
    <div className="text-center pt-8 relative">
      <BrutalistBackground density="chaos" />
      {/* Neo-Brutalist Hero Section */}
      <div className="mb-12 px-6">
        <div className="max-w-4xl mx-auto relative">
          <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-purple-600 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
            <h1 className="text-5xl font-black mb-4 text-black dark:text-white tracking-tight">
              aihelpd
            </h1>
            <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-4 inline-block">
              <p className="text-xl font-bold text-black dark:text-white uppercase tracking-wide">
                AI AUTOMATED SOLUTIONS
              </p>
            </div>
          </div>
          {/* Decorative geometric elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 border-2 border-black dark:border-white"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 border-2 border-black dark:border-white"></div>
        </div>
      </div>

      {/* <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Session:</h2>
        <pre className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
          {JSON.stringify(data?.user, null, 2)}
        </pre>
      </div> */}
      <div className="max-w-6xl mx-auto px-6" id="our-products">
        {/* Neo-Brutalist Section Header */}
        <div className="mb-8 relative">
          <div className="border-4 border-black dark:border-white bg-yellow-400 dark:bg-blue-600 p-4 inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
            <h2 className="text-3xl font-black text-black dark:text-white uppercase tracking-wider">
              Our Products
            </h2>
          </div>
          <div className="absolute top-0 -right-2 w-4 h-4 bg-red-500 border-2 border-black dark:border-white"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const brutalistColors = [
              { bg: 'bg-cyan-400 dark:bg-pink-600', accent: 'bg-purple-500' },
              { bg: 'bg-lime-400 dark:bg-orange-600', accent: 'bg-blue-600' },
              { bg: 'bg-pink-400 dark:bg-green-600', accent: 'bg-yellow-500' },
              { bg: 'bg-orange-400 dark:bg-cyan-600', accent: 'bg-red-500' },
              { bg: 'bg-purple-400 dark:bg-lime-600', accent: 'bg-green-500' }
            ];
            const colorScheme = brutalistColors[index % brutalistColors.length];
            
            return (
              <Link key={index} href={product.href}>
                <div
                  className={`border-4 border-black dark:border-white p-6 text-left cursor-pointer transform transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 ${colorScheme.bg} relative overflow-hidden`}
                >
                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-12 h-12 ${colorScheme.accent} border-l-4 border-b-4 border-black dark:border-white`}></div>
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div
                      className={`p-3 border-3 border-black dark:border-white bg-white dark:bg-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mr-4`}
                    >
                      <IconComponent
                        className={`h-8 w-8 text-black dark:text-white`}
                      />
                    </div>
                    <h3 className="font-black text-xl text-black dark:text-white uppercase tracking-wide">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 relative z-10">
                    <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                      <p className="text-sm text-black dark:text-white font-bold flex items-center uppercase tracking-wide">
                        <Zap className="h-4 w-4 mr-2" />
                        {product.timeline}
                      </p>
                    </div>
                    
                    {product.disclaimer && (
                      <div className="border-2 border-black dark:border-white bg-red-200 dark:bg-red-800 p-2">
                        <p className="text-xs text-black dark:text-white font-bold flex items-center uppercase">
                          <Sparkles className="h-3 w-3 mr-1" />
                          {product.disclaimer}
                        </p>
                      </div>
                    )}
                    
                    <div className="border-3 border-black dark:border-white bg-black dark:bg-white p-4 text-center">
                      <p className="font-black text-2xl text-white dark:text-black">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Neo-Brutalist Community Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="relative">
          {/* Main brutal container */}
          <div className="border-4 border-black dark:border-white bg-orange-400 dark:bg-green-600 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300">
            
            {/* Header section */}
            <div className="flex items-center justify-center mb-8">
              <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mr-4">
                <MapPin className="h-12 w-12 text-black dark:text-white" />
              </div>
              <div className="border-4 border-black dark:border-white bg-pink-400 dark:bg-cyan-600 p-4">
                <h2 className="text-3xl font-black text-black dark:text-white uppercase tracking-wider text-center">
                  North Dallas & Beyond
                </h2>
              </div>
            </div>
            
            {/* Content grid */}
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Community Card */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 border-2 border-black dark:border-white"></div>
                <div className="flex items-start mb-4">
                  <div className="border-2 border-black dark:border-white bg-red-400 p-2 mr-3">
                    <Heart className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-black dark:text-white uppercase mb-2">Local Roots</h3>
                    <p className="text-sm text-black dark:text-white font-bold leading-tight">
                      Born and raised in North Dallas. I understand our community&apos;s unique challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mission Card */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 border-2 border-black dark:border-white"></div>
                <div className="flex items-start mb-4">
                  <div className="border-2 border-black dark:border-white bg-yellow-400 p-2 mr-3">
                    <Zap className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-black dark:text-white uppercase mb-2">Our Mission</h3>
                    <p className="text-sm text-black dark:text-white font-bold leading-tight">
                      Make us all happier through AI-powered solutions that truly serve our community.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Support Card */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] relative">
                <div className="absolute -bottom-2 -right-2 w-10 h-4 bg-blue-500 border-2 border-black dark:border-white"></div>
                <div className="flex items-start mb-4">
                  <div className="border-2 border-black dark:border-white bg-blue-400 p-2 mr-3">
                    <Sparkles className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-black dark:text-white uppercase mb-2">Who We Serve</h3>
                    <p className="text-sm text-black dark:text-white font-bold leading-tight">
                      Local businesses, influencers, community leaders with good intentions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 text-center">
              <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-purple-600 p-4 inline-block transform hover:-translate-y-1 transition-all duration-200">
                <p className="font-black text-2xl text-black dark:text-white uppercase tracking-wide flex items-center justify-center">
                  <Sparkles className="h-6 w-6 mr-3" />
                  WE ARE HERE FOR YOU
                  <Sparkles className="h-6 w-6 ml-3" />
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500 border-4 border-black dark:border-white transform rotate-45"></div>
          <div className="absolute -bottom-6 -right-6 w-8 h-16 bg-cyan-400 border-4 border-black dark:border-white"></div>
          <div className="absolute top-1/2 -right-4 w-6 h-6 bg-pink-500 border-2 border-black dark:border-white rounded-full"></div>
        </div>
      </div>
      
      {/* Neo-Brutalist Footer Accent */}
      <div className="mt-20 mb-8 flex justify-center">
        <div className="border-4 border-black dark:border-white bg-gradient-to-r from-pink-400 to-orange-400 dark:from-purple-600 dark:to-blue-600 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div className="flex items-center space-x-4">
            <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-2">
              <Zap className="h-8 w-8 text-black dark:text-white" />
            </div>
            <div className="border-l-4 border-black dark:border-white pl-4">
              <p className="font-black text-xl text-black dark:text-white uppercase tracking-wide">
                Ready to Transform?
              </p>
              <p className="font-bold text-sm text-black dark:text-white uppercase">
                Choose Your Solution Above
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
