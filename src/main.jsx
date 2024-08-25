import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Become from './pages/Become';
import Pricing from './pages/Pricing';
import Service from './pages/Service';
import Teams from './pages/Teams';
import Design from './pages/Design';
import Developpement from './pages/Developpement';
import Music from './pages/Music';
import Programming from './pages/Programming';
import Digital from './pages/Digital';
import Finance from './pages/Finance';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Help from './pages/Help';
import Register from './pages/Register';
import Login from './pages/Login';
import Forget from './pages/Forget';
import Freelancer from './pages/Freelancer';
import Add from './pages/Add';
import NewProfile from './pages/NewProfile';
import ViewCart from './pages/ViewCart';

const router = createBrowserRouter([
  {
    path: "",
    element: <Root /> ,
    errorElement: <ErrorPage />,
    children:
      [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/become",
          element: <Become />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/teams",
          element: <Teams />,
        },
        {
          path: "/design",
          element: <Design />,
        },
        {
          path: "/developpement",
          element: <Developpement />,
        },
        {
          path: "/music",
          element: <Music />,
        },
        {
          path: "/program",
          element: <Programming />,
        },
        {
          path: "/digital",
          element: <Digital />,
        },
        {
          path: "/finance",
          element: <Finance />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/forget",
          element: <Forget />,
        },
        {
          path: "/freelance",
          element: <Freelancer />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/newprofile",
          element: <NewProfile />,
        },
        {
          path: "/viewcart",
          element: <ViewCart />,
        },
      ]
    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
