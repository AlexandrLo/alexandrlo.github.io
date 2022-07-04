import React, { useContext } from "react";

import {
  Container,
  HStack,
  Heading,
  Show,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

import { DataContext } from "components/DataProvider";
import IllustrationDark from "assets/illustration/Illustration-dark.svg";
import IllustrationLight from "assets/illustration/Illustration-dark.svg";
import WavingHand from "./WavingHand";

function Hero() {
  const { portfolioData } = useContext(DataContext);
  const { colorMode } = useColorMode();

  return (
    <Container px={{ base: "1rem", md: "1.5rem" }} py="4rem">
      <HStack justify="space-between">
        <VStack align="start" w="100%" maxW="30rem" spacing="1rem">
          <Heading>
            <Skeleton isLoaded={portfolioData} display="inline-block">
              {portfolioData?.greeting ?? "Heading"}
            </Skeleton>
            <WavingHand />
          </Heading>
          <SkeletonText
            skeletonHeight={"1.5rem"}
            noOfLines={3}
            spacing="1rem"
            w="100%"
            isLoaded={portfolioData}
          >
            <Text variant="lead">{portfolioData?.description}</Text>
          </SkeletonText>
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
