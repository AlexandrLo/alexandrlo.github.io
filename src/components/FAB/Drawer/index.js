import React, { useContext } from "react";

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
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";

import ColorModeSwitch from "components/ColorModeSwitch";
import { DataContext } from "components/DataProvider";
import DownloadCVButton from "components/DownloadCVButton";

function Drawer({ isOpen, onClose, btnRef }) {
  const { portfolioData } = useContext(DataContext);

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
            {portfolioData ? (
              <>
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
                <DownloadCVButton />
              </>
            ) : (
              <>
                <Skeleton w="100%" h="3rem" />
                <Skeleton w="100%" h="3rem" />
                <Skeleton w="100%" h="3rem" />
                <Skeleton w="100%" h="3rem" />
                <Skeleton w="100%" h="3rem" />
              </>
            )}
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <HStack w="100%">
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
