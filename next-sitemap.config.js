const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.rupeetravel.com');

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
