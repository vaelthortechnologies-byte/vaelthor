export const metadata = {
  title: "Start Your Project",

  description:
    "Tell Vaelthor Technologies about your project and get started with web development, mobile apps, custom software, ERP solutions, UI/UX and digital services.",

  keywords: [
    "start a web development project",
    "website development enquiry",
    "web development consultation",
    "mobile app development enquiry",
    "custom software enquiry",
    "ERP software enquiry",
    "software development consultation",
    "UI UX design enquiry",
    "digital marketing enquiry",
    "Vaelthor Technologies project enquiry",
  ],

  alternates: {
    canonical: "/get-started",
  },

  openGraph: {
    title: "Start Your Project | Vaelthor Technologies",

    description:
      "Share your project requirements with Vaelthor Technologies and let's build something valuable together.",

    url: "https://vaelthortechnology.com/get-started",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Start Your Project - Vaelthor Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Start Your Project | Vaelthor Technologies",

    description:
      "Share your project requirements and get started with Vaelthor Technologies.",

    images: ["/og-image.png"],
  },
};

export default function GetStartedLayout({ children }) {
  return children;
}