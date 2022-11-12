import React from 'react';
import {
  Box,
  Container,
  Grid,
  Image,
  GridItem,
  AspectRatio,
  Icon,
  Link,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';
import SideBar from '../SideBar/SideBar';

function Main() {
  const cards = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; 
  const dm_text = useColorModeValue('black', 'white');
  return (
    <Box w="100%">
      <Container
        display="flex"
        gap="1rem"
        px={{ md: '2rem', basic: '12px' }}
        maxW="1280px"
        minW="mob3"
      >
        <SideBar />
        <Box h="100%" w="100%">
          <Grid
            w="100%"
            templateColumns={{
              basic: '1fr',
              mob3: 'repeat(2, 1fr)',
              mob2: 'repeat(3, 1fr)',
              mob1: 'repeat(4, 1fr)',
              md: 'repeat(3, 1fr)',
              fl: 'repeat(4, 1fr)',
            }}
            columnGap="1rem"
            rowGap="24px"
          >
            {cards.map(() => (
              <GridItem
                h="min-content"
                pos="relative"
                overflow="visible"
                borderTopRadius="2xl"
              >
                <Link href="#" _hover={{ textDecoration: 'none' }}>
                  <AspectRatio display="flex" ratio={1}>
                    <Image
                      borderRadius="2xl"
                      objectFit="cover"
                      src="https://i.insider.com/632c66b0f576c60018fc3421?width=700"
                    ></Image>
                  </AspectRatio>
                  <Box pt="0.3rem" color={dm_text}>
                    <Text
                      overflow="hidden"
                      h="40px"
                      mb="0.4rem"
                      lineHeight="20px"
                    >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, soluta!
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
                    <Text fontSize="20px" h="30px" fontWeight="bold">
                      ??? $
                    </Text>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Main;
