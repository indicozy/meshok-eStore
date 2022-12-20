import {
  Box,
  Button,
  Text,
  Flex,
  VStack,
  RangeSlider,
  RangeSliderFilledTrack,
  InputGroup,
  InputLeftElement,
  RangeSliderTrack,
  RangeSliderThumb,
  Input,
} from "@chakra-ui/react";

import Link from "next/link";
const category = [
  {
    id: "0",
    title: "Computers",
  },
  {
    id: "1",
    title: "Smartphones",
  },
  {
    id: "2",
    title: "Accessors",
  },
  {
    id: "3",
    title: "Keyboards",
  },
  {
    id: "4",
    title: "Headphones",
  },
  {
    id: "5",
    title: "Books",
  },
];

function Filter() {
  return (
    <VStack w="40%" display={{ md: "block", basic: "none" }} spacing="5">
      <Box w="75%">
        <Text fontWeight="bold" mb=".5em">
          Price range
        </Text>
        <RangeSlider
          defaultValue={[0, 100]}
          min={0}
          max={100}
          mb=".5rem"
          colorScheme="teal"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={5} index={0} />
          <RangeSliderThumb boxSize={5} index={1} />
        </RangeSlider>
        <Flex gap=".5rem">
          <Input placeholder="$0" />
          <Input placeholder="$100" />
        </Flex>
      </Box>
      <Box>
        <Text fontWeight="bold" pb=".5em">
          Categories
        </Text>
        <Flex wrap="wrap" gap=".5rem">
          {category.map((item) => (
            <Button size="xs" key={item.id}>
              {item.title}
            </Button>
          ))}
        </Flex>
      </Box>
    </VStack>
  );
}

export default Filter;
