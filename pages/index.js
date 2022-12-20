import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";

import Header from "../components/header";
import Category from "../components/home/Filter";
import ProductGrid from "../components/home/ProductGrid";
export default function Home() {
  const dm_bg = useColorModeValue("white", "black");

  return (
    <Box bgColor={dm_bg} h="100vh">
      <Header />
      <Container
        display="flex"
        gap="1rem"
        px={{ basic: "12px", md: "2rem" }}
        pt={{ md: "80px", basic: "143px" }}
        maxW="container.xl"
        minW="mob3"
        bgColor={dm_bg}
        pb="5rem"
      >
        <Category />
        <ProductGrid />
      </Container>
    </Box>
  );
}
