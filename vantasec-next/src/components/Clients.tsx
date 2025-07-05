import React from 'react';

// It's better to download these logos and serve them locally via next/image
// For now, using img tags with external URLs as in the original HTML.
// Consider adding width and height if known, or use next/image with appropriate loaders if switching to local assets.

const clientLogos = [
  { src: "https://logo.clearbit.com/ibm.com", alt: "IBM", class: "h-8" },
  { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft", class: "h-8" },
  { src: "https://encryptbytes.com/assets/logo-CdcS_0Ox.png", alt: "EncryptBytes", class: "h-10" }, // Adjusted alt from Tesla
  { src: "https://www.rootsrwanda.rw/assets/web/images/logo/logo.png", alt: "RootsRwanda", class: "h-8" }, // Adjusted alt from Amazon
  { src: "https://logo.clearbit.com/samsung.com", alt: "Samsung", class: "h-10" },
  { src: "https://logo.clearbit.com/nasa.gov", alt: "NASA", class: "h-10" },
];

const Clients: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-gray-500 uppercase tracking-wider text-sm mb-2">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {clientLogos.map((logo, index) => (
          <div key={index} className="flex justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.class} grayscale hover:grayscale-0 transition-all duration-500`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
