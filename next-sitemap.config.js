const siteUrl = 'https://www.rupeetravel.com';

export default {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Add your dynamic routes here
  additionalPaths: async (config) => {
    const routes = [
      "mumbai-to-vietnam-flight",
      "hyderabad-to-vietnam-flight", 
      "kolkata-to-vietnam-flight",
      "new-delhi-to-vietnam-flight",
      "ahmedabad-to-vietnam-flight",
      "bangalore-to-vietnam-flight",
    ];

    return routes.map((route) => ({
      loc: `/${route}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
  },
};