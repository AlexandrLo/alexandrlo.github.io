import React from "react";

import SVG from "react-inlinesvg";
import { Button, HStack } from "@chakra-ui/react";

import portfolioData from "assets/json/portfolio.json";

function SocialButtons() {
  return (
    <HStack spacing="1rem" w={{ base: "auto", md: "100%" }}>
      {portfolioData.contacts.map((contact) => (
        <Button
          key={contact.href}
          as="a"
          href={contact.href}
          variant="ghost"
          size="sm"
        >
          <SVG src={contact.icon} fill="currentColor" />
        </Button>
      ))}
    </HStack>
  );
}

export default SocialButtons;
