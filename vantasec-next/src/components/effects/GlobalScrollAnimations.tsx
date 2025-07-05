"use client";

import { useEffect } from 'react';

const GlobalScrollAnimations: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            // Optional: Unobserve after animation to save resources
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Query for elements to observe.
    // Note: This relies on these selectors being present in the DOM when this runs.
    const elementsToAnimate = document.querySelectorAll('section, .cyber-border');
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Cleanup function to unobserve elements when the component unmounts
    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return null; // This component does not render anything itself
};

export default GlobalScrollAnimations;
