import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { BackgroundBeam } from "@/components/ui/BackgroundBeam";
import React from "react";
import { AppBar } from "@/components/AppBar";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { BackgroundContainer } from "@/components/ui/BackgroundContainer";

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
  metadataBase: new URL("https://mvaezi.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fa-IR": "/fa"
    }
  },
  openGraph: {
    images: "/icon.png",
    title: "mvaezi.com",
    description: "Mehdi Vaezi personal website. Javascript Engineer | Vue/Nuxt | React/Next | React-Native",
    url: "https://mvaezi.com",
    siteName: "mvaezi.com",
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
      <body>
        <ThemeProvider enableSystem enableColorScheme themes={["light", "dark", "unicorn"]}>
          <AppBar />
          <BackgroundContainer />
          <main className=" min-h-dvh bg-gray-50 pt-32 dark:bg-gray-800">{children}</main>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
