import {
  GridItem,
  AspectRatio,
  Box,
  Image,
  Text,
  Flex,
  Icon,
	useColorModeValue,
  Heading
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import Link from 'next/link'
export default function MainItem(props) {
  const { id, title, image, value, currency } = props;
  const dm_text = useColorModeValue('black', 'white');

  return (
    <GridItem
      key={id}
      h="min-content"
      pos="relative"
      overflow="visible"
      borderTopRadius="2xl"
    >
      <Link href={'/item/' + id} _hover={{ textDecoration: "none" }}>
        <AspectRatio display="flex" ratio={1}>
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
  );
}
