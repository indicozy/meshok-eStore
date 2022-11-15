import {
  Box,
  ListItem,
  UnorderedList,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from 'next/link'
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
      <UnorderedList
        listStyleType="none"
        p="0"
        m="0"
        position="relative"
        right="0.5rem"
        color={dm_text}
      >
        {category.map((item, ind) => (
          <ListItem
            key={ind}
            py="0.6rem"
            cursor="pointer"
            borderRadius="25px"
            pl="0.5rem"
            pr="0.2rem"
            _hover={{
              boxShadow: "xs",
              bgColor: dm_hover,
              color: dm_text_hover,
            }}
          >
            <Link href={item.link}>
              {item.title}
            </Link>      
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Category;
