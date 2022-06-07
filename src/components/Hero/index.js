import React from "react";

import {
  Container,
  HStack,
  Heading,
  Show,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

import IllustrationDark from "assets/illustration/Illustration-dark.svg";
import IllustrationLight from "assets/illustration/Illustration-dark.svg";

function Hero() {
  const { colorMode } = useColorMode();

  return (
    <Container px={{ base: "1rem", md: "1.5rem" }} py="4rem">
      <HStack justify="space-between">
        <VStack align="start" maxW="30rem" spacing="1rem">
          <Heading>Привет! 👋</Heading>
          <Text variant="lead">
            Я — frontend разработчик, который любит делать красивые, современные
            веб приложения и учиться новому.
          </Text>
        </VStack>
        <Show above="md">
          {colorMode === "light" && <IllustrationLight />}
          {colorMode === "dark" && <IllustrationDark />}
        </Show>
      </HStack>
    </Container>
  );
}

export default Hero;
