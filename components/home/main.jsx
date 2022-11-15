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

import { getListOfItems } from '../../dummy-data';
import MainItemList from './main-item-list';
import Category from './category';

function Main() {
  const cards = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; 
  const itemsList = getListOfItems();
  const dm_bg = useColorModeValue("white", "black");
  return (

    <Box w="100%">
      <Container
        display="flex"
        gap="1rem"
        px={{ md: '2rem', basic: '12px' }}
        pt={{md:'80px', basic:'143px'}}
        maxW="1280px"
        minW="mob3"
        bgColor={dm_bg}
        pb='5rem'
      >
        <Category />
        <MainItemList list={itemsList}/>
      </Container>
    </Box>
  );
}

export default Main;
