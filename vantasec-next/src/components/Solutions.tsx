import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface SolutionPointProps {
  title: string;
  description: string;
}

const solutionPoints: SolutionPointProps[] = [
  {
    title: 'Custom Defense Frameworks',
    description: 'We build security architectures specifically designed for your infrastructure and threat landscape.',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Complete compliance solutions for GDPR, HIPAA, PCI-DSS, SOC2, and other regulatory requirements.',
  },
  {
    title: 'Incident Response',
    description: 'Immediate response protocols with forensic analysis to minimize damage from security breaches.',
  },
  {
    title: 'Security Training',
    description: 'Comprehensive cybersecurity awareness programs to turn your employees into a human firewall.',
  },
];

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Tailored Cybersecurity</span> Solutions
          </h2>

          <div className="space-y-6">
            {solutionPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/*
          <Link href="#contact" className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-all duration-300 btn-hover-grow">
            Explore Solutions
          </Link>
          */}
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="cyber-border rounded-2xl overflow-hidden bg-gray-900 p-1">
            <div className="relative h-full w-full bg-gray-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-cyan-400 font-mono">Security Dashboard</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800/70 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Threats</div>
                      <div className="text-xl font-bold text-green-400">0</div>
                    </div>
                    <div className="bg-gray-800/70 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Alerts</div>
                      <div className="text-xl font-bold text-yellow-400">2</div>
                    </div>
                    <div className="bg-gray-800/70 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Protected</div>
                      <div className="text-xl font-bold text-cyan-400">100%</div>
                    </div>
                  </div>

                  {/* This is a static representation of a chart.
                      If dynamic charts are needed, a charting library would be integrated here.
                  */}
                  <div className="h-32 bg-gray-800/70 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end">
                      <div className="h-1/4 w-1/4 bg-purple-500/30 flex-grow"></div>
                      <div className="h-1/2 w-1/4 bg-cyan-500/30 flex-grow"></div>
                      <div className="h-3/4 w-1/4 bg-green-500/30 flex-grow"></div>
                      <div className="h-full w-1/4 bg-yellow-500/30 flex-grow"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm">Active Protection</span>
                  </div>
                  <div className="text-green-400 text-sm font-mono">SECURE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative blur elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-full filter blur-3xl opacity-20 -z-10"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
