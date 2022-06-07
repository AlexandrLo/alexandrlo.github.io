import React from "react";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { HStack, Switch, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack color="gray.400">
      <BsMoonFill size={20} />
      <Switch onChange={toggleColorMode} isChecked={colorMode === "light"} />
      <BsSunFill size={20} />
    </HStack>
  );
}

export default ColorModeSwitch;
