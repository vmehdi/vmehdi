import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import React from "react";
import Script from "next/script";
import { AppBar } from "@/components/AppBar";
import { BackgroundContainer } from "@/components/ui/BackgroundContainer";
import { Footer } from "@/components/ui/Footer";

const spaceSans = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"]
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Mehdi Vaezi",
  description: "Mehdi Vaezi personal website. Javascript Engineer | Vue/Nuxt | React/Next | React-Native",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  metadataBase: new URL("https://vmehdi.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fa-IR": "/fa"
    }
  },
  openGraph: {
    images: "/icon.png",
    title: "Mehdi Vaezi",
    description: "Mehdi Vaezi personal website. Javascript Engineer | Vue/Nuxt | React/Next | React-Native",
    url: "https://vmehdi.com",
    siteName: "vmehdi.com",
    type: "website"
  },
  icons: {
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceSans.className}>
      <head>
        <Script src="https://cdn.segmentaim.com/dev/loader.js" type="module" data-k="68dbc62b83bc2"></Script>
        <Script id="hotjar-tracking" strategy="beforeInteractive">{`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:6494685,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}</Script>
      </head>
      <body>
        <ThemeProvider enableSystem enableColorScheme themes={["light", "dark", "unicorn"]}>
          <AppBar />
          <BackgroundContainer />
          <main className=" unicorn:text-white min-h-dvh bg-gray-50 pt-32 dark:bg-gray-800">
            {children}
            <Footer />
          </main>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
