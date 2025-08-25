const Page = () => {
  return (
    <div className="text-center pt-8">
      <h1 className="text-4xl font-bold mb-8">Chat Widget</h1>
      
      <div className="max-w-4xl mx-auto text-left px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg mb-4">
            Embed our AI-powered chat widget directly into your existing website. This is our fastest and most cost-effective solution to get AI customer support running on your site within minutes.
          </p>
          <p className="text-lg">
            The widget integrates seamlessly with your current design and can handle customer inquiries 24/7, providing instant responses and escalating complex issues to your team when needed.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <ul className="text-lg space-y-2">
            <li>• <strong>Setup:</strong> 4-6 hours</li>
            <li>• <strong>Customization:</strong> 1-2 days</li>
            <li>• <strong>Testing & Launch:</strong> 1 day</li>
            <li>• <strong>Total:</strong> Ready in 2-3 business days</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="text-lg">
            <p className="mb-2"><strong>Setup Fee:</strong> $499 one-time</p>
            <p className="mb-2"><strong>Monthly:</strong> $299/month</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Includes up to 1,000 conversations/month. Additional conversations at $0.15 each.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Multi-year discounts available for annual commitments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;