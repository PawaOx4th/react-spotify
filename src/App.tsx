import clsx from 'clsx';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import route from './config/routerConfig';

const formatText = (..._arg: string[]) => {
  const result = _arg.map((element) => element.trim());
  return result;
};

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

export default App;
