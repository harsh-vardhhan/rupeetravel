// components/ChakraWrapper.js
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import theme from "../styles/theme";

export default function ChakraWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show a loading state or basic styling until client hydration
  if (!isClient) {
    return (
      <div
        style={{
          backgroundColor: "#1A202C",
          color: "#E2E8F0",
          minHeight: "100vh",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
}
