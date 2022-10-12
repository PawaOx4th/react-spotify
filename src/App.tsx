import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { BsSpotify } from 'react-icons/bs';
import LoginButton from './components/LoginButton';

const formatText = (..._arg: string[]) => {
  const result = _arg.map((element) => element.trim());
  return result;
};

function App() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    let mounted = false;
    const { hash } = window.location;
    let isToken = localStorage.getItem('token');
    if (hash && !isToken) {
      isToken =
        hash
          .substring(1)
          .split('&')
          .find((word) => word.startsWith('access_token'))
          ?.split('=')[1] ?? null;

      if (!isToken) return;

      localStorage.setItem('token', isToken);
      !mounted && setToken(isToken);
    }

    if (isToken) {
      setToken(isToken);
    }

    return () => {
      mounted = true;
    };
  }, []);

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
        {!token && <LoginButton />}
      </div>
    </div>
  );
}

export default App;
