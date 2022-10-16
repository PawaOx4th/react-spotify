import clsx from 'clsx';
import React from 'react';
import LoginButton from './components/LoginButton';
import http from './config/axiosGlobalConfig';
import useAuth from './hooks/useAuth';
// import ReactLogog from "./assets/react.svg"

const formatText = (..._arg: string[]) => {
  const result = _arg.map((element) => element.trim());
  return result;
};

function App() {
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

  // const audio = new Audio(
  //   'https://p.scdn.co/mp3-preview/ce932ee1d3976f30c83f13ca1e39512227b0c560?cid=5751b18e0b4540ec80b030babfa41975',
  // );

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
        {!isLogin ? <LoginButton /> : <div>Login success.</div>}
        <button
          type='button'
          className='btn-secondary text-2xl px-3 rounded-md'
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
