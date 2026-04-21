import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "Chmod Calculator - Unix File Permissions | chmod-calculator",
  description:
    "Free online chmod calculator. Convert between numeric and symbolic Unix file permissions. Generate chmod commands instantly with an interactive permission grid.",
  keywords: [
    "chmod calculator",
    "unix permissions",
    "file permissions",
    "chmod command",
    "linux chmod",
    "permission calculator",
  ],
  authors: [{ name: "chmod-calculator" }],
  openGraph: {
    title: "Chmod Calculator - Unix File Permissions",
    description:
      "Free online chmod calculator. Convert between numeric and symbolic Unix file permissions instantly.",
    url: "https://chmod-calculator.vercel.app",
    siteName: "chmod-calculator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chmod Calculator - Unix File Permissions",
    description:
      "Free online chmod calculator. Convert between numeric and symbolic Unix file permissions instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://chmod-calculator.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Chmod Calculator",
              description:
                "Free online chmod calculator for Unix file permissions. Convert between numeric and symbolic formats with an interactive permission grid.",
              url: "https://chmod-calculator.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Interactive permission checkbox grid",
                "Numeric to symbolic conversion",
                "Symbolic to numeric conversion",
                "Common preset permissions",
                "One-click copy to clipboard",
                "Real-time chmod command generation",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
