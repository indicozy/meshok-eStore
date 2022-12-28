import {
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <Flex
      h="100vh"
      w="100%"
      bgColor={ useColorModeValue("white", "black")}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="1rem"
    >
      <b>404 Page not found</b>
      <Link href="/">
        <Button>Go Back</Button>
      </Link>
    </Flex>
  );
}

