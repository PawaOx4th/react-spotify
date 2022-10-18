import {
  ReactPlugin,
  withAITracking,
} from '@microsoft/applicationinsights-react-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import clsx from 'clsx';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import route from './config/routerConfig';

const formatText = (..._arg: string[]) => {
  const result = _arg.map((element) => element.trim());
  return result;
};

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    connectionString: import.meta.env.VITE_AZURE_APP_INSIGNE,
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
  },
});
appInsights.loadAppInsights();

function App() {
  return (
    <div className='App'>
      <div
        className={clsx(
          formatText(
            'container',
            'min-h-screen',
            'mx-auto px-10',
            'flex',
            'justify-center',
            'items-center',
          ),
        )}
      >
        <RouterProvider router={route} />
      </div>
    </div>
  );
}

export default withAITracking(reactPlugin, App);
