const siteUrl = 'https://www.rupeetravel.com';

module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async () => {
    const result = [
      {
        loc: '/bangalore-to-vietnam-flight',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/mumbai-to-vietnam-flight',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/kolkata-to-vietnam-flight',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/new-delhi-to-vietnam-flight',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/ahmedabad-to-vietnam-flight',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/hyderabad-to-vietnam-flight',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
    ];
    return result;
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
