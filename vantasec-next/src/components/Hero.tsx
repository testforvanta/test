import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faGlobe, faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Background blur elements - consider if these are best handled in global styles or layout */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-5 py-1 bg-gray-800 rounded-full mb-4">
            <span className="text-[18px] font-medium gradient-text">Security in 360°</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text glow">Break. Detect.</span><br />
            {/* Typewriter effect will be handled by JavaScript later */}
            <span className="gradient-text glow-green typewriter-target">Secure.</span><br />
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            VantaSec provides military-grade cybersecurity solutions powered by AI and quantum-resistant cryptography to protect your digital assets against evolving threats.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-all duration-300 btn-hover-grow text-center">
              Get Set Secure
            </Link>
            {/*
            <Link href="#solutions" className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 btn-hover-grow">
              <FontAwesomeIcon icon={faPlayCircle} />
              <span>Watch Demo</span>
            </Link>
            */}
          </div>

          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {/* Placeholder images, consider using next/image if these are dynamic or need optimization */}
              <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-gray-800" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-gray-800" />
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-gray-800" />
            </div>
            <div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                <span className="font-medium">4.9/5.0</span>
              </div>
              <p className="text-sm text-gray-500">Trusted by 50+ enterprises</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="cyber-border rounded-2xl overflow-hidden bg-gray-900 p-1 scanline">
            <div className="relative h-full w-full bg-gray-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Terminal content will be made dynamic later */}
                <div className="font-mono text-green-400 mb-4 terminal-content-target">
                  <p className="mb-2">&gt; Initializing VantaSec Quantum Firewall...</p>
                  <p className="mb-2">&gt; Scanning network vulnerabilities...</p>
                  <p className="mb-2">&gt; Detecting 0 threats <span className="text-white">[Protected]</span></p>
                  <p className="terminal-cursor-target">&gt; Ready for secure operations</p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-cyan-400 text-2xl mb-2">
                      <FontAwesomeIcon icon={faShieldAlt} />
                    </div>
                    <h3 className="font-medium">AI-Powered</h3>
                    <p className="text-xs text-gray-400">Threat Detection</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-purple-400 text-2xl mb-2">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <h3 className="font-medium">Quantum</h3>
                    <p className="text-xs text-gray-400">Encryption</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-green-400 text-2xl mb-2">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <h3 className="font-medium">Global</h3>
                    <p className="text-xs text-gray-400">Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
