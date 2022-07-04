import React from "react";

import PropTypes from "prop-types";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { Button, Heading, LinkOverlay, Text } from "@chakra-ui/react";

import CardTemplate from "../CardTemplate";
import Image from "components/Image";
import StatusIndicator from "../StatusIndicator";

ProjectCard.propTypes = {
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

function ProjectCard({ project }) {
  return (
    <CardTemplate
      image={
        <Image
          path={project.image}
          alt={`${project.name} screenshot`}
          objectPosition="top"
        />
      }
      category={
        <Text color="gray.400" textTransform="uppercase" fontWeight="700">
          {project.category}
        </Text>
      }
      name={
        <Heading as="h3" size="h2">
          <LinkOverlay href={project.url}>{project.name}</LinkOverlay>
        </Heading>
      }
      status={<StatusIndicator status={project.status} />}
      description={<Text>{project.description}</Text>}
      links={
        <>
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
        </>
      }
    />
  );
}

export default ProjectCard;
