import { useRouter } from "next/router";
import { getItemById } from "../../dummy-data";

import { Carousel } from "react-responsive-carousel";

import {
  Box,
  Flex,
  Image,
  Heading,
  Container,
  useColorModeValue,
  AspectRatio,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";

import { Link } from "next/link";
import { StarIcon } from "@chakra-ui/icons";
import Header from "../../components/header/header";
import ImageSlider from "../../components/item/image-slider";
import { SlideData } from "../../dummy-data";

import { IconDots, IconHeart, IconArrowBack } from "@tabler/icons";
function ItemId() {
  const dm_bg = useColorModeValue("white", "black");
  const router = useRouter();
  const itemId = router.query.itemId;

  const item = getItemById(itemId);

  if (item == null) {
    return <p>404 error!</p>;
  }

  const image = item.image;
  const title = item.title;
  const value = item.value;
  const description = item.description;
  const dm_buy_button = useColorModeValue('teal_200', 'teal_100');
  const dm_buy_button_hover = useColorModeValue('teal_300', 'teal_200');
  const dm_text_button = useColorModeValue('white', 'black');
  const dm_text = useColorModeValue("black", "white");
  const dm_hover = useColorModeValue("second_white", "second_black");
  console.log(itemId);

  return (
    <Box bgColor={dm_bg}>
      <Header />
      <Box w="100%">
        <Container
          display="flex"
          gap="1rem"
          px={{ md: "2rem", basic: "12px" }}
          pt={{ md: "60px", basic: "123px" }}
          maxW="1280px"
          minW="mob3"
          pb="5rem"
        >
          <Box w={{ md: "100%", basic: "100%" }}>
            <Box>
              <Button
                px="0.7rem"
                _active="none"
                border="2px solid"
                borderColor={dm_bg}
                _hover={{ borderColor: dm_text }}
                borderRadius="20px"
                py="0"
                onClick={() => router.back()}
                display="flex"
                gap=".7rem"
                bgColor={dm_bg}
              >
                <Icon>
                  <IconArrowBack />
                </Icon>
                <Text>Back</Text>
              </Button>
            </Box>
            <Flex
              key={itemId}
              gap="1rem"
              height="min-content"
              pos="relative"
              overflow="visible"
              borderTopRadius="2xl"
              flexDirection="column"
            >
              <Heading overflow="hidden" mb="0.4rem">
                {title}
              </Heading>
              <Flex gap="2rem" flexDirection={{ md: "row", basic: "column" }}>
                <AspectRatio
                  display="flex"
                  ratio={{ mob3: 1, basic: 1 }}
                  width={{
                    md: "40%",
                    mob1: "100%",
                    mob2: "100%",
                    basic: "100%",
                  }}
                >
                  <Image borderRadius="2xl" src={image} alt={title}></Image>
                </AspectRatio>
                <Flex
                  gap="1rem"
                  letterSpacing=".02em"
                  mb="0.4rem"
                  w={{ md: "60%", basic: "100%" }}
                  flexDirection="column"
                >
                  <Heading>{value} $</Heading>

                  <Flex fontSize="1rem" gap=".5rem" alignItems="center">
                    <Icon>
                      <StarIcon />
                    </Icon>
                    <Text>???</Text>
                    <Text>???</Text>
                  </Flex>

                  <Flex gap='1rem'>
                    <Button py='1.5rem' w={{md:'30%', basic:'40%'}} borderRadius='50px' _active='none' border="2px solid"
                borderColor={dm_bg} bgColor={dm_hover}>Add to Cart</Button>
                    <Button border="2px solid"  py='1.5rem' w={{md:'30%', basic:'40%'}} borderRadius='50px' _active='none' _hover={{bgColor: dm_buy_button_hover}} color={dm_text_button} bgColor={dm_buy_button}>Buy now</Button>
                    <Button border="2px solid" borderColor={dm_bg} bgColor={dm_bg} _hover={{bgColor: dm_hover}} px='.8rem' py='1.5rem' borderRadius='100px'> 
                      <Icon fontSize='1.5rem'><IconHeart /></Icon>
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <Box w={{ md: "60%", basic: "100%" }}>
                <Heading fontSize="1.5rem" mb='1rem'>Description</Heading>
                <Text>{description}</Text>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ItemId;
