import React from "react";

import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Input,
  Hide,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  IconShoppingCart,
  IconSearch,
  IconSunHigh,
  IconBrandGithub,
  IconBox,
  IconMoonStars,
  IconUser,
} from "@tabler/icons";

import Link from 'next/link'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode("");

  const dm_modeToggler = useColorModeValue("second_black", "yellow");
  const dm_text = useColorModeValue("white", "black");
  const dm_logo = useColorModeValue("teal_300", "teal_100");
  const dm_input = useColorModeValue("white", "black");
  const dm_placeholder = useColorModeValue("second_black", "second_white");
  const dm_inputBorder = useColorModeValue("black", "white");
  const dm_button = useColorModeValue("white", "black");
  const dm_icons = useColorModeValue("second_black", "white");
  const dm_verticalLine = useColorModeValue("black", "second_black");
  return (
    <Box
      bgColor={dm_text}
      overflow="hidden"
      position="fixed"
      w="100%"
      zIndex="100"
    >
      <Container
        maxW="1280px"
        minW="mob3"
        px={{ basic: "12px", md: "2rem" }}
        overflow="hidden"
      >
        <Box
          display="flex"
          h={{ md: "60px", basic: "123px" }}
          flexDirection={{ basic: "column", md: "row" }}
          alignItems="center"
          justifyContent={{ md: "space-between" }}
        >
          <Box
            w="304px"
            h="40px"
            display="flex"
            alignItems="center"
            mt={{ basic: "1.2rem", md: "0" }}
            mb={{ basic: "12px", md: "0" }}
            justifyContent={{ basic: "center", md: "flex-start" }}
          >
            <Link href="/">
              <Heading as="h1" fontSize="2rem" color={dm_logo}>
                e-Store
              </Heading>
            </Link>
          </Box>
          <Flex w={{ md: "600px", basic: "100%" }}>
            <Button
              h="40px"
              w="100%"
              _active="none"
              _hover="none"
              borderRadius="100px"
              bg={dm_input}
              borderColor={dm_inputBorder}
              borderWidth="2px"
              mr={{ md: "2rem" }}
            >
              <IconSearch color={dm_inputBorder} />
              <Input
                h="90%"
                placeholder="Search in Store"
                _placeholder={{ color: dm_placeholder }}
                outline="none"
                flexShrink="1"
                focusBorderColor="none"
                border="none"
                w="100%"
              ></Input>
            </Button>
          </Flex>
          <Hide below="759px">
            <Flex gap="1rem" justifyContent="flex-end" alignItems="center">
              <Link href="/login">
                <Button
                  display="flex"
                  justifyContent="center"
                  _hover="none"
                  w="1rem"
                  bgColor={dm_button}
                  _active="none"
                  flexDirection="column"
                >
                  <Icon fontSize="1.4rem">
                    <IconUser />
                  </Icon>
                  <Text fontSize="10px">Sign in</Text>
                </Button>
              </Link>
              <Link href="/orders">
                <Button
                  display="flex"
                  justifyContent="center"
                  _hover="none"
                  w="1rem"
                  bgColor={dm_button}
                  _active="none"
                  flexDirection="column"
                >
                  <Icon fontSize="1.4rem">
                    <IconBox />
                  </Icon>
                  <Text fontSize="10px">Orders</Text>
                </Button>
              </Link>
              <Link href="/cart">
                <Button
                  display="flex"
                  justifyContent="center"
                  _hover="none"
                  w="1rem"
                  bgColor={dm_button}
                  _active="none"
                  flexDirection="column"
                >
                  <Icon fontSize="1.4rem">
                    <IconShoppingCart />
                  </Icon>
                  <Text fontSize="10px">Cart</Text>
                </Button>
              </Link>
              <Box
                borderLeft="1px solid"
                borderColor={dm_verticalLine}
                h="30px"
              ></Box>
              <Button
                display="flex"
                justifyContent="center"
                onClick={() => toggleColorMode()}
                _hover="none"
                w="1rem"
                bgColor={dm_button}
                _active="none"
                flexDirection="column"
                color={dm_modeToggler}
                fontSize="1.4rem"
              >
                {colorMode === "dark" ? (
                  <Icon>
                    <IconSunHigh />
                  </Icon>
                ) : (
                  <Icon>
                    <IconMoonStars />
                  </Icon>
                )}
              </Button>
              <Button
                display="flex"
                justifyContent="center"
                w="1rem"
                bgColor={dm_button}
                _active="none"
                _hover="none"
                flexDirection="column"
              >
                <Link
                  href="https://github.com/sogeking7/react-eStore"
                  isExternal
                  color={dm_icons}
                >
                  <Icon fontSize="1.4rem">
                    <IconBrandGithub />
                  </Icon>
                </Link>
              </Button>
            </Flex>
          </Hide>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
