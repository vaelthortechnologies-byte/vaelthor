import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import RouteTransition from "@/components/RouteTransition";
import MetaPixel from "@/components/Analytics/MetaPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://vaelthortechnology.com"),

  title: {
    default:
      "Vaelthor Technologies | Web Development, Apps & Business Solutions",
    template: "%s | Vaelthor Technologies",
  },

  description:
    "Vaelthor Technologies builds modern websites, mobile apps, custom software, ERP solutions, UI/UX experiences and digital solutions for growing businesses.",

  keywords: [
    "vaelthor",
    "Vaelthor Technologies",
    "web development company",
    "website development company",
    "web development services",
    "mobile app development",
    "mobile application development",
    "custom software development",
    "ERP software development",
    "ERP solutions",
    "UI UX design",
    "digital solutions",
    "business software",
    "software development company",
    "technology company",
    "digital transformation",
    "website development",
    "business website development",
    "custom website development",
    "responsive website development",
    "professional website development",
    "web application development",
    "business automation software",
    "custom business software",
    "enterprise software solutions",
  ],

  authors: [
    {
      name: "Vaelthor Technologies",
      url: "https://vaelthortechnology.com",
    },
  ],

  creator: "Vaelthor Technologies",
  publisher: "Vaelthor Technologies",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vaelthortechnology.com",
    siteName: "Vaelthor Technologies",

    title:
      "Vaelthor Technologies | Web Development, Apps & Business Solutions",

    description:
      "Modern websites, mobile apps, custom software, ERP solutions and digital experiences built for growing businesses.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaelthor Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Vaelthor Technologies | Web Development, Apps & Business Solutions",

    description:
      "Modern websites, mobile apps, custom software and ERP solutions for growing businesses.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816]">
        <MetaPixel />

        <RouteTransition>
          {children}
        </RouteTransition>
      </body>
    </html>
  );
}