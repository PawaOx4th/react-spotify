import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../pages/404';
import Authenticate from '../pages/Authenticate';
// eslint-disable-next-line import/no-cycle
import Home from '../pages/Home';

const route = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/authenticate',
      element: <Authenticate />,
      errorElement: <ErrorPage />,
    },
  ],
  {},
);

export default route;
