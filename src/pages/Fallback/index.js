import React from "react";

import { Spinner, VStack } from "@chakra-ui/react";

function Fallback() {
  return (
    <VStack flex="1 0 100%" justify="center">
      <Spinner size="xl" />
    </VStack>
  );
}

export default Fallback;
