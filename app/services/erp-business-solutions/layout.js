export const metadata = {
  title: "ERP & Business Solutions",

  description:
    "Vaelthor Technologies develops custom ERP and business management solutions that connect workflows, centralize data and improve business visibility.",

  keywords: [
    "ERP software development company",
    "ERP development services",
    "ERP solutions",
    "custom ERP software",
    "ERP software development",
    "business management software",
    "custom business software",
    "enterprise resource planning software",
    "business automation solutions",
    "inventory management software",
    "employee management software",
    "sales management software",
    "business reporting software",
    "custom ERP solutions",
    "ERP company",
    "Vaelthor Technologies ERP solutions",
  ],

  alternates: {
    canonical: "/services/erp-business-solutions",
  },

  openGraph: {
    title:
      "ERP & Business Solutions | Vaelthor Technologies",

    description:
      "Connected ERP and business management solutions designed to streamline workflows, centralize data and improve business operations.",

    url:
      "https://vaelthortechnology.com/services/erp-business-solutions",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Vaelthor Technologies ERP & Business Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ERP & Business Solutions | Vaelthor Technologies",

    description:
      "Custom ERP and business management software built around your business operations.",

    images: ["/og-image.png"],
  },
};

export default function ERPBusinessSolutionsLayout({
  children,
}) {
  return children;
}