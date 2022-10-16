import React from 'react';

import LoginButton from '../components/LoginButton';
import http from '../config/axiosGlobalConfig';
import useAuth from '../hooks/useAuth';

function Home() {
  const { isLogin } = useAuth();

  const handleSearch = async () => {
    try {
      const response = await http.get('/search', {
        params: {
          q: 'i drink wine',
          type: 'track',
        },
      });

      console.log(response);
    } catch (error) {
      console.error('🚨 ERROR :', error);
    }
  };
  return (
    <div>
      {!isLogin ? <LoginButton /> : <div>Login success.</div>}
      <button type='button' className='btn-secondary text-2xl px-3 rounded-md'>
        Submit
      </button>
    </div>
  );
}

export default Home;
