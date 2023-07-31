import React, {  } from 'react'
import Main from './Main';
import Login from './Auth/Login';
import Sign from './Auth/Sign';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import PollCreate from './Poll/PollCreate';
  import PollList from './Poll/PollList';
  import PollResult from './Poll/PollResult';
import RouteNotFound from './Poll/RouteNotFound';
const Layout = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main/>,
          children: [
            {
              path:'create',
              element: <PollCreate/>
            },
            {
              path: 'list',
              element:<PollList/>
            },
            {
              path: 'result',
              element:<PollResult/>
            },
            {
                element: <RouteNotFound/>
            }
      
          ]
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/sign',
            element: <Sign/>
        }
      ]);
    return (
        <div>
             <RouterProvider router={router} />
           
        </div>
    )
}

export default Layout
