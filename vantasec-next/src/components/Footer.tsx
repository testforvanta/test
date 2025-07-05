import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
// Original HTML had map-marker-alt, phone-alt, envelope, clock, but these sections were commented out.
// If they are needed, import from '@fortawesome/free-solid-svg-icons'

const Footer: React.FC = () => {
  return (
    <footer id="about" className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Link href="/" passHref>
                <span id="logo-image-footer" className="cursor-pointer">
                  {/* Assuming logo.png is moved to public directory */}
                  <Image src="/logo.png" alt="VantaSec Logo" width={120} height={30} className="h-6 sm:h-9 w-auto" />
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Next-generation cybersecurity solutions powered by AI and quantum-resistant technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Penetration Testing</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Security Consulting</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Vulnerability Assessment</Link></li>
              <li><Link href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-300">Compliance Solutions</Link></li>
              <li><Link href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-300">Incident Response</Link></li>
            </ul>
          </div>

          {/* The following sections were commented out in the original HTML. Keeping them commented. */}
          {/*
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Whitepapers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API Docs</a></li>
            </ul>
          </div>
          */}

          {/*
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-cyan-400" /> 123 Cyber Ave, San Francisco
              </li>
              <li className="text-gray-400 flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-purple-400" />
                <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a>
              </li>
              <li className="text-gray-400 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-400" />
                <a href="mailto:security@vantasec.com" className="hover:text-white">security@vantasec.com</a>
              </li>
              <li className="text-gray-400 flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-2 text-yellow-400" /> 24/7 Support
              </li>
            </ul>
          </div>
          */}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} VantaSec. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
