import { ChakraProvider } from "@chakra-ui/react";
import { MyTheme } from "../components/theme";
import "./styles.css";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={MyTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
