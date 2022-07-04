import React from "react";

import Home from "pages/Home";
import NotFound from "pages/NotFound";

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
