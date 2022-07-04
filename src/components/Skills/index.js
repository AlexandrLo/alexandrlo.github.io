import React, { useContext } from "react";

import { Container, Heading, Wrap, WrapItem, chakra } from "@chakra-ui/react";

import Chip from "./Chip";
import { DataContext } from "components/DataProvider";
import SkeletonChips from "./SkeletonChips";

function Skills() {
  const { portfolioData } = useContext(DataContext);

  return (
    <chakra.section>
      <Container px={{ base: "1rem", md: "1.5rem" }} py="2rem">
        <Heading as="h2" size="h2" pb={{ base: "1rem", md: "1.5rem" }}>
          Ключевые навыки
        </Heading>
        <Wrap spacing={{ base: "0.75rem", md: "1rem" }}>
          {portfolioData ? (
            portfolioData?.skills.map((skill) => (
              <WrapItem key={skill}>
                <Chip text={skill} />
              </WrapItem>
            ))
          ) : (
            <SkeletonChips amount={18} />
          )}
        </Wrap>
      </Container>
    </chakra.section>
  );
}

export default Skills;
