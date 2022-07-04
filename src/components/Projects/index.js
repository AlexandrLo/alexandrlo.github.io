import React, { useContext } from "react";

import { Container, Heading, SimpleGrid, chakra } from "@chakra-ui/react";

import { DataContext } from "components/DataProvider";
import ProjectCard from "./ProjectCard";
import SkeletonCard from "./SkeletonCard";

function Projects() {
  const { portfolioData } = useContext(DataContext);

  return (
    <chakra.section>
      <Container px={{ base: "1rem", md: "1.5rem" }} py="2rem">
        <Heading as="h2" size="h2" pb={{ base: "1rem", md: "1.5rem" }}>
          Проекты
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="1rem">
          {portfolioData ? (
            portfolioData?.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))
          ) : (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}
        </SimpleGrid>
      </Container>
    </chakra.section>
  );
}

export default Projects;
