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
} from "lucide-react";
import { BrutalistBackground } from "@/components/brutalist-background";

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16 relative">
      <BrutalistBackground density="heavy" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Neo-Brutalist Page Title */}
        <div className="mb-12 relative">
          <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-purple-600 p-6 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
            <h1 className="text-5xl font-black text-black dark:text-white uppercase tracking-wider">
              About aihelpd
            </h1>
          </div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 border-2 border-black dark:border-white"></div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-yellow-400 border-2 border-black dark:border-white"></div>
        </div>

        {/* Main mission section - Neo-Brutalist */}
        <div className="border-4 border-black dark:border-white bg-cyan-400 dark:bg-pink-600 p-8 mb-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 relative">
          {/* Decorative corner elements */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 border-2 border-black dark:border-white"></div>
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-500 border-2 border-black dark:border-white"></div>
          
          <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4 mb-6 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <h2 className="text-3xl font-black text-black dark:text-white uppercase tracking-wider">
              Born and Raised in North Dallas
            </h2>
          </div>
          
          <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-6 mb-6">
            <p className="text-lg text-black dark:text-white font-bold leading-relaxed">
              Growing up in North Dallas gave me a deep appreciation for the
              entrepreneurial spirit and community values that define the DFW
              metroplex. From Plano to Richardson, from Addison to Carrollton,
              I&apos;ve seen firsthand how local businesses are the backbone of
              our communities.
            </p>
          </div>
          
          <div className="border-4 border-black dark:border-white bg-yellow-400 dark:bg-blue-600 p-4">
            <p className="text-xl font-black text-black dark:text-white uppercase tracking-wide">
              My mission is to bring cutting-edge AI solutions to every corner of
              the Dallas-Fort Worth area.
            </p>
          </div>
        </div>

        {/* DFW Coverage section - Neo-Brutalist Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* DFW Coverage Card */}
          <div className="border-4 border-black dark:border-white bg-orange-400 dark:bg-green-600 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-200 relative">
            {/* Corner decoration */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 border-2 border-black dark:border-white"></div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mr-4">
                <MapPin className="h-8 w-8 text-black dark:text-white" />
              </div>
              <div className="border-2 border-black dark:border-white bg-pink-400 dark:bg-cyan-600 p-2">
                <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wide">
                  Serving DFW Metroplex
                </h3>
              </div>
            </div>
            
            <div className="text-left space-y-3">
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                <p className="font-bold text-black dark:text-white">
                  <span className="text-red-600 dark:text-red-400 uppercase tracking-wide">Dallas County:</span> Dallas, Plano, Richardson,
                  Garland, Irving, Mesquite, Carrollton, Farmers Branch
                </p>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                <p className="font-bold text-black dark:text-white">
                  <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">Collin County:</span> Frisco, McKinney, Allen, Wylie,
                  Murphy, Lucas
                </p>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                <p className="font-bold text-black dark:text-white">
                  <span className="text-green-600 dark:text-green-400 uppercase tracking-wide">Tarrant County:</span> Fort Worth, Arlington, Grand
                  Prairie, Euless, Bedford, Hurst
                </p>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                <p className="font-bold text-black dark:text-white">
                  <span className="text-purple-600 dark:text-purple-400 uppercase tracking-wide">Denton County:</span> Denton, Lewisville, Flower
                  Mound, Coppell, The Colony
                </p>
              </div>
            </div>
          </div>

          {/* Who We Serve Card */}
          <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-purple-600 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-200 relative">
            {/* Corner decoration */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-500 border-2 border-black dark:border-white"></div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mr-4">
                <Users className="h-8 w-8 text-black dark:text-white" />
              </div>
              <div className="border-2 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-2">
                <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wide">
                  Who We Serve
                </h3>
              </div>
            </div>
            
            <div className="text-left space-y-3">
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3 flex items-center">
                <div className="border-2 border-black dark:border-white bg-blue-400 p-1 mr-3">
                  <Building2 className="h-4 w-4 text-black dark:text-white" />
                </div>
                <p className="font-bold text-black dark:text-white">
                  <span className="uppercase tracking-wide">Local Businesses:</span> From family restaurants to
                  growing startups
                </p>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3 flex items-center">
                <div className="border-2 border-black dark:border-white bg-yellow-400 p-1 mr-3">
                  <Star className="h-4 w-4 text-black dark:text-white" />
                </div>
                <p className="font-bold text-black dark:text-white">
                  <span className="uppercase tracking-wide">Influencers:</span> Content creators building their
                  brand
                </p>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3 flex items-center">
                <div className="border-2 border-black dark:border-white bg-purple-400 p-1 mr-3">
                  <Crown className="h-4 w-4 text-black dark:text-white" />
                </div>
                <p className="font-bold text-black dark:text-white">
                  <span className="uppercase tracking-wide">Community Leaders:</span> Those making a positive
                  impact
                </p>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3 flex items-center">
                <div className="border-2 border-black dark:border-white bg-green-400 p-1 mr-3">
                  <Briefcase className="h-4 w-4 text-black dark:text-white" />
                </div>
                <p className="font-bold text-black dark:text-white">
                  <span className="uppercase tracking-wide">Service Providers:</span> Lawyers, doctors,
                  consultants, and more
                </p>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3 flex items-center">
                <div className="border-2 border-black dark:border-white bg-red-400 p-1 mr-3">
                  <HandHeart className="h-4 w-4 text-black dark:text-white" />
                </div>
                <p className="font-bold text-black dark:text-white">
                  <span className="uppercase tracking-wide">Anyone with Good Intent:</span> We&apos;re here to
                  help you succeed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section - Neo-Brutalist */}
        <div className="border-4 border-black dark:border-white bg-pink-400 dark:bg-blue-600 p-8 mb-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 border-2 border-black dark:border-white"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 border-2 border-black dark:border-white"></div>
          
          <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-4 mb-8 text-center inline-block w-full">
            <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-wider">
              Our Core Values
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {/* Community First */}
            <div className="border-4 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-2 border-black dark:border-white"></div>
              <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mb-4 inline-block">
                <Users className="h-12 w-12 text-black dark:text-white" />
              </div>
              <div className="border-2 border-black dark:border-white bg-yellow-400 dark:bg-purple-600 p-2 mb-3">
                <h4 className="font-black text-lg text-black dark:text-white uppercase tracking-wide">
                  Community First
                </h4>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                <p className="font-bold text-black dark:text-white">
                  We believe in lifting up our local DFW community through
                  technology
                </p>
              </div>
            </div>
            
            {/* Good Intentions Only */}
            <div className="border-4 border-black dark:border-white bg-lime-400 dark:bg-pink-600 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 border-2 border-black dark:border-white"></div>
              <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mb-4 inline-block">
                <Shield className="h-12 w-12 text-black dark:text-white" />
              </div>
              <div className="border-2 border-black dark:border-white bg-orange-400 dark:bg-green-600 p-2 mb-3">
                <h4 className="font-black text-lg text-black dark:text-white uppercase tracking-wide">
                  Good Intentions Only
                </h4>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                <p className="font-bold text-black dark:text-white">
                  We only work with clients who have positive goals and ethical
                  practices
                </p>
              </div>
            </div>
            
            {/* Happiness Driven */}
            <div className="border-4 border-black dark:border-white bg-yellow-400 dark:bg-cyan-600 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative">
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 border-2 border-black dark:border-white"></div>
              <div className="border-3 border-black dark:border-white bg-white dark:bg-black p-3 mb-4 inline-block">
                <Heart className="h-12 w-12 text-black dark:text-white" />
              </div>
              <div className="border-2 border-black dark:border-white bg-red-400 dark:bg-blue-600 p-2 mb-3">
                <h4 className="font-black text-lg text-black dark:text-white uppercase tracking-wide">
                  Happiness Driven
                </h4>
              </div>
              <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-3">
                <p className="font-bold text-black dark:text-white">
                  Our ultimate goal is making everyone happier through better
                  technology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal touch - Neo-Brutalist */}
        <div className="border-4 border-black dark:border-white bg-purple-400 dark:bg-lime-600 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 relative">
          {/* Corner decorations */}
          <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-500 border-2 border-black dark:border-white"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-cyan-500 border-2 border-black dark:border-white"></div>
          <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-500 border-2 border-black dark:border-white"></div>
          
          <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6 text-center">
            <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-wider">
              Why Choose aihelpd?
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-3 border-black dark:border-white bg-orange-400 dark:bg-pink-600 p-6">
              <p className="text-lg font-bold text-black dark:text-white leading-relaxed">
                Unlike big tech companies that treat you like a number, I understand
                the unique challenges of running a business in Texas. From dealing
                with the summer heat affecting your servers to understanding the
                local business culture, I&apos;m not just your AI
                consultant—I&apos;m your neighbor.
              </p>
            </div>
            
            <div className="border-3 border-black dark:border-white bg-cyan-400 dark:bg-orange-600 p-6">
              <p className="text-lg font-bold text-black dark:text-white leading-relaxed">
                Whether you&apos;re in the heart of downtown Dallas, the growing
                suburbs of Frisco, or the historic streets of Fort Worth, I&apos;m
                committed to bringing you AI solutions that work for YOUR community
                and YOUR customers.
              </p>
            </div>
            
            {/* Call to action - Brutalist style */}
            <div className="border-4 border-black dark:border-white bg-black dark:bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-400 border-2 border-black dark:border-white"></div>
              <div className="border-2 border-white dark:border-black bg-red-500 p-3 mb-3 inline-block">
                <p className="text-xl font-black text-white dark:text-black uppercase tracking-wider">Ready to get started?</p>
              </div>
              <div className="border-2 border-white dark:border-black bg-yellow-400 dark:bg-blue-600 p-4">
                <p className="text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                  Let&apos;s make the DFW area the most AI-forward region in the
                  country—one happy customer at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
