import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  IconButton,
  Hide,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useColorModeValue,
  useDisclosure,
  Button,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Header from "../components/header";
import Filter from "../components/home/Filter";
import ProductGrid from "../components/home/ProductGrid";
export default function Home() {
  const dm_bg = useColorModeValue("white", "black");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <Box bgColor={dm_bg} minH="100vh">
      <Header onOpen={onOpen} />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={dm_bg}>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>
          <DrawerBody>
            <Filter />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Container
        display="flex"
        gap="1rem"
        px={{ basic: "12px", md: "2rem" }}
        pt={{ md: "80px", basic: "143px" }}
        maxW="container.xl"
        minW="mob3"
        pb="5rem"
      >
        <Hide below="759px">
          <Filter />
        </Hide>
        <ProductGrid />
      </Container>
    </Box>
  );
}
