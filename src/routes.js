import React, { lazy } from "react";

const About = lazy(() => import("pages/About"));
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
  {
    path: "/about",
    page: <About />,
  },
];

export default routes;
