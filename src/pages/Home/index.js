import React from "react";

import { Container } from "@chakra-ui/react";

import Hero from "components/Hero";
import Projects from "components/Projects";
import Skills from "components/Skills";

function Home() {
  return (
    <Container flex="1 0 100%" py={4}>
      <Hero />
      <Skills />
      <Projects />
    </Container>
  );
}

export default Home;
