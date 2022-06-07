import React from "react";

import { BsCloudDownloadFill } from "react-icons/bs";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import {
  Button,
  Drawer as ChDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import ColorModeSwitch from "components/ColorModeSwitch";
import portfolioData from "assets/json/portfolio.json";

function Drawer({ isOpen, onClose, btnRef }) {
  return (
    <ChDrawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>
          <VStack spacing="1rem">
            {portfolioData.contacts.map((contact) => (
              <Button
                key={contact.name}
                as="a"
                size="lg"
                w="100%"
                variant="outline"
                href={contact.href}
                leftIcon={<SVG src={contact.icon} fill="currentColor" />}
              >
                {contact.name}
              </Button>
            ))}
            <Button
              as="a"
              href={portfolioData.cv}
              variant="alpha"
              size="lg"
              w="100%"
              leftIcon={<BsCloudDownloadFill />}
            >
              Скачать CV
            </Button>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <HStack w="100%">
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
        </DrawerFooter>
      </DrawerContent>
    </ChDrawer>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  btnRef: PropTypes.object.isRequired,
};

export default Drawer;
