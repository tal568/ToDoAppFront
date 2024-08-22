import SignIn from './components/signIn';
import SignUp from './components/signUp';
 import {createBrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './components/navBar';
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