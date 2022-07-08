import React from "react";

import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import FAB from "components/FAB";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import routes from "routes";

export default function App() {
  return (
    <>
      <Flex direction="column" position="relative" minH="100vh" spacing="0">
        <Navbar />
        <FAB />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.page} />
          ))}
        </Routes>
        <Footer />
      </Flex>
    </>
  );
}
