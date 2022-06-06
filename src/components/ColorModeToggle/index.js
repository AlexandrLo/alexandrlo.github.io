import React from "react";

import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant="ghost" onClick={toggleColorMode}>
      {colorMode === "light" && <SunIcon />}
      {colorMode === "dark" && <MoonIcon />}
    </Button>
  );
}

export default ColorModeToggle;
