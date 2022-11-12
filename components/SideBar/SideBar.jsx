import React from 'react';
import {
  Box,
  ListItem,
  UnorderedList,
	Heading,
	useColorModeValue
} from '@chakra-ui/react';

function SideBar() {
	const dm_hover = useColorModeValue("second_white", "second_black");
	const dm_text = useColorModeValue('black', "white");
  const dm_text_hover = useColorModeValue('black','#AEFEFF');
	const bgHeading = useColorModeValue('black', 'white');
  return (
    <Box maxW="25%" minW='25%' letterSpacing='.02em' display={{md: 'block', basic: 'none'}}>
			<Heading fontSize='20px' pb='0.6rem' color={bgHeading}>Categories</Heading>
      <UnorderedList listStyleType="none" p='0' m='0' position='relative' right='0.5rem' color={dm_text}>
        <ListItem py='0.6rem' cursor='pointer' borderRadius='25px' pl='0.5rem' pr='0.2rem' _hover={{boxShadow: 'xs', bgColor: dm_hover, color: dm_text_hover}} >Electronics</ListItem>
        <ListItem py='0.6rem' cursor='pointer' borderRadius='25px' pl='0.5rem' pr='0.2rem' _hover={{boxShadow: 'xs', bgColor: dm_hover, color: dm_text_hover}} >Computer and office</ListItem>
        <ListItem py='0.6rem' cursor='pointer' borderRadius='25px' pl='0.5rem' pr='0.2rem' _hover={{boxShadow: 'xs', bgColor: dm_hover, color: dm_text_hover}} >Mobile phones and accessories</ListItem>
        <ListItem py='0.6rem' cursor='pointer' borderRadius='25px' pl='0.5rem' pr='0.2rem' _hover={{boxShadow: 'xs', bgColor: dm_hover, color: dm_text_hover}} >Tools</ListItem>
        <ListItem py='0.6rem' cursor='pointer' borderRadius='25px' pl='0.5rem' pr='0.2rem' _hover={{boxShadow: 'xs', bgColor: dm_hover, color: dm_text_hover}} >Sports and entertainment</ListItem>
      </UnorderedList>
    </Box>
  );
}

export default SideBar;
