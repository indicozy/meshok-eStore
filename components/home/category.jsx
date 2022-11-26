import {
  Box,
  ListItem,
  UnorderedList,
  Button,
  Heading,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import Link from "next/link";
import { getListOfCategories } from "../../dummy-data";

function Category() {
  const dm_hover = useColorModeValue("second_white", "second_black");
  const dm_text = useColorModeValue("black", "white");
  const dm_text_hover = useColorModeValue("black", "teal_100");
  const bgHeading = useColorModeValue("black", "white");

  const category = getListOfCategories();

  return (
    <Box
      maxW="25%"
      minW="25%"
      letterSpacing=".02em"
      display={{ md: "block", basic: "none" }}
    >
      <Heading fontSize="20px" pb="0.6rem" color={bgHeading}>
        Categories
      </Heading>
      <Flex wrap='wrap' gap='.5rem' color={dm_text}>
        {category.map((item, ind) => (
          <Button
            key={ind}
            px='.5rem'
            fontSize='14px'
            cursor="pointer"
            borderRadius="25px"
            _hover={{
              boxShadow: "xs",
              bgColor: dm_hover,
              color: dm_text_hover,
            }}
          >
            {item.title}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

export default Category;
