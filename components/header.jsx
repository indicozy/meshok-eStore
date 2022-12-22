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
  Button,
  Flex,
} from "@chakra-ui/react";

import { IconUser, IconShoppingCart, IconFilter } from "@tabler/icons";

import Link from "next/link";
import { useRouter } from "next/router";
import { SearchIcon } from "@chakra-ui/icons";
import ColorModeButton from "./buttons/darkModeButton";

function Header(props) {
  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue("white", "black")}
      overflow="hidden"
      position="fixed"
      w="100%"
      zIndex="100"
    >
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
          justifyContent={{ basic: "space-between", md: "flex-start" }}
          alignItems="center"
          w={{ basic: "100%", md: "300px" }}
        >
          <Link href="/">
            <Box fontFamily="heading" fontWeight="600" fontSize="2rem">
              e-store
            </Box>
          </Link>
          <Box display={{ basic: "block", md: "none" }}>
            <ColorModeButton />
          </Box>
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
          <InputGroup w="100%" mr={{ basic: "0", md: "12px" }}>
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input placeholder="Search in Store" />
          </InputGroup>
        </Box>
        <Box gap=".5rem" display={{ basic: "none", md: "flex" }}>
          <IconButton variant="ghost" icon={<IconShoppingCart />} />
          <Menu>
            <MenuButton as={Button} leftIcon={<IconUser />}>
              You
            </MenuButton>
          </Menu>
          <ColorModeButton />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
