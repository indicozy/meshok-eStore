import {
  Text,
  Container,
  IconButton,
  VStack,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";

import { BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
function Footer() {
  return (
    <Container
      maxW="container.xl"
      as="footer"
      role="contentinfo"
      py={{ base: "20", md: "16" }}
    >
      <VStack justify="space-between" direction="row" align="center">
        <Text fontSize="0.875rem">Made with ❤️ by sogeking7</Text>
        <ButtonGroup variant="ghost" spacing="">
          <IconButton
            variant="ghost"
            as="a"
            href="https://github.com/sogeking7/next-eStore"
            aria-label="GitHub"
            icon={<FaGithub />}
          />
          <IconButton
            variant="ghost"
            as="a"
            href="https://t.me/kair011a"
            aria-label="Telegram"
            icon={<BsTelegram />}
          />
          <IconButton
            variant="ghost"
            as="a"
            href="mailto:kairolla222@gmail.com"
            aria-label="Mail"
            icon={<MdMail />}
          />
        </ButtonGroup>
      </VStack>
    </Container>
  );
}

export default Footer;
