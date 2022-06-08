import React from "react";

import {
  Container,
  HStack,
  Show,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";

import ColorModeSwitch from "components/ColorModeSwitch";
import ContactsIconButtons from "./ContactsIconButtons";

function Footer() {
  return (
    <Show above="md">
      <chakra.footer>
        <Container py="2rem" px="1.5rem">
          <VStack spacing="2rem">
            <HStack w="100%">
              <ContactsIconButtons />
              <Text
                fontSize="0.875rem"
                color="gray.400"
                textAlign="center"
                whiteSpace="nowrap"
              >
                © A. Lomachenko 2022
              </Text>
              <HStack w="100%" justify="end">
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
