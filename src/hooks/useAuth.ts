import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import helper from '../utils/helper';

export default function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true);

  const location = useLocation();
  useEffect(() => {
    let mounted = false;

    const { hash } = location;
    const hasTokenURL =
      hash
        .substring(1)
        .split('&')
        .find((word) => word.startsWith('access_token'))
        ?.split('=')[1] ?? null;

    /**
     *
     * If check token expires in local.
     */
    const tokenExpire = localStorage.getItem('token_expire');
    if (tokenExpire) {
      const isExpired =
        dayjs.unix(+tokenExpire / 1000).diff(dayjs().unix()) < 1;

      if (isExpired && !mounted) {
        setIsLogin(false);
        return;
      }

      /**
       *
       * check hash and manage token.
       */
      const hasToken = localStorage.getItem('token');
      if (hash && !hasToken) {
        const HAS_TOKEN = helper.getHash(hash, 'access_token', null);

        const expiresSecond = helper.getHash<number>(hash, 'expires_in', 0);

        if (!HAS_TOKEN) return;

        const isExpireIn = dayjs()
          .add(+expiresSecond, 'second')
          .unix();
        if (location.pathname === '/authenticate') {
          localStorage.setItem('token', `${HAS_TOKEN}`);
          localStorage.setItem('token_expire', `${isExpireIn}`);
        }
        !mounted && setToken(hasToken);
      }

      if (hasToken) {
        !mounted && setToken(hasToken);
        return;
      }
      setIsLogin(true);
    }

    if (hasTokenURL) {
      const expiresSecond =
        hash
          .substring(1)
          .split('&')
          .find((word) => word.startsWith('expires_in'))
          ?.split('=')[1] ?? 0;

      if (!hasTokenURL) return;

      const isExpireIn = dayjs()
        .add(+expiresSecond, 'seconds')
        .unix();
      localStorage.setItem('token', hasTokenURL);
      localStorage.setItem('token_expire', `${isExpireIn}`);
      !mounted && setToken(hasTokenURL);

      return;
    }

    if (!hasTokenURL) {
      !mounted && setIsLogin(false);
    }

    return () => {
      mounted = true;
    };
  }, [location]);

  return {
    token,
    isLogin,
  };
}
