export const metadata = {
  title: "Contact Vaelthor Technologies",

  description:
    "Get in touch with Vaelthor Technologies for website development, mobile apps, custom software, ERP solutions, UI/UX design and digital solutions.",

  keywords: [
    "contact Vaelthor Technologies",
    "Vaelthor Technologies contact",
    "web development company contact",
    "website development services",
    "mobile app development company",
    "custom software development",
    "ERP solutions",
    "digital solutions company",
    "software development company",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Vaelthor Technologies",

    description:
      "Talk to Vaelthor Technologies about your next website, app, software or digital project.",

    url: "https://vaelthortechnology.com/contact",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Vaelthor Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact Vaelthor Technologies",

    description:
      "Get in touch about your next digital project.",

    images: ["/og-image.png"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}