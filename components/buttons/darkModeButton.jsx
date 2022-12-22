import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";

function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
    />
  );
}

export default ColorModeButton;
