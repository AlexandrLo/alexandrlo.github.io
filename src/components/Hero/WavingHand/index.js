import React, { useEffect } from "react";

import { Box } from "@chakra-ui/react";
import { animated, easings, useSpring } from "@react-spring/web";

import HandEmoji from "assets/icons/hand-emoji.svg";

function WavingHand() {
  const [styles, api] = useSpring(() => ({
    from: { rotateZ: 0 },
  }));

  const wave = () => {
    api.start({
      to: [
        { rotateZ: 20 },
        { rotateZ: -15 },
        { rotateZ: 10 },
        { rotateZ: -5 },
        { rotateZ: 0 },
      ],
      config: {
        duration: 250,
        easing: easings.easeInOutQuad,
      },
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      wave();
    }, 1000);
    const intervalId = setInterval(wave, 7000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Box ml="0.5rem" display="inline-block" userSelect="none" onClick={wave}>
      <animated.div
        style={{
          display: "inline-block",
          transformOrigin: "80% 80%",
          ...styles,
        }}
      >
        <HandEmoji style={{ display: "inline" }} />
      </animated.div>
    </Box>
  );
}

export default WavingHand;
