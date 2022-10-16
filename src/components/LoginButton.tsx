import clsx from 'clsx';
import React from 'react';
import { BsSpotify } from 'react-icons/bs';

import SPOTIFY from '../constants';

function LoginButton() {
  return (
    <a
      role='button'
      href={SPOTIFY.AUTHENTICATE}
      className={clsx('btn', 'flex', 'gap-2', 'text-lg')}
    >
      <BsSpotify title='icon-spotify' className='text-brand' size={24} />
      <span>Login</span>
    </a>
  );
}

export default LoginButton;
