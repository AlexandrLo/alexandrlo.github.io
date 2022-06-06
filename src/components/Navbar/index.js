import React from "react";

import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  HStack,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";

import ColorModeToggle from "components/ColorModeToggle";
import Logo from "assets/react-logo.svg";

function Navbar() {
  const bg = useColorModeValue("gray.50", "gray.900");
  return (
    <chakra.header bg={bg} w="100%">
      <Container maxW="container.md" py={5} align="center">
        <HStack justify="space-between">
          <HStack spacing={10}>
            <Link as={RouterLink} to="/">
              <HStack>
                <Logo height="2rem" />
                <VisuallyHidden>Logo</VisuallyHidden>
              </HStack>
            </Link>

            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/about">
              About
            </Link>
          </HStack>
          <ColorModeToggle />
        </HStack>
      </Container>
    </chakra.header>
  );
}

export default Navbar;
