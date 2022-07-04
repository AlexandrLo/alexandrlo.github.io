import React, { useContext, useState } from "react";

import PropTypes from "prop-types";
import {
  Box,
  Image as ChakraImage,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";
import { animated, config, useTransition } from "@react-spring/web";
import { getDownloadURL, ref } from "firebase/storage";

import { DataContext } from "components/DataProvider";
import { useEffect } from "react";

function Image({ path, alt, ...rest }) {
  const { storage } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [src, setSrc] = useState(null);

  const transitions = useTransition(isLoading, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    if (storage && path)
      getDownloadURL(ref(storage, path)).then((url) => setSrc(url));
  }, [storage, path]);

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
  path: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
