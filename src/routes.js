import React, { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));

const routes = [
  {
    path: "*",
    page: <NotFound />,
  },
  {
    path: "/404",
    page: <NotFound />,
  },
  {
    path: "/",
    page: <Home />,
  },
];

export default routes;
