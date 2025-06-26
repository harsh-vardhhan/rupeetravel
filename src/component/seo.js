import Head from "next/head";

const DOMAIN = "https://www.rupeetravel.com/";
const DEFAULT_OG_IMAGE = "https://ik.imagekit.io/rupeetravel/preview.png";

export default function Seo({
  title = "Rupee Travel | Vietnam trip for Indians",
  description = "Vietnam budget travel checklist for Indians",
  siteName = "Rupee Travel",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@harsh_vardhhan",
}) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonical ?? DOMAIN} />
      <meta property="og:image" content={ogImage ?? DEFAULT_OG_IMAGE} />
      <meta property="og:image:alt" content={`${title} | ${siteName}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta name="robots" content="index,follow" />
      <meta name="twitter:image" content={ogImage ?? DEFAULT_OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonical ?? DOMAIN} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
