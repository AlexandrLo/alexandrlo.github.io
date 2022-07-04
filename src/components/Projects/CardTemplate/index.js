import React from "react";

import PropTypes from "prop-types";
import { AspectRatio, Box, HStack, LinkBox, VStack } from "@chakra-ui/react";

CardTemplate.propTypes = {
  image: PropTypes.node,
  category: PropTypes.node,
  name: PropTypes.node,
  status: PropTypes.node,
  description: PropTypes.node,
  links: PropTypes.node,
};

function CardTemplate({ image, category, name, status, description, links }) {
  return (
    <LinkBox
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <AspectRatio ratio={16 / 10}>{image}</AspectRatio>
      <VStack
        borderTopWidth="2px"
        p={{ base: "1rem", md: "1.5rem" }}
        spacing="1rem"
        justify="space-between"
        align="stretch"
        h="100%"
      >
        <Box>
          <HStack justify="space-between">
            <VStack align="start" spacing={0}>
              {category}
              {name}
            </VStack>
            {status}
          </HStack>
          {description}
        </Box>
        <HStack>{links}</HStack>
      </VStack>
    </LinkBox>
  );
}

export default CardTemplate;
