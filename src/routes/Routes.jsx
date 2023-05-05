import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "../libs/shared/Header";
import Screen from "../layout/Screen";
import Home from "../libs/home/Home";
import LogIn from "../context/LogIn";
import Register from "../context/Register";
import ErrorPage from "../libs/404/ErrorPage";
import Blog from "../libs/blog/Blog";

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
        path: "/blog/:id",
        element: <Blog/>,
        loader: ({params}) => fetch(`http://localhost:5000/v3/${params.id}`),
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
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
