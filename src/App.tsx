import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import { createBrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "./components/nav-bar";
import Home from "./components/home/home";
const router = createBrowserRouter([
  { path: "/", element: <ResponsiveAppBar /> },
  { path: "/home", element: <Home /> },
  {
    path: "/sign-in",
    element: <SignIn />,
  },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
  { path: "*", element: <SignIn /> },
]);
export default router;
