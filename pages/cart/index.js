

import {
  Box,
  Flex,
  Container,
  Link,
  AspectRatio,
	Button,
  Image,
  Icon,
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";

import Header from "../../components/header";

function LoginPage() {
 
  const dm_bg = useColorModeValue("white", "black");
  return (
    <Box>
      <Header />
      <Box w="100%" pt={{ basic: "135px", md: "75px" }}  pb='60px'>
        <Container
          display="flex"
          gap="1rem"
          px={{ md: "2rem", basic: "12px" }}
          maxW="1280px"
          minW="mob3"
        >
          <Box w={{fl:'60%', mob3:'100%'}}>
            <Heading mb="1rem">Cart</Heading>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default LoginPage;
