import React from "react";

import { Container, Heading, VStack } from "@chakra-ui/react";

function NotFound() {
  return (
    <Container maxW="container.md" py={4}>
      <VStack>
        <Heading>Page not Found</Heading>
      </VStack>
    </Container>
  );
}

export default NotFound;
