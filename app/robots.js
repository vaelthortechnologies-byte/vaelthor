const baseUrl = "https://YOUR-DOMAIN.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}