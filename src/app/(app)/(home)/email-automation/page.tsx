const Page = () => {
  return (
    <div className="text-center pt-8">
      <h1 className="text-4xl font-bold mb-8">Email Automation</h1>
      
      <div className="max-w-4xl mx-auto text-left px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg mb-4">
            Intelligent email automation system that reads, understands, and responds to customer emails automatically. Our AI analyzes incoming emails and generates appropriate responses based on your business context.
          </p>
          <p className="text-lg">
            The system can handle customer inquiries, appointment requests, support tickets, and general questions. It learns from your existing email patterns and maintains your brand voice.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <ul className="text-lg space-y-2">
            <li>• <strong>Email system integration:</strong> 1 week</li>
            <li>• <strong>AI training on your data:</strong> 2-3 weeks</li>
            <li>• <strong>Response template creation:</strong> 1 week</li>
            <li>• <strong>Testing & refinement:</strong> 1 week</li>
            <li>• <strong>Total:</strong> Ready in 4-6 weeks</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="text-lg">
            <p className="mb-2"><strong>Setup Fee:</strong> $699 one-time</p>
            <p className="mb-2"><strong>Monthly:</strong> $399/month</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Includes up to 2,000 automated email responses per month. Additional emails at $0.05 each.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Multi-year discounts available for annual commitments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;