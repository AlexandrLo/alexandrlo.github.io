import React from "react";

import { Container, Spinner, VStack } from "@chakra-ui/react";

function Fallback() {
  return (
    <Container maxW="container.md" py={4}>
      <VStack>
        <Spinner size="xl" />
      </VStack>
    </Container>
  );
}

export default Fallback;
