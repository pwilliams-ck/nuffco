const Page = () => {
  return (
    <div className="text-center pt-8">
      <h1 className="text-4xl font-bold mb-8">Phone Interaction</h1>
      
      <div className="max-w-4xl mx-auto text-left px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg mb-4">
            AI-powered phone system that handles both voice calls and SMS text messages. Your customers can call your business number and speak with our AI assistant, or send text messages for quick responses.
          </p>
          <p className="text-lg">
            The system can handle appointment scheduling, answer FAQs, take messages, and route calls to the right department. Voice interactions feel natural and human-like.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <ul className="text-lg space-y-2">
            <li>• <strong>Phone number setup:</strong> 2-4 days</li>
            <li>• <strong>AI training:</strong> 1-2 weeks</li>
            <li>• <strong>Voice optimization:</strong> 1 week</li>
            <li>• <strong>Testing:</strong> 3-5 days</li>
            <li>• <strong>Total:</strong> Ready in 2-4 weeks</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="text-lg">
            <p className="mb-2"><strong>Setup Fee:</strong> $799 one-time</p>
            <p className="mb-2"><strong>Monthly:</strong> $499/month</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Includes 500 minutes of voice calls and 1,000 SMS messages. Additional usage billed separately.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Multi-year discounts available for annual commitments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;