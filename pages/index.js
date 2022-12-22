import {
  Box,
  Container,
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
import CustomContainer from "../components/CustomContainer";
import Footer from "../components/footer";
import Header from "../components/header";
import Filter from "../components/home/Filter";
import ProductGrid from "../components/home/ProductGrid";
import MobileNav from "../components/mobileNav";
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <Box bgColor={useColorModeValue("white", "black")}>
      <Header onOpen={onOpen} />
      <Box mb='2rem'>
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
      <MobileNav />
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
