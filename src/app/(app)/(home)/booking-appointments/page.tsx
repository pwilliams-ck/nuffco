const Page = () => {
  return (
    <div className="text-center pt-8">
      <h1 className="text-4xl font-bold mb-8">Booking Appointments</h1>
      
      <div className="max-w-4xl mx-auto text-left px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg mb-4">
            Complete AI-powered appointment booking system that integrates with your calendar and handles the entire scheduling process. Customers can book, reschedule, and cancel appointments through multiple channels.
          </p>
          <p className="text-lg">
            The system syncs with popular calendar platforms, sends automated reminders, handles time zone conversions, and manages availability in real-time. Perfect for service-based businesses.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <ul className="text-lg space-y-2">
            <li>• <strong>Calendar integration:</strong> 1-2 weeks</li>
            <li>• <strong>Booking system setup:</strong> 3-4 weeks</li>
            <li>• <strong>AI training & testing:</strong> 2-3 weeks</li>
            <li>• <strong>Multi-channel deployment:</strong> 1-2 weeks</li>
            <li>• <strong>Total:</strong> Ready in 8-12 weeks</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="text-lg">
            <p className="mb-2"><strong>Setup Fee:</strong> $1,299 one-time</p>
            <p className="mb-2"><strong>Monthly:</strong> $599/month</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Includes unlimited bookings, calendar sync, and automated reminders. Premium features available.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Multi-year discounts available for annual commitments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;