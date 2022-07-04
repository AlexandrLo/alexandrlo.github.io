import React, { useContext } from "react";

import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import {
  Button,
  Container,
  HStack,
  Heading,
  Show,
  SkeletonText,
  Text,
  Tooltip,
  VStack,
  VisuallyHidden,
  chakra,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Contacts from "./Contacts";
import { DataContext } from "components/DataProvider";
import LogoBlack from "assets/logo/logo-black.svg";
import LogoWhite from "assets/logo/logo-white.svg";

function Navbar() {
  const { portfolioData } = useContext(DataContext);
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
      >
        <HStack justify="space-between">
          {/* Left Links */}
          <HStack spacing="1rem">
            {colorMode === "light" && <LogoBlack />}
            {colorMode === "dark" && <LogoWhite />}
            <SkeletonText
              isLoaded={portfolioData}
              noOfLines={2}
              skeletonHeight="1.25rem"
              spacing="0.875rem"
              minW="12rem"
            >
              <VStack align="start" spacing={0}>
                <Heading as="h3" size="h3">
                  {portfolioData?.name}
                </Heading>
                <Text>{portfolioData?.position}</Text>
              </VStack>
            </SkeletonText>
          </HStack>
          {/* Right Links */}
          <Show above="md">
            <HStack>
              <Tooltip label="Скачать CV" hasArrow>
                <Button
                  as="a"
                  href={portfolioData?.cv}
                  variant="alpha"
                  size="lg"
                >
                  <BsFileEarmarkArrowDownFill size={20} />
                  <VisuallyHidden>Скачать CV</VisuallyHidden>
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
