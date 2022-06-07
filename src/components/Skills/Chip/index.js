import React from "react";

import PropTypes from "prop-types";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

function Chip({ text }) {
  const bg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  return (
    <Box
      bg={bg}
      borderRadius="full"
      px={{ base: "0.75rem", md: "1rem" }}
      py={{ base: "0.325rem", md: "0.5rem" }}
    >
      <Text variant="lead">{text}</Text>
    </Box>
  );
}

Chip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Chip;
