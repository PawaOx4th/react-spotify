import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginButton from '../components/LoginButton';
import useAuth from '../hooks/useAuth';

function Home() {
  const { isLogin } = useAuth();

  return <div>{!isLogin ? <LoginButton /> : <div>Login success.</div>}</div>;
}

export default Home;
