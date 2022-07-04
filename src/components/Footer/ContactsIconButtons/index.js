import React, { useContext } from "react";

import SVG from "react-inlinesvg";
import {
  Button,
  HStack,
  SkeletonCircle,
  Tooltip,
  VisuallyHidden,
} from "@chakra-ui/react";

import { DataContext } from "components/DataProvider";

function ContactsIconButtons() {
  const { portfolioData } = useContext(DataContext);

  return (
    <HStack spacing="1rem" w={{ base: "auto", md: "100%" }}>
      {portfolioData ? (
        portfolioData.contacts.map((contact) => (
          <Tooltip key={contact.href} label={contact.name} hasArrow>
            <Button as="a" href={contact.href} variant="ghost" size="sm">
              <SVG src={contact.icon} fill="currentColor" />
              <VisuallyHidden>{contact.name}</VisuallyHidden>
            </Button>
          </Tooltip>
        ))
      ) : (
        <>
          <SkeletonCircle />
          <SkeletonCircle />
          <SkeletonCircle />
          <SkeletonCircle />
        </>
      )}
    </HStack>
  );
}

export default ContactsIconButtons;
