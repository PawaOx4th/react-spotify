import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import helper from '../utils/helper';

export default function useAuth() {
  const [token, setToken] = useState<string | null>(null);

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const { hash } = window.location;
    let mounted = false;
    const tokenExpire = localStorage.getItem('token_expire');
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
        localStorage.setItem('token', `${HAS_TOKEN}`);
        localStorage.setItem('token_expire', `${isExpireIn}`);
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
  }, []);

  return {
    token,
    isLogin,
  };
}
