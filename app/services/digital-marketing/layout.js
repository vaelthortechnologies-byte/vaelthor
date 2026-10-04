export const metadata = {
  title: "Digital Marketing Services",

  description:
    "Vaelthor Technologies helps businesses grow online with strategic digital marketing, social media, search visibility, content and performance-focused campaigns.",

  keywords: [
    "digital marketing company",
    "digital marketing services",
    "digital marketing agency",
    "online marketing services",
    "social media marketing",
    "SEO services",
    "search engine optimization",
    "social media management",
    "content marketing",
    "online brand promotion",
    "business digital marketing",
    "digital growth services",
    "performance marketing",
    "lead generation marketing",
    "online marketing company",
    "Vaelthor Technologies digital marketing",
  ],

  alternates: {
    canonical: "/services/digital-marketing",
  },

  openGraph: {
    title:
      "Digital Marketing Services | Vaelthor Technologies",

    description:
      "Digital marketing strategies designed to improve online visibility, generate leads and help businesses grow.",

    url:
      "https://vaelthortechnology.com/services/digital-marketing",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Vaelthor Technologies Digital Marketing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Services | Vaelthor Technologies",

    description:
      "Strategic digital marketing for stronger online visibility, leads and business growth.",

    images: ["/og-image.png"],
  },
};

export default function DigitalMarketingLayout({
  children,
}) {
  return children;
}