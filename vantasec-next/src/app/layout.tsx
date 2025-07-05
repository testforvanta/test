import type { Metadata } from "next";
import "./globals.css"; // This imports all global styles including Tailwind and Space Grotesk font
import GlobalScrollAnimations from "@/components/effects/GlobalScrollAnimations"; // Import the component

export const metadata: Metadata = {
  // SEO metadata will be updated in a later step.
  // For now, using the original title and a generic description.
  title: "VantaSec | Next-Gen Cybersecurity",
  description: "Next-generation cybersecurity solutions.",
  // The original HTML had <link rel="icon" type="image/x-icon" href="logo2.png">
  // Next.js handles favicons differently, typically by placing favicon.ico or icon.png in the app directory.
  // I'll assume logo2.png will be converted to favicon.ico and placed in /vantasec-next/src/app/ if not already there.
  // Or we can add a <link> tag here if needed. For now, relying on default Next.js favicon handling.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        The 'Space Grotesk' font is applied via globals.css body styling.
        The 'hacker-grid' class provides the background styling.
        'min-h-screen' ensures the layout takes at least the full screen height.
        'antialiased' for smoother font rendering.
      */}
      <body className="hacker-grid min-h-screen antialiased">
        <GlobalScrollAnimations /> {/* Add the scroll animation component */}
        {/*
          The "Animated Background Elements" (floating divs from original index.html)
          could be added here as a component if they are meant to be on all pages.
          Example: <AnimatedBackgroundElements />
          This component would need to be created.
        */}
        {children}
      </body>
    </html>
  );
}
