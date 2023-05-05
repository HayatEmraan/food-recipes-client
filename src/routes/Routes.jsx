import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "../libs/shared/Header";
import Screen from "../layout/Screen";
import Home from "../libs/home/Home";
import LogIn from "../context/LogIn";
import Register from "../context/Register";
import ErrorPage from "../libs/404/ErrorPage";
import Blog from "../libs/blog/Blog";
import PrivateRoute from "../privateRoute/PrivateRoute";
import BlogV2 from "../libs/blog/BlogV2";

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
        element: <BlogV2 />,
        loader: () => fetch("http://localhost:5000/v5"),
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-recipe-web.vercel.app/v3/${params.id}`),
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
