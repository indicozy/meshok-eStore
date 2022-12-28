import { Container } from "@chakra-ui/react";

function CustomContainer(props) {
  return (
    <Container
      display="flex"
      gap="1rem"
      px={{ basic: "12px", md: "2rem" }}
      maxW="container.xl"
      minW="mob3"
    >{props.children}</Container>
  );
}

export default CustomContainer;
