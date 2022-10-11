import clsx from 'clsx';
import React from 'react';
import { BsSpotify } from 'react-icons/bs';

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
        <button
          type='button'
          className={clsx('btn', 'flex', 'gap-2', 'text-lg')}
        >
          <BsSpotify className='text-brand' size={24} />
          <span>Login</span>
        </button>
      </div>
    </div>
  );
}

export default App;
