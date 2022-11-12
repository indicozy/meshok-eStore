import React from 'react';
import {
  Box,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';

function TopBar() {
  const dm_bg = useColorModeValue('yellow', "second_black");
  return (
    <Box px={{ basic: '12px', md: '2rem' }}   mb='24px' w='100%'>
    <Container
				cursor='pointer'
        bgColor={dm_bg}
        borderRadius="100px"
        maxW="1216px"
        minW="mob3"
        h="40px"
      ></Container>
    </Box>
  );
}

export default TopBar;
