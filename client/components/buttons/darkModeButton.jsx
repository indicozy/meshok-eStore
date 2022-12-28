import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
    />
  );
}
