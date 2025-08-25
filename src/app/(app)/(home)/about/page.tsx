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

const Page = () => {
  return (
    <div className="text-center pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About aihelpd
        </h1>

        {/* Main mission section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-12 border border-blue-200 dark:border-blue-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Born and Raised in North Dallas
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Growing up in North Dallas gave me a deep appreciation for the
            entrepreneurial spirit and community values that define the DFW
            metroplex. From Plano to Richardson, from Addison to Carrollton,
            I&apos;ve seen firsthand how local businesses are the backbone of
            our communities.
          </p>
          <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
            My mission is to bring cutting-edge AI solutions to every corner of
            the Dallas-Fort Worth area.
          </p>
        </div>

        {/* DFW Coverage section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Serving the Entire DFW Metroplex
              </h3>
            </div>
            <div className="text-left text-gray-700 dark:text-gray-300 space-y-2">
              <p>
                <strong>Dallas County:</strong> Dallas, Plano, Richardson,
                Garland, Irving, Mesquite, Carrollton, Farmers Branch
              </p>
              <p>
                <strong>Collin County:</strong> Frisco, McKinney, Allen, Wylie,
                Murphy, Lucas
              </p>
              <p>
                <strong>Tarrant County:</strong> Fort Worth, Arlington, Grand
                Prairie, Euless, Bedford, Hurst
              </p>
              <p>
                <strong>Denton County:</strong> Denton, Lewisville, Flower
                Mound, Coppell, The Colony
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who We Serve
              </h3>
            </div>
            <div className="text-left text-gray-700 dark:text-gray-300 space-y-3">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <p>
                  <strong>Local Businesses:</strong> From family restaurants to
                  growing startups
                </p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <p>
                  <strong>Influencers:</strong> Content creators building their
                  brand
                </p>
              </div>
              <div className="flex items-center">
                <Crown className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <p>
                  <strong>Community Leaders:</strong> Those making a positive
                  impact
                </p>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <p>
                  <strong>Service Providers:</strong> Lawyers, doctors,
                  consultants, and more
                </p>
              </div>
              <div className="flex items-center">
                <HandHeart className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <p>
                  <strong>Anyone with Good Intent:</strong> We&apos;re here to
                  help you succeed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-12 border border-green-200 dark:border-green-800">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Users className="h-12 w-12 text-blue-500" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Community First
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in lifting up our local DFW community through
                technology
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Shield className="h-12 w-12 text-green-500" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Good Intentions Only
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                We only work with clients who have positive goals and ethical
                practices
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Heart className="h-12 w-12 text-red-500" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Happiness Driven
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Our ultimate goal is making everyone happier through better
                technology
              </p>
            </div>
          </div>
        </div>

        {/* Personal touch */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose aihelpd?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Unlike big tech companies that treat you like a number, I understand
            the unique challenges of running a business in Texas. From dealing
            with the summer heat affecting your servers to understanding the
            local business culture, I&apos;m not just your AI
            consultant—I&apos;m your neighbor.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Whether you&apos;re in the heart of downtown Dallas, the growing
            suburbs of Frisco, or the historic streets of Fort Worth, I&apos;m
            committed to bringing you AI solutions that work for YOUR community
            and YOUR customers.
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6">
            <p className="text-xl font-semibold mb-2">Ready to get started?</p>
            <p className="text-lg">
              Let&apos;s make the DFW area the most AI-forward region in the
              country—one happy customer at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
