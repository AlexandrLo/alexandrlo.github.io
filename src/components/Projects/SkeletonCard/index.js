import React from "react";

import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import CardTemplate from "../CardTemplate";

function SkeletonCard() {
  return (
    <CardTemplate
      image={<Skeleton boxSize="100%" />}
      category={
        <HStack h="1.5rem">
          <Skeleton h="1rem" w="7rem" />
        </HStack>
      }
      name={
        <HStack h={["36px", "39px", "42px", "45px", "48px"]}>
          <Skeleton h={["24px", "26px", "28px", "30px", "32px"]} w="10rem" />
        </HStack>
      }
      status={<SkeletonCircle boxSize="1rem" />}
      description={
        <SkeletonText
          mt="0.25rem"
          noOfLines={4}
          spacing="0.5rem"
          skeletonHeight="1rem"
        />
      }
      links={
        <>
          <Skeleton h="2.25rem" w="6.25rem" />
          <Skeleton h="2.25rem" w="6.25rem" />
        </>
      }
    />
  );
}

export default SkeletonCard;
