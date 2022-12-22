import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
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
    <Stack
      spacing={useBreakpointValue({ base: "4", md: "5" })}
      overflow="hidden"
      position="relative"
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={1 / 1}>
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
          <p id="title">{title}</p>
          {/* <PriceTag price={price} salePrice={salePrice} currency="USD" /> */}
          <Text fontWeight="bold" fontSize="20px">
            {price}$
          </Text>
        </Stack>
        <HStack>
          {/* <Rating defaultValue={rating} size="sm" /> */}
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="flex-end">
        <Button size='sm'>
          + Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};
