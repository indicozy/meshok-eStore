import React from "react";

import {
  Box,
  Container,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Menu,
  MenuButton,
  HStack,
  Button,
  Flex,
  ButtonGroup,
  Icon,
} from "@chakra-ui/react";

import {
  IconUser,
  IconShoppingCart,
  IconFilter,
  IconHeart,
} from "@tabler/icons";

import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import ColorModeButton from "./buttons/darkModeButton";
import Logo from "./buttons/Logo";

function Header(props) {
  const router = useRouter();

  return (
    <Box bg={useColorModeValue("white", "black")} w="100%">
      <Container
        h={{ md: "60px", basic: "130px" }}
        display="flex"
        maxW="container.xl"
        minW="mob3"
        px={{ basic: "12px", md: "2rem" }}
        overflow="hidden"
        flexDirection={{ basic: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ md: "space-between" }}
      >
        <Flex
          mt={{ basic: "1.2rem", md: "0" }}
          mb={{ basic: "12px", md: "0" }}
          mr={{ basic: "0", md: "2rem" }}
          minW="max-content"
          w={{ basic: "100%", md: "max-content" }}
          justifyContent="space-between"
        >
          <Logo />
          <Box display={{md:'none'}}><ColorModeButton/></Box>
        </Flex>
        <Box
          w={{ md: "670px", basic: "100%" }}
          display={{ md: "block", basic: "flex" }}
          gap=".5rem"
        >
          <IconButton
            display={{ md: "none", basic: "flex" }}
            onClick={props.onOpen}
            icon={<IconFilter />}
          />
          <InputGroup w="100%">
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input
              placeholder="Search in Store"
              mr={{ basic: "0", md: "2rem" }}
            />
          </InputGroup>
        </Box>
        <ButtonGroup gap=".5rem" display={{ basic: "none", md: "flex" }}>
          <IconButton variant="ghost" icon={<IconHeart />} />
          <IconButton variant="ghost" icon={<IconShoppingCart />} />
          <IconButton variant="ghost" icon={<IconUser/>} />
        </ButtonGroup>
      </Container>
    </Box>
  );
}

export default Header;
