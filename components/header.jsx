import React from "react";

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Hide,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  IconSearch,
  IconSunHigh,
  IconMoonStars,
  IconBrandGithub,
} from "@tabler/icons";

import Link from "next/link";
import { header_buttons } from "../dummy-data";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode("");

  return (
    <Box
      bg={useColorModeValue("white", "black")}
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
              <Heading
                as="h1"
                fontSize="2rem"
                color={useColorModeValue("teal_300", "teal_100")}
              >
                e-Store
              </Heading>
            </Link>
          </Box>
          <Flex w={{ md: "600px", basic: "100%" }} mr='1rem'>
            <InputGroup>
              <InputLeftElement children={<IconSearch />} />
              <Input borderRadius="50px" placeholder="Search in Store" />
            </InputGroup>
          </Flex>
          <Hide below="759px">
            <Flex gap="1rem" justifyContent="flex-end" alignItems="center">
              {header_buttons.map((btn, ind) => {
                return (
                  <IconButton
                    key={ind}
                    variant="outline"
                    icon={btn.icon}
                    onClick={() => router.push(btn.link)}
                  />
                );
              })}
              <Box
                borderLeft="1px solid"
                borderColor={useColorModeValue("black", "second_ black")}
                h="30px"
              ></Box>

              {colorMode === "dark" ? (
                <IconButton
                  variant="outline"
                  color={useColorModeValue("second_black", "yellow")}
                  onClick={toggleColorMode}
                  icon={<IconSunHigh />}
                />
              ) : (
                <IconButton
                  variant="outline"
                  color={useColorModeValue("second_black", "yellow")}
                  onClick={toggleColorMode}
                  icon={<IconMoonStars />}
                />
              )}
              <a
                href="https://github.com/sogeking7/react-eStore"
                target="_blank"
              >
                <IconButton variant="outline" icon={<IconBrandGithub />} />
              </a>
            </Flex>
          </Hide>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
