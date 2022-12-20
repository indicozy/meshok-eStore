import { Button, useColorMode } from "@chakra-ui/react";

function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

export default ColorModeButton;
