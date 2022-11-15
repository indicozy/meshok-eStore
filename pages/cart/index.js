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

import CartSideBar from "../../components/cart/sidebar";
import Header from "../../components/header/header";
import { getListOfItems } from "../../dummy-data";
import MobileFooter from "../../components/mobile-footer/mobile-footer";
import CartItemList from "../../components/cart/cart-item-list";

function LoginPage() {
 
  const dm_bg = useColorModeValue("white", "black");
  const itemsList = getListOfItems();
  return (
    <Box>
      <Header />
      <Box w="100%" pt={{ basic: "135px", md: "75px" }} bgColor={dm_bg} pb='60px'>
        <Container
          display="flex"
          gap="1rem"
          px={{ md: "2rem", basic: "12px" }}
          maxW="1280px"
          minW="mob3"
        >
          <CartSideBar />
          <Box w={{fl:'60%', mob3:'100%'}}>
            <Heading mb="1rem">Favorites</Heading>
            <CartItemList list={itemsList}/>
          </Box>
        </Container>
      </Box>
			<MobileFooter />
    </Box>
  );
}

export default LoginPage;
