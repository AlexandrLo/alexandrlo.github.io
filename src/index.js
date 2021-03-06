import React from "react";
import { createRoot } from "react-dom/client";

import { HashRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import { DataProvider } from "components/DataProvider";
import theme from "theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <HashRouter>
        <DataProvider>
          <App />
        </DataProvider>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
