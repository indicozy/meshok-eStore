import {
  Box,
  Container,
  Flex,
  Text,
  Icon,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../components/header/header";
import Link from "next/link";
import { IconError404 } from "@tabler/icons";
function FourOhFour() {
  const dm_button = useColorModeValue("teal_400", "teal_100");
  const dm_button_hover = useColorModeValue("teal_400", "teal_200");
  const dm_text = useColorModeValue("white", "black");
  const dm_bg = useColorModeValue("white", "black");
  return (
    <Box h="100vh" w="100%" bgColor={dm_bg}>
      <Header />
      <Container
        h={{ md: "60vh", basic: "60vh" }}
        display="flex"
        px={{ md: "2rem", basic: "12px" }}
        maxW="1280px"
        minW="mob3"
        pt={{ md: "60px", basic: "123px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex alignItems="center" flexDirection="column">
          <Heading fontSize="4rem">
            404
          </Heading>
          <Heading fontSize="1rem" mb="1rem">
            Page not found
          </Heading>
          <Button color={dm_text} bgColor={dm_button} _hover={{bgColor: dm_button_hover}} _active='none'>
            <Link href="/">Go Back</Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default FourOhFour;
