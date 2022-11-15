import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "@chakra-ui/react";
import { MyTheme } from "../components/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={MyTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
