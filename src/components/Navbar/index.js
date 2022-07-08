import React, { useContext } from "react";

import {
  Container,
  HStack,
  Heading,
  Show,
  SkeletonText,
  Text,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Contacts from "./Contacts";
import { DataContext } from "components/DataProvider";
import DownloadCVButton from "components/DownloadCVButton";
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
          {/* Logo & Heading */}
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
          {/* Buttons */}
          <Show above="md">
            <HStack>
              <DownloadCVButton compact />
              <Contacts />
            </HStack>
          </Show>
        </HStack>
      </Container>
    </chakra.header>
  );
}

export default Navbar;
