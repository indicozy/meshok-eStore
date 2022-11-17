import {
  Flex,
  Box,
  Image,
  AspectRatio,
  Text,
  Heading,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { IconDots } from "@tabler/icons";
import { StarIcon } from "@chakra-ui/icons";
import Link from 'next/link'

export default function WishlistItem(props) {
  const { id, title, image, description, value, currency } = props;
  const dm_text = useColorModeValue("black", "white");
  const dm_hover = useColorModeValue("second_white", "second_black");
  const dm_bg = useColorModeValue("white", "black");

  return (
    <Link href={'/item/' + id} >
      <Flex
      key={id}
      gap="1rem"
      height="min-content"
      pos="relative"
      overflow="visible"
      borderTopRadius="2xl"
      flexDirection="row"
    >
      <AspectRatio
        display="flex"
        ratio={{ mob3: 1, basic: 1 }}
        width={{ md: "30%", mob1: "30%", mob2: "50%", basic: "70%" }}
      >
        <Image borderRadius="2xl" src={image} alt={title}></Image>
      </AspectRatio>
      <Box pt="0.3rem" width="100%" color={dm_text}>
        <Text overflow="hidden" maxHeight="40px" mb="0.4rem" lineHeight="20px">
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
        <Flex pos="absolute" bottom="0" right="0" justifyContent="flex-end">
          <Button
            bgColor={dm_bg}
            _hover={{ bgColor: dm_hover }}
            _active="none"
            px="0"
            borderRadius="50px"
          >
            <IconDots />
          </Button>
        </Flex>
      </Box>
    </Flex>
    </Link>
  );
}
