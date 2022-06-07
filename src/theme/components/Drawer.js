import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => {
    const { isFullHeight } = props;

    return {
      dialog: {
        ...(isFullHeight && { height: "100vh" }),
        zIndex: "modal",
        maxH: "100vh",
        bg: mode("white", "black")(props),
        color: "inherit",
        boxShadow: mode("lg", "dark-lg")(props),
      },
      closeButton: {
        position: "absolute",
        top: "1rem",
        insetEnd: "1rem",
      },
      body: {
        px: "1rem",
        py: "4rem",
      },
      footer: {
        px: "1rem",
        py: "2rem",
      },
    };
  },
};
