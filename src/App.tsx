import clsx from 'clsx';
import React from 'react';
import LoginButton from './components/LoginButton';
import useAuth from './hooks/useAuth';

const formatText = (..._arg: string[]) => {
  const result = _arg.map((element) => element.trim());
  return result;
};

function App() {
  const { isLogin } = useAuth();

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
        {!isLogin && <LoginButton />}
      </div>
    </div>
  );
}

export default App;
