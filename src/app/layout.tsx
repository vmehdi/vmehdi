import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { BackgroundBeam } from "@/components/ui/BackgroundBeam";
import React from "react";
import { AppBar } from "@/components/AppBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider enableSystem enableColorScheme themes={["light", "dark", "unicorn"]}>
          <AppBar />
          <main className=" min-h-dvh bg-gray-50 pt-32 dark:bg-gray-800">{children}</main>
          <SpeedInsights />
          <Analytics />
          <BackgroundBeam />
        </ThemeProvider>
      </body>
    </html>
  );
}
