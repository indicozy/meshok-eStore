import React from 'react';
import {
  Flex,
  Show,
  useColorModeValue,
  Button,
  Icon,
  Text,
} from '@chakra-ui/react';

import {IconShoppingCart, IconBox, IconUser, IconLayoutGridAdd, IconHome  } from '@tabler/icons'


function BottomBar() {
  const bgButton = useColorModeValue('#f5f5f5', '#121212');

  const bg = useColorModeValue('#f5f5f5', '#121212');
  return (
    <Show below="md">
      <Flex
        pos="fixed"
        px="12px"
        justifyContent="space-between"
				alignItems='center'
        bottom="0"
        h="60px"
        w="100%"
        bgColor={bg}
      >
        <Button
          _hover="none"
          w="1rem"
          bgColor={bgButton}
          _active="none"
					display='flex'
					flexDirection='column'
        >
          <Icon fontSize="1.6rem">
            <IconHome />
          </Icon>
          <Text fontSize="10px">
            Home  
          </Text>
        </Button>
        <Button
          _hover="none"
          w="1rem"
          bgColor={bgButton}
					display='flex'
					flexDirection='column'
          _active="none"
        >
          <Icon fontSize="1.6rem">
            <IconLayoutGridAdd/>
          </Icon>
          <Text fontSize="10px">
            Categories
          </Text>
        </Button>
        <Button
          _hover="none"
          w="1rem"
					display='flex'
					flexDirection='column'
          bgColor={bgButton}
          _active="none"
        >
          <Icon fontSize="1.6rem">
            <IconShoppingCart />
          </Icon>
					<Text fontSize="10px">
            Cart
          </Text>
        </Button>
        <Button
          _hover="none"
          w="1rem"
          bgColor={bgButton}
					display='flex'
					flexDirection='column'
          _active="none"
        >
          <Icon fontSize="1.6rem">
            <IconUser />
          </Icon>
          <Text fontSize="10px">
            Sign in
          </Text>
        </Button>
      </Flex>
    </Show>
  );
}

export default BottomBar;
