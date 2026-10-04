export const metadata = {
  title: "Mobile App Development Services",

  description:
    "Vaelthor Technologies develops modern, fast and scalable mobile applications designed around your users, business goals and long-term growth.",

  keywords: [
    "mobile app development company",
    "mobile app development services",
    "mobile application development",
    "Android app development",
    "iOS app development",
    "custom mobile app development",
    "business mobile app development",
    "mobile application development company",
    "custom app development",
    "scalable mobile apps",
    "modern mobile applications",
    "mobile software solutions",
    "business app development",
    "app development company",
    "Vaelthor Technologies mobile app development",
  ],

  alternates: {
    canonical: "/services/mobile-app-development",
  },

  openGraph: {
    title:
      "Mobile App Development Services | Vaelthor Technologies",

    description:
      "Modern and scalable mobile applications built around your users and business goals.",

    url:
      "https://vaelthortechnology.com/services/mobile-app-development",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Vaelthor Technologies Mobile App Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mobile App Development Services | Vaelthor Technologies",

    description:
      "Fast, modern and scalable mobile applications for growing businesses.",

    images: ["/og-image.png"],
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}) {
  return children;
}