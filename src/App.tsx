import SignIn from './shared/signIn';
import SignUp from './shared/signUp';
 import {createBrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './shared/navBar';
const router = createBrowserRouter([
  {path:"/",
  element: <ResponsiveAppBar />
  }
  ,
{
  path: "/sign-in",
  element: <SignIn />,
},

{
  path: "/sign-up",
  element: <SignUp />,
},
{path:'*',
  element: <SignIn />
  
}


])
export default router