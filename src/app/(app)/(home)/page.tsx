"use client";
import Link from "next/link";
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
    <div className="text-center pt-8">
      <h1 className="text-4xl font-bold mb-8">
        aihelpd - AI Automated Solutions
      </h1>

      {/* <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Session:</h2>
        <pre className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
          {JSON.stringify(data?.user, null, 2)}
        </pre>
      </div> */}
      <div className="max-w-4xl mx-auto" id="our-products">
        <h2 className="text-2xl font-semibold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Link key={index} href={product.href}>
                <div
                  className={`border rounded-xl p-6 text-left hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${product.bgColor} border-gray-200 dark:border-gray-700`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg mr-4`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${product.iconColor}`}
                      />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                      Timeline: {product.timeline}
                    </p>
                    {product.disclaimer && (
                      <p className="text-xs text-orange-600 dark:text-orange-400 italic flex items-center">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {product.disclaimer}
                      </p>
                    )}
                    <p className="font-bold text-xl text-gray-900 dark:text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-10 w-10 text-blue-500 mr-4" />
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Serving North Dallas & Beyond
            </h2>
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
            <div className="flex items-start justify-center">
              <Heart className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-center">
                Born and raised in North Dallas, I understand the heart of our
                community and the unique challenges local businesses face.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center">
                Whether you&apos;re a local business owner, influencer,
                community leader, or anyone with good intentions and absolutely
                no intent to harm,
                <strong className="text-blue-600 dark:text-blue-400 flex items-center justify-center mx-2">
                  <Sparkles className="h-5 w-5 mr-2" />
                  I am here for you
                  <Sparkles className="h-5 w-5 ml-2" />
                </strong>
                .
              </p>
            </div>
            <div className="flex items-start justify-center">
              <Zap className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                My mission is simple: to make us all happier through AI-powered
                solutions that truly serve our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
