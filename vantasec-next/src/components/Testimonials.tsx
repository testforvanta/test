import React from 'react';
import Image from 'next/image'; // Using next/image for avatars, assuming they might be local later
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface TestimonialCardProps {
  avatarSrc: string;
  name: string;
  title: string;
  quote: string;
}

const testimonialData: TestimonialCardProps[] = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Muhammed Ali", // Name was different in original HTML, corrected based on image content
    title: "CEO, RootsRwanda",
    quote: "VantaSec's penetration testing identified vulnerabilities our team had missed for months. Their detailed reports helped us prioritize fixes effectively.",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Muhammed Athif", // Name was different in original HTML, corrected based on image content
    title: "CISO, EncryptBytes",
    quote: "The security consulting team helped us navigate complex compliance requirements while actually improving our security posture. Exceptional service.",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Emma Rodriguez",
    title: "Director of Security, HealthCorp",
    quote: "Their vulnerability assessments provide actionable insights. The prioritized remediation plans save us countless hours in security operations.",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatarSrc, name, title, quote }) => {
  return (
    <div className="cyber-border bg-gray-900/50 rounded-xl p-8 hover:bg-gray-900 transition-all duration-300">
      <div className="flex items-center mb-6">
        {/* Using standard img for now due to external URLs and unknown dimensions for optimization */}
        <img src={avatarSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <p className="text-gray-400 mb-6">{`"${quote}"`}</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by <span className="gradient-text">Security Leaders</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients say about our cybersecurity solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
