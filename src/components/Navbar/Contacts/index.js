import React from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import SVG from "react-inlinesvg";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import portfolioData from "assets/json/portfolio.json";

function Contacts() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="solid"
        size="lg"
        rightIcon={<ChevronDownIcon />}
      >
        Контакты
      </MenuButton>
      <MenuList>
        {portfolioData.contacts.map((contact) => (
          <MenuItem key={contact.name} as="a" href={contact.href}>
            <HStack spacing="1rem">
              <SVG src={contact.icon} fill="currentColor" />
              <Text>{contact.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default Contacts;
