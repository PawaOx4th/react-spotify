import React from 'react';

import LoginButton from '../components/LoginButton';
import useAuth from '../hooks/useAuth';

function Authenticate() {
  // const { isLogin } = useAuth();
  return (
    <div>
      Authenticate
      <div>
        <div>{!isLogin ? <LoginButton /> : <div>Login success.</div>}</div>
      </div>
    </div>
  );
}

export default Authenticate;
