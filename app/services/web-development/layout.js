export const metadata = {
  title: "Web Development Services",

  description:
    "Vaelthor Technologies builds fast, responsive and modern websites and web applications designed to deliver better user experiences and support business growth.",

  keywords: [
    "web development company",
    "web development services",
    "website development company",
    "website development services",
    "custom website development",
    "business website development",
    "responsive website development",
    "modern website development",
    "web application development",
    "professional website development",
    "Next.js development",
    "React web development",
    "custom web solutions",
    "business web solutions",
    "Vaelthor Technologies web development",
  ],

  alternates: {
    canonical: "/services/web-development",
  },

  openGraph: {
    title:
      "Web Development Services | Vaelthor Technologies",

    description:
      "Fast, responsive and modern websites and web applications built around your business goals.",

    url:
      "https://vaelthortechnology.com/services/web-development",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Vaelthor Technologies Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Web Development Services | Vaelthor Technologies",

    description:
      "Modern, responsive websites and web applications built for growing businesses.",

    images: ["/og-image.png"],
  },
};

export default function WebDevelopmentLayout({
  children,
}) {
  return children;
}