import {
  Box,
  Button,
  Text,
  Flex,
  VStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Input,
} from "@chakra-ui/react";

import Link from "next/link";
const category = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Computers",
  },
  {
    id: 2,
    title: "Smartphones",
  },
  {
    id: 3,
    title: "Accessors",
  },
  {
    id: 4,
    title: "Keyboards",
  },
  {
    id: 5,
    title: "Headphones",
  },
  {
    id: 6,
    title: "Books",
  },
];

function Filter() {
  return (
    <VStack
      w={{ md: "40%", basic: "100%" }}
      display={{ md: "block" }}
      spacing="5"
      position="relative"
      h="100%"
    >
      <Box w="75%">
        <Text fontWeight="bold" mb=".5em">
          Price range
        </Text>
        <RangeSlider
          defaultValue={[0, 100]}
          min={0}
          max={100}
          mb=".5rem"
          colorScheme="red"
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
      <Box overflow="scroll" h="60vh">
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
      </Box>
      <Button
        position="absolute"
        bottom="0"
        w="100%"
        colorScheme="blue"
        display={{ basic: "block", md: "none" }}
      >
        Apply
      </Button>
    </VStack>
  );
}

export default Filter;
