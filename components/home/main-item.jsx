import React, { useEffect } from "react";
import {
  GridItem,
  AspectRatio,
  Box,
  Image,
  Text,
  Flex,
  Icon,
  useColorModeValue,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MyTheme } from "../theme";
import { StarIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { user } from "../../dummy-data";
import { IoMdHeartEmpty, IoHeartSharp } from "react-icons/io";
import { RiHeartFill } from "react-icons/ri";
import { getListOfItems } from "../../dummy-data";

export default function MainItem(props) {
  const { id, title, image, value, currency, wishlist, setWishlist } = props;
  const dm_text = useColorModeValue("black", "white");
 

  const getIndex = (itemId) => {
    const f = wishlist.indexOf(itemId);
    return f;
  }
  const toggleLike = (itemId) => {
    const index = getIndex(itemId);
    if (index === -1) {
      setWishlist((prev) => [...prev, itemId]);
    } else {
      setWishlist((prev) => prev.filter((item) => item != itemId));
    }
    user.wishlist = wishlist;
  };

  return (
    <ChakraProvider resetCSS theme={MyTheme}>
      <GridItem
        key={id}
        h="min-content"
        pos="relative"
        overflow="visible"
        borderTopRadius="2xl"
      >
        <Box pos="relative">
          <Button
            pos="absolute"
            minWidth="30px"
            h="30px"
            p="0"
            alignItems="center"
            justifyContent="center"
            top=".5rem"
            right=".5rem"
            zIndex="1"
            bgColor="white"
            borderRadius="50px"
            _hover={{
              bgColor: "white",
              transform: "scale(1.2)",
            }}
            onClick={() => toggleLike(id)}
            fontSize='1.3rem'
          >
            {getIndex(id) === -1 ? 
            <IoMdHeartEmpty color="black"/> : <RiHeartFill color="D82148"/>}
          </Button>
        </Box>
        <Link href={"/item/" + id} _hover={{ textDecoration: "none" }}>
          <AspectRatio ratio={1}>
            <Image borderRadius="2xl" objectFit="cover" src={image}></Image>
          </AspectRatio>
          <Box pt="0.3rem" color={dm_text}>
            <Text
              overflow="hidden"
              maxHeight="40px"
              mb="0.4rem"
              lineHeight="20px"
            >
              {title}
            </Text>
            <Flex
              gap="0.4rem"
              alignItems="center"
              letterSpacing=".02em"
              mb="0.4rem"
            >
              <Icon fontSize="13px">
                <StarIcon />
              </Icon>
              <Text>???</Text>
              <Text>???</Text>
            </Flex>
            <Heading fontSize="20px" h="30px" fontWeight="bold">
              {value} $
            </Heading>
          </Box>
        </Link>
      </GridItem>
    </ChakraProvider>
  );
}
