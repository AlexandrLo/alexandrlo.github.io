import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Box, Circle, Tooltip } from "@chakra-ui/react";

StatusIndicator.propTypes = {
  status: PropTypes.oneOf(["FINISHED", "WIP", "PLANING"]),
};

function StatusIndicator({ status }) {
  const [bg, setBg] = useState("gray.400");
  const [name, setName] = useState("Неизвестная стадия");

  useEffect(() => {
    switch (status) {
      default:
        setName("Неизвестная стадия");
        setBg("gray.400");
        break;
      case "PLANING":
        setName("Планирование");
        setBg("red.400");
        break;
      case "WIP":
        setName("В разработке");
        setBg("orange.400");
        break;
      case "FINISHED":
        setName("Завершен");
        setBg("green.400");
        break;
    }
  }, [status]);

  return (
    <Tooltip label={name} hasArrow>
      <Box borderWidth="2px" borderRadius="full" zIndex={1}>
        <Circle boxSize="1rem" bg={bg} />
      </Box>
    </Tooltip>
  );
}

export default StatusIndicator;
