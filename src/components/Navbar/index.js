import React from "react";

import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Container,
  HStack,
  Heading,
  Link,
  Show,
  Text,
  Tooltip,
  VStack,
  VisuallyHidden,
  chakra,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Contacts from "./Contacts";
import LogoBlack from "assets/logo/logo-black.svg";
import LogoWhite from "assets/logo/logo-white.svg";
import portfolioData from "assets/json/portfolio.json";

function Navbar() {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.800");

  return (
    <chakra.header
      borderBottomWidth="2px"
      position="sticky"
      top="0"
      bg={bg}
      backdropFilter="auto"
      backdropBlur={"8px"}
      zIndex={2}
    >
      <Container
        py={{ base: "1rem", md: "1.5rem" }}
        px={{ base: "1rem", md: "1.5rem" }}
        align="center"
      >
        <HStack justify="space-between">
          {/* Left Links */}
          <Link as={RouterLink} to="/">
            <HStack spacing="1rem">
              {colorMode === "light" && <LogoBlack />}
              {colorMode === "dark" && <LogoWhite />}
              <VisuallyHidden>Logo</VisuallyHidden>
              <VStack align="start" textAlign="start" spacing={0}>
                <Heading as="h3" size="h3">
                  {portfolioData.navbar.heading}
                </Heading>
                <Text>{portfolioData.navbar.lead}</Text>
              </VStack>
            </HStack>
          </Link>
          {/* Right Links */}
          <Show above="md">
            <HStack>
              <Tooltip label="Скачать CV" hasArrow>
                <Button
                  as="a"
                  href={portfolioData.cv}
                  variant="alpha"
                  size="lg"
                >
                  <BsFileEarmarkArrowDownFill size={20} />
                </Button>
              </Tooltip>
              <Contacts />
            </HStack>
          </Show>
        </HStack>
      </Container>
    </chakra.header>
  );
}

export default Navbar;
