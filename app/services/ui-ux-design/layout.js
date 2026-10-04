export const metadata = {
  title: "UI/UX Design Services",

  description:
    "Vaelthor Technologies creates intuitive, modern and user-focused UI/UX designs for websites, mobile applications and digital products.",

  keywords: [
    "UI UX design company",
    "UI UX design services",
    "UI design services",
    "UX design services",
    "website UI UX design",
    "mobile app UI UX design",
    "user experience design",
    "user interface design",
    "product design services",
    "web design services",
    "mobile app design",
    "modern UI design",
    "responsive web design",
    "digital product design",
    "custom UI UX design",
    "Vaelthor Technologies UI UX",
  ],

  alternates: {
    canonical: "/services/ui-ux-design",
  },

  openGraph: {
    title:
      "UI/UX Design Services | Vaelthor Technologies",

    description:
      "Modern, intuitive and user-focused UI/UX designs for websites, mobile apps and digital products.",

    url:
      "https://vaelthortechnology.com/services/ui-ux-design",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Vaelthor Technologies UI UX Design Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "UI/UX Design Services | Vaelthor Technologies",

    description:
      "User-focused UI/UX design for modern websites, mobile applications and digital products.",

    images: ["/og-image.png"],
  },
};

export default function UIUXDesignLayout({ children }) {
  return children;
}