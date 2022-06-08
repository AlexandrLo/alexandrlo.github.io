import React from "react";

import SVG from "react-inlinesvg";
import { Button, HStack, Tooltip, VisuallyHidden } from "@chakra-ui/react";

import portfolioData from "assets/json/portfolio.json";

function ContactsIconButtons() {
  return (
    <HStack spacing="1rem" w={{ base: "auto", md: "100%" }}>
      {portfolioData.contacts.map((contact) => (
        <Tooltip key={contact.href} label={contact.name} hasArrow>
          <Button as="a" href={contact.href} variant="ghost" size="sm">
            <SVG src={contact.icon} fill="currentColor" />
            <VisuallyHidden>{contact.name}</VisuallyHidden>
          </Button>
        </Tooltip>
      ))}
    </HStack>
  );
}

export default ContactsIconButtons;
