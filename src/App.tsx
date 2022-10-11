import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { BsSpotify } from 'react-icons/bs';

const formatText = (..._arg: string[]) => {
  const result = _arg.map((element) => element.trim());
  return result;
};

export const SPOTIFY_AUTHENTICATE = `${
  import.meta.env.VITE_SPOTIFY_AUTHENTICATE_URL
}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${
  import.meta.env.VITE_REDIRECT_URI
}&response_type=${import.meta.env.VITE_RESPONSE_TYPE}`;

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
        <a
          role='button'
          href={SPOTIFY_AUTHENTICATE}
          className={clsx('btn', 'flex', 'gap-2', 'text-lg')}
        >
          <BsSpotify title='icon-spotify' className='text-brand' size={24} />
          <span>Login</span>
        </a>
      </div>
    </div>
  );
}

export default App;
