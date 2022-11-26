import { Box, useColorModeValue} from "@chakra-ui/react";

import Header from "../components/header";
import Main from "../components/home/main";
import MobileFooter from "../components/mobile-footer/mobile-footer";
import { user } from "../dummy-data";
import { useState, useEffect } from "react";

export default function Home() {
  const dm_bg = useColorModeValue("white", "black");
  const [wishlist, setWishlist] = useState([]);
  
  useEffect(()=>{
    console.log(wishlist);
    user.wishlist = wishlist;
  }, [wishlist]);

  
  return (
    <Box bgColor={dm_bg} >
      <Header />
      <Main wishlist={wishlist} setWishlist={setWishlist}/>
      <MobileFooter />
    </Box>
  );
}
