import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../pages/404';
import Home from '../pages/Home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ],
  {},
);

export default router;
