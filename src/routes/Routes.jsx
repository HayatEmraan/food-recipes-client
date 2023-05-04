import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "../libs/shared/Header";
import Screen from "../layout/Screen";
import Home from "../libs/home/Home";
import LogIn from "../context/LogIn";
import Register from "../context/Register";
import ErrorPage from "../libs/404/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <h2>coming soon</h2>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage/>,
      },
    ],
  },
]);

export default router;
