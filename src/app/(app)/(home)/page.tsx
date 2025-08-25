"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function Home() {
  const trpc = useTRPC();
  // const { data } = useQuery(trpc.auth.session.queryOptions());

  const products = [
    { name: "Chat Widget", price: "$299/month", timeline: "2-3 days", href: "/chat-widget" },
    { name: "Phone Interaction", price: "$499/month", timeline: "2-4 weeks", href: "/phone-interaction" },
    { name: "Email Automation", price: "$399/month", timeline: "4-6 weeks", href: "/email-automation" },
    { name: "Booking", price: "$599/month", timeline: "8-12 weeks", href: "/booking-appointments" },
    { name: "Full Suite", price: "$1,499/month", timeline: "8-12 months", href: "/communications-suite" },
  ];

  return (
    <div className="text-center pt-8">
      <h1 className="text-4xl font-bold mb-8">aihelpd - AI Automated Solutions</h1>
      
      {/* <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Session:</h2>
        <pre className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
          {JSON.stringify(data?.user, null, 2)}
        </pre>
      </div> */}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 text-left hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Timeline: {product.timeline}</p>
              <p className="font-bold text-lg">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
