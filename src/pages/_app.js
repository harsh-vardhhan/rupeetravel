import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from "nextjs-google-analytics"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GoogleAnalytics strategy="lazyOnload"/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
};