import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Avia from './pages/Avia';
import AviaInfo from './pages/AviaInfo';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/avia",
    element: <Avia />,
  },
  {
    path: "/avia/info",
    element: <AviaInfo />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />)

