import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import Header from "../../components/header/header";
import SideBar from "../../components/orderList/sidebar";
import Wishlist from "../../components/wishlist/wishlist";
import { getListOfFavorites } from "../../dummy-data";
import MobileFooter from "../../components/mobile-footer/mobile-footer";
import { getListOfItems } from "../../dummy-data";
import { user } from "../../dummy-data";
export default function WishlistPage() {
  const items = getListOfItems();
  const wishlist = items.filter(a => user.wishlist.find(b => a.id == b));
  console.log(wishlist);
  const dm_bg = useColorModeValue("white", "black");
  return (
    <Box>
      <Header />
      <Box
        w="100%"
        pt={{ basic: "135px", md: "75px" }}
        bgColor={dm_bg}
        pb="60px"
      >
        <Container
          display="flex"
          gap="1rem"
          px={{ md: "2rem", basic: "12px" }}
          maxW="1280px"
          minW="mob3"
        >
          <SideBar />
          <Box w={{ fl: "60%", mob3: "100%" }}>
            <Heading mb="1rem">Favorites</Heading>
            <Wishlist list={wishlist} />
          </Box>
        </Container>
      </Box>
      <MobileFooter />
    </Box>
  );
}
