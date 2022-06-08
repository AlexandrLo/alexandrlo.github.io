import React, { useState } from "react";

import PropTypes from "prop-types";
import {
  Box,
  Image as ChakraImage,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";
import { animated, config, useTransition } from "@react-spring/web";

function Image({ src, alt, ...rest }) {
  const [isLoading, setIsLoading] = useState(true);

  const transitions = useTransition(isLoading, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  const start = useColorModeValue("gray.100", "gray.600");
  const end = useColorModeValue("gray.200", "gray.500");

  return (
    <Box position="relative" boxSize="100%">
      <ChakraImage
        src={src}
        alt={alt}
        position="relative"
        fit="cover"
        boxSize="100%"
        fallback={<Box bg={start} borderRadius="1rem" />}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <Skeleton
                position="absolute"
                top={0}
                left={0}
                zIndex={0}
                boxSize="100%"
                opacity={1}
                startColor={start}
                endColor={end}
              />
            </animated.div>
          ),
      )}
    </Box>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
