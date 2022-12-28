import {
  Box,
  Drawer,
  DrawerBody,
  Hide,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
  DrawerCloseButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { useState } from "react";

import CustomContainer from "../custom_ui/CustomContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Filter from "../components/pages/home/Filter";
import ProductGrid from "../components/pages/home/ProductGrid";
import MobileNavBar from "../components/MobileNavBar";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <Box bgColor={useColorModeValue("white", "black")}>
      <Header onOpen={onOpen} />
      <MobileNavBar />
      <Box mb="2rem">
        <CustomContainer>
          <Breadcrumb fontSize="sm" fontWeight="bold">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </CustomContainer>
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay motionPresent="none" />
        <DrawerContent bgColor={useColorModeValue("white", "black")}>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>
          <DrawerBody>
            <Filter />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box mb="5rem">
        <CustomContainer>
          <Hide below="759px">
            <Filter />
          </Hide>
          <ProductGrid />
        </CustomContainer>
      </Box>
      <Footer />
    </Box>
  );
}
