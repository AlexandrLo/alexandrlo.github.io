import React, { useContext } from "react";

import {
  Container,
  HStack,
  Show,
  Skeleton,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";

import ColorModeSwitch from "components/ColorModeSwitch";
import ContactsIconButtons from "./ContactsIconButtons";
import { DataContext } from "components/DataProvider";

function Footer() {
  const { portfolioData } = useContext(DataContext);

  return (
    <Show above="md">
      <chakra.footer>
        <Container py="2rem" px="1.5rem">
          <VStack spacing="2rem">
            <HStack w="100%">
              <ContactsIconButtons />
              <Skeleton isLoaded={portfolioData}>
                <Text
                  fontSize="0.875rem"
                  color="gray.400"
                  textAlign="center"
                  whiteSpace="nowrap"
                >
                  {portfolioData?.copyright ?? "© Copyright 2022"}
                </Text>
              </Skeleton>
              <HStack w="100%" justify="flex-end">
                <ColorModeSwitch />
              </HStack>
            </HStack>
          </VStack>
        </Container>
      </chakra.footer>
    </Show>
  );
}

export default Footer;
