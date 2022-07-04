import React from "react";

import PropTypes from "prop-types";
import { Skeleton } from "@chakra-ui/react";

SkeletonChips.propTypes = {
  amount: PropTypes.number,
};

function SkeletonChips({ amount = 1 }) {
  return Array(amount)
    .fill()
    .map((_, index) => (
      <Skeleton
        key={index}
        isLoaded={false}
        w={`${Math.random() * (10 - 4) + 4}rem`}
        h={{ base: "2.75rem", md: "3.25rem" }}
        borderRadius="full"
      />
    ));
}

export default SkeletonChips;
