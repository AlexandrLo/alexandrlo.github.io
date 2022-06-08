import { extendTheme } from "@chakra-ui/react";

import Button from "./components/Button";
import Container from "./components/Container";
import Drawer from "./components/Drawer";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import Text from "./components/Text";
import colors from "./colors";

const theme = extendTheme({
  colors,
  components: {
    Button,
    Container,
    Drawer,
    Heading,
    Switch,
    Text,
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      "chakra-body-text": { _light: "black", _dark: "white" },
      "chakra-body-bg": { _light: "white", _dark: "black" },
      "chakra-border-color": {
        _light: "blackAlpha.100",
        _dark: "whiteAlpha.100",
      },
      "chakra-placeholder-color": { _light: "gray.400", _dark: "gray.400" },
    },
  },
  styles: {
    global: {
      "*, *::before, &::after": {
        WebkitTapHighlightColor: "transparent",
        wordWrap: "break-word",
      },
    },
  },
  fonts: {
    heading: "'IBM Plex Sans', sans-serif",
    body: "'IBM Plex Sans', sans-serif",
  },
  sizes: {
    container: {
      xs: "350px",
      sm: "500px",
      md: "750px",
      lg: "1000px",
      xl: "1200px",
    },
  },
  breakpoints: {
    xs: "350px",
    sm: "500px",
    md: "750px",
    lg: "1000px",
    xl: "1200px",
  },
  radii: {
    base: "0.625rem",
    none: "0",
    sm: "0.25rem",
    md: "0.625rem",
    lg: "1rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "5rem",
    full: "9999px",
  },
});

export default theme;
