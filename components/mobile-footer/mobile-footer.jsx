import React from "react";
import {
  Flex,
  Show,
  useColorModeValue,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";

import {
  IconShoppingCart,
  IconUser,
  IconLayoutGridAdd,
  IconHome,
} from "@tabler/icons";

import Link from "next/link";

function MobileFooter() {
  const bgButton = useColorModeValue("white", "black");
  const bg = useColorModeValue("white", "black");

  return (
    <Show below="md">
      <Flex
        pos="fixed"
        px="12px"
        justifyContent="space-between"
        alignItems="center"
        bottom="0"
        h="60px"
        w="100%"
        bgColor={bg}
      >
        <Button
          _hover="none"
          w="1rem"
          bgColor={bgButton}
          _active="none"
          display="flex"
          flexDirection="column"
        >
          <Link href="/">
            <Icon fontSize="1.6rem">
              <IconHome />
            </Icon>
            <Text fontSize="10px">Home</Text>
          </Link>
        </Button>
        <Button
          _hover="none"
          w="1rem"
          bgColor={bgButton}
          display="flex"
          flexDirection="column"
          _active="none"
        >
          <Link href="/">
            <Icon fontSize="1.6rem">
              <IconLayoutGridAdd />
            </Icon>
            <Text fontSize="10px">Categories</Text>
          </Link>
        </Button>
        <Button
          _hover="none"
          w="1rem"
          display="flex"
          flexDirection="column"
          bgColor={bgButton}
          _active="none"
        >
          <Link href="/cart">
            <Icon fontSize="1.6rem">
              <IconShoppingCart />
            </Icon>
            <Text fontSize="10px">Cart</Text>
          </Link>
        </Button>
        <Button
          _hover="none"
          w="1rem"
          bgColor={bgButton}
          display="flex"
          flexDirection="column"
          _active="none"
        >
          <Link href="/">
            <Icon fontSize="1.6rem">
              <IconUser />
            </Icon>
            <Text fontSize="10px">Sign in</Text>
          </Link>
        </Button>
      </Flex>
    </Show>
  );
}

export default MobileFooter;
