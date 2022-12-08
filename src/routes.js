import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/contact";
import Database from "./components/dataBase";
import Component from "./components/MainComponents/Component";

const Setup = () => {
  return useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/dataBase",
      element: <Database />,
    },
    {
      path: "/Component",
      element: <Component />,
    },
  ]);
};

export default Setup;
