import React from "react";
import {Flex, Text} from '@chakra-ui/react'
import ColorModeButton from "./darkModeButton";
import Link from 'next/link'
function Logo() {
  return (
    <Flex alignItems="center">
      <Link href="/">
        <Text fontFamily="heading" fontWeight="600" fontSize="2rem">
          e-store
        </Text>
      </Link>
      
    </Flex>
  );
}

export default Logo;
