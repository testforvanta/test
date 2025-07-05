import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faHeadset, faSearch, faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ServiceItemProps {
  icon: any; // Type for FontAwesomeIcon icon prop
  iconColorClass: string;
  title: string;
  description: string;
  features: string[];
  linkText: string;
  linkHref: string;
  linkColorClass: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  iconColorClass,
  title,
  description,
  features,
  linkText,
  linkHref,
  linkColorClass,
}) => {
  return (
    <div className="cyber-border bg-gray-900/50 rounded-xl p-8 hover:bg-gray-900 transition-all duration-300 group">
      <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br from-cyan-500 to-purple-600 transition-all duration-300">
        <FontAwesomeIcon icon={icon} className={`text-2xl ${iconColorClass} group-hover:text-white`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="text-sm text-gray-500 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-2 text-xs" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={linkHref} className={`inline-flex items-center ${linkColorClass} group-hover:text-white transition-colors duration-300`}>
        <span>{linkText}</span>
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </Link>
    </div>
  );
};

const servicesData: ServiceItemProps[] = [
  {
    icon: faBug,
    iconColorClass: 'text-red-400',
    title: 'Penetration Testing',
    description: 'Simulate real-world attacks to identify and exploit vulnerabilities in your systems before malicious actors can.',
    features: [
      'Network & Infrastructure Testing',
      'Web & Mobile Application Security',
      'Social Engineering Simulation',
      'Wireless Network Assessment',
    ],
    linkText: 'Request Assessment',
    linkHref: '#contact',
    linkColorClass: 'text-red-400',
  },
  {
    icon: faHeadset,
    iconColorClass: 'text-purple-400',
    title: 'Security Consulting',
    description: 'Expert guidance to develop and implement robust cybersecurity strategies and policies tailored to your organization.',
    features: [
      'Security Architecture Review',
      'Compliance & Risk Management',
      'Incident Response Planning',
      'Security Awareness Training',
    ],
    linkText: 'Consult Our Experts',
    linkHref: '#contact',
    linkColorClass: 'text-purple-400',
  },
  {
    icon: faSearch,
    iconColorClass: 'text-cyan-400',
    title: 'Vulnerability Assessment',
    description: 'Systematic review of security weaknesses in your information systems with prioritized remediation plans.',
    features: [
      'Automated & Manual Scanning',
      'Configuration Management Review',
      'Threat Modeling Analysis',
      'Prioritized Remediation Plans',
    ],
    linkText: 'Schedule Assessment',
    linkHref: '#contact',
    linkColorClass: 'text-cyan-400',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Advanced Protection</span> Services
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Our cutting-edge cybersecurity solutions are designed to protect against even the most sophisticated threats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
