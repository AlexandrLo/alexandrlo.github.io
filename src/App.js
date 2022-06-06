import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import Fallback from "pages/Fallback";
import Navbar from "components/Navbar";
import routes from "routes";

export default function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Fallback />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.page} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}
