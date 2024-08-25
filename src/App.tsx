import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";
import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Home from "./components/home/home";
import NotFound from "./components/not-found";
import React from "react";

const NavBarWithOutlet = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWithOutlet />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;