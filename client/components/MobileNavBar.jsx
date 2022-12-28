import { ButtonGroup, IconButton, useColorModeValue } from "@chakra-ui/react";

import { IconUser, IconShoppingCart, IconHeart } from "@tabler/icons";

import React from "react";

export default function MobileNavBar() {
  return (
    <ButtonGroup
      bgColor={useColorModeValue("white", "black")}
      position="fixed"
      zIndex="100"
      boxShadow="2xl"
      bottom="0"
      w="100%"
      justifyContent="space-between"
      display={{ basic: "flex", md: "none" }}
      p=".5rem 12px"
    >
      <IconButton variant="ghost" icon={<IconHeart />} />
      <IconButton variant="ghost" icon={<IconShoppingCart />} />
      <IconButton variant="ghost" icon={<IconUser />} />
    </ButtonGroup>
  );
}
