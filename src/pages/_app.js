import "@/styles/globals.css";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Router } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    });

    const handleRouteChange = () => posthog?.capture("$pageview");

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ChakraProvider>
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
    </ChakraProvider>
  );
}
