import React from "react";

import PropTypes from "prop-types";
import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

import Image from "components/Image";
import StatusIndicator from "./StatusIndicator";

Card.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: StatusIndicator.propTypes.status,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    source: PropTypes.string,
  }).isRequired,
};

function Card({ project }) {
  return (
    <LinkBox
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <AspectRatio ratio={16 / 10}>
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          objectPosition="top"
        />
      </AspectRatio>
      <VStack
        borderTopWidth="2px"
        p={{ base: "1rem", md: "1.5rem" }}
        spacing="1rem"
        justify="space-between"
        align="stretch"
        h="100%"
      >
        <Box>
          {/* Heading */}
          <HStack justify="space-between">
            <VStack align="start" spacing={0}>
              <Text color="gray.400" textTransform="uppercase" fontWeight="700">
                {project.category}
              </Text>
              <Heading as="h3" size="h2">
                <LinkOverlay href={project.url}>{project.name}</LinkOverlay>
              </Heading>
            </VStack>
            <StatusIndicator status={project.status} />
          </HStack>
          {/* Decription */}
          <Text>{project.description}</Text>
        </Box>
        {/* Links */}
        <HStack>
          <Button
            as="a"
            href={project.url}
            variant="solid"
            leftIcon={<BsBoxArrowUpRight />}
          >
            Открыть
          </Button>
          <Button
            as="a"
            href={project.source}
            variant="alpha"
            leftIcon={<BsGithub />}
          >
            GitHub
          </Button>
        </HStack>
      </VStack>
    </LinkBox>
  );
}

export default Card;
