import { Box, useColorModeValue, Heading} from "@chakra-ui/react";

import Header from "../components/header/header";
import Main from "../components/home/main";
import NewsBar from "../components/home/news-bar";
import MobileFooter from "../components/mobile-footer/mobile-footer";

import Link from 'next/link'
export default function Home() {
  const dm_bg = useColorModeValue("white", "black");
  return (
    <Box bgColor={dm_bg}>
      <Header />
      <Main />
      <MobileFooter />
    </Box>
  );
}
