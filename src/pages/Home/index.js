import React from "react";

import { Container, Heading, Text, VStack } from "@chakra-ui/react";

function Home() {
  return (
    <Container maxW="container.md" py={4}>
      <VStack align="start" spacing={4}>
        <Heading>Home</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </VStack>
    </Container>
  );
}

export default Home;
