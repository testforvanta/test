import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const CTA: React.FC = () => {
  // Form submission logic will be handled later (e.g., with react-hook-form and an API endpoint)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for form submission
    alert('Form submitted (not really, this is a placeholder).');
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')" }}
        ></div>
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to <span className="gradient-text glow">Secure Your Future</span>?
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Join thousands of enterprises who trust VantaSec for their cybersecurity needs. Get started with a free security assessment today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/*
          <Link href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-all duration-300 btn-hover-grow text-lg">
            Request Demo
          </Link>
          */}
          <a href="tel:+250795988588" className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 btn-hover-grow text-lg flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>Speak to an Expert</span>
          </a>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="mt-16 max-w-2xl mx-auto cyber-border bg-gray-900/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 text-left">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 text-left">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Your email" />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1 text-left">Company</label>
              <input type="text" id="company" name="company" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Your company" />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-1 text-left">Service Interested In</label>
              <select id="service" name="service" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="">Select a service</option>
                <option value="penetration-testing">Penetration Testing</option>
                <option value="security-consulting">Security Consulting</option>
                <option value="vulnerability-assessment">Vulnerability Assessment</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1 text-left">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-all duration-300 btn-hover-grow">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
