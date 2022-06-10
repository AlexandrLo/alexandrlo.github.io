import React, { useRef } from "react";

import { BsList } from "react-icons/bs";
import { Button, Hide, VisuallyHidden, useDisclosure } from "@chakra-ui/react";

import Drawer from "./Drawer";

function FAB() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Hide above="md">
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="blur"
        position="fixed"
        bottom="3rem"
        right="2rem"
        px="0"
        boxSize="4rem"
        borderRadius="full"
        zIndex={2}
      >
        <BsList size={32} />
        <VisuallyHidden>Menu</VisuallyHidden>
      </Button>
      <Drawer {...{ isOpen, onClose, btnRef }} />
    </Hide>
  );
}

export default FAB;
