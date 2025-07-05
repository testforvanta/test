import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const statsData: StatItemProps[] = [
  { value: '99.9%', label: 'Threat Detection Rate' },
  { value: '24/7', label: 'Security Monitoring' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '0.2s', label: 'Average Response Time' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-900 to-gray-900/50 relative overflow-hidden">
      {/* Background pattern - this was an inline SVG in the original HTML.
          For Next.js, this could be a CSS background in globals.css or a component.
          Keeping it simple for now, might need to move to CSS file.
      */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
