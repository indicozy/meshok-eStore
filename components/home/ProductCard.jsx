import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
// import { Rating } from './Rating'
import { FavouriteButton } from "../buttons/FavouriteButton";
// import { PriceTag } from './PriceTag'

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { title, imageUrl, price, salePrice, rating } = product;
  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={2 / 2}>
          <Image
            src={imageUrl}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${title} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1" position="relative">
          <Text
            w="200px"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {title}
          </Text>
          {/* <PriceTag price={price} salePrice={salePrice} currency="USD" /> */}
          <Text>{price}</Text>
        </Stack>
        <HStack>
          {/* <Rating defaultValue={rating} size="sm" /> */}
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="teal" width="full">
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};
