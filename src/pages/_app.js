import Seo from '@/component/seo'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'
import { GoogleAnalytics } from "nextjs-google-analytics"

export default function App({ Component, pageProps, canonical }) {
  return (
    <ChakraProvider>
      <GoogleAnalytics />
      <Seo canonical={canonical} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
};

App.getInitialProps = ({ ctx }) => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd ? "https://www.rupeetravel.com" : "http://localhost:3000";
  const { asPath } = ctx;
  const canonical = base + asPath;

  return {
    canonical,
  };
};
