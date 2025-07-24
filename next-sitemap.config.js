const siteUrl = 'https://www.rupeetravel.com';

module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
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
