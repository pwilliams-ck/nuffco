"use client";
import Link from "next/link";
import { Search, MapPin, Car, Home, Briefcase, Heart, Stethoscope, /* Users, */ ShoppingCart } from "lucide-react";
import { BrutalistBackground } from "@/components/brutalist-background";
import { useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const industries = [
    { name: "All Industries", icon: Briefcase, color: "bg-purple-500" },
    { name: "Automotive", icon: Car, color: "bg-red-500" },
    { name: "Commercial & Home", icon: Home, color: "bg-green-500" },
    { name: "DFW Locations", icon: MapPin, color: "bg-blue-500" },
    { name: "Law Services", icon: Briefcase, color: "bg-yellow-500" },
    { name: "Medical Services", icon: Stethoscope, color: "bg-pink-500" },
    { name: "Pet Services", icon: Heart, color: "bg-orange-500" },
    { name: "Sales Services", icon: ShoppingCart, color: "bg-cyan-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      <BrutalistBackground density="medium" />
      
      <div className="relative z-10 pt-8 pb-16">
        {/* Brutal Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-purple-600 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative">
            
            {/* Decorative corners */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 border-4 border-black dark:border-white transform rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 border-2 border-black dark:border-white"></div>
            
            <div className="text-center mb-8">
              <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 inline-block mb-6">
                <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-wider">
                  Find Local Services
                </h1>
              </div>
              <div className="border-2 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-4 inline-block">
                <p className="text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                  Discover Amazing Local Businesses in Your Area
                </p>
              </div>
            </div>

            {/* Brutal Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                <div className="flex items-center">
                  <div className="border-2 border-black dark:border-white bg-yellow-400 p-3 mr-4">
                    <Search className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Find local services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-black dark:text-white font-bold text-lg placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:outline-none border-0"
                  />
                  <div className="border-2 border-black dark:border-white bg-pink-400 dark:bg-green-600 p-3 ml-4 cursor-pointer hover:bg-purple-400 dark:hover:bg-blue-600 transition-colors">
                    <span className="font-black text-black dark:text-white uppercase tracking-wide">Search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid - BRUTAL STYLE */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="border-4 border-black dark:border-white bg-orange-400 dark:bg-blue-600 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mb-8">
            <div className="border-3 border-black dark:border-white bg-yellow-400 dark:bg-cyan-600 p-4 inline-block">
              <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-wider">Browse Industries</h2>
            </div>
            <div className="absolute top-0 -right-2 w-6 h-6 bg-green-500 border-2 border-black dark:border-white transform rotate-45"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              const brutalistBgs = [
                'bg-cyan-400 dark:bg-pink-600',
                'bg-lime-400 dark:bg-purple-600', 
                'bg-pink-400 dark:bg-green-600',
                'bg-orange-400 dark:bg-blue-600',
                'bg-purple-400 dark:bg-yellow-600',
                'bg-yellow-400 dark:bg-red-600',
                'bg-green-400 dark:bg-cyan-600',
                'bg-red-400 dark:bg-lime-600'
              ];
              const bgColor = brutalistBgs[index % brutalistBgs.length];
              
              return (
                <div
                  key={index}
                  className={`border-4 border-black dark:border-white p-4 cursor-pointer transform transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 ${bgColor} relative overflow-hidden block`}
                >
                  {/* Corner accent */}
                  <div className={`absolute -top-1 -right-1 w-6 h-6 ${industry.color} border-2 border-black dark:border-white`}></div>
                  
                  {industry.name === "All Industries" ? (
                    <Link href="/local-services">
                      <div className="text-center">
                        <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3 mb-3 inline-block">
                          <IconComponent className="h-6 w-6 text-black dark:text-white" />
                        </div>
                        <p className="font-black text-xs text-black dark:text-white uppercase tracking-wide leading-tight">
                          {industry.name}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <div className="text-center">
                      <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3 mb-3 inline-block">
                        <IconComponent className="h-6 w-6 text-black dark:text-white" />
                      </div>
                      <p className="font-black text-xs text-black dark:text-white uppercase tracking-wide leading-tight">
                        {industry.name}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>


        {/* Map Placeholder - BRUTAL STYLE */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div className="border-4 border-black dark:border-white bg-white dark:bg-gray-800 h-96 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden">
            {/* Map placeholder */}
            <div className="absolute inset-4 border-2 border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <div className="border-2 border-black dark:border-white bg-purple-400 dark:bg-lime-600 p-4 mb-4 inline-block">
                  <MapPin className="h-12 w-12 text-black dark:text-white" />
                </div>
                <div className="border-2 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-3">
                  <p className="font-black text-black dark:text-white uppercase tracking-wide">Map Loading...</p>
                </div>
              </div>
            </div>
            
            {/* Decorative map corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-red-500 border-2 border-black dark:border-white"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 border-2 border-black dark:border-white transform rotate-45"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 border-2 border-black dark:border-white"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 border-2 border-black dark:border-white transform rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;