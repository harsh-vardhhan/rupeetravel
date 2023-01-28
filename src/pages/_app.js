import Seo from '@/component/seo'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

export default function App({ Component, pageProps, canonical }) {
  return (
    <ChakraProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-5FW1PNQWL6`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5FW1PNQWL6');
        `}
      </Script>
      <Seo canonical={canonical} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

App.getInitialProps = ({ ctx }) => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd ? "https://www.rupeetravel.com" : "http://localhost:3000";
  const { asPath } = ctx;
  const canonical = base + asPath;

  return {
    canonical,
  };
};
