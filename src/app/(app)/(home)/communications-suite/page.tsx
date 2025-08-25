const Page = () => {
  return (
    <div className="text-center pt-8">
      <h1 className="text-4xl font-bold mb-8">Full Communications Suite</h1>
      
      <div className="max-w-4xl mx-auto text-left px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg mb-4">
            The complete AI-powered communications platform that combines all our services into one unified system. Chat widgets, phone systems, email automation, appointment booking, and advanced analytics all working together seamlessly.
          </p>
          <p className="text-lg">
            This enterprise-grade solution includes custom integrations, advanced reporting, multi-location support, team management tools, and white-label options. Perfect for larger businesses or franchises.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <ul className="text-lg space-y-2">
            <li>• <strong>System architecture design:</strong> 3-4 weeks</li>
            <li>• <strong>Core platform development:</strong> 16-24 weeks</li>
            <li>• <strong>Custom integrations:</strong> 8-12 weeks</li>
            <li>• <strong>Testing & optimization:</strong> 4-6 weeks</li>
            <li>• <strong>Training & deployment:</strong> 2-4 weeks</li>
            <li>• <strong>Total:</strong> Ready in 8-12 months</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="text-lg">
            <p className="mb-2"><strong>Setup Fee:</strong> $9,999 one-time</p>
            <p className="mb-2"><strong>Monthly:</strong> $1,499/month</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Includes all features, priority support, custom integrations, and white-label options. Enterprise pricing available.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Significant multi-year discounts available for annual commitments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;