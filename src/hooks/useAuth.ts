import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function useAuth() {
  const [token, setToken] = useState<string | null>(null);

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    let mounted = false;
    const tokenExpire = localStorage.getItem('token_expire');

    /**
     *
     * If check token expires in local.
     */
    if (tokenExpire) {
      const expiresIn = dayjs()
        .add(+tokenExpire, 'second')
        .unix();

      const isExpired = dayjs.unix(expiresIn).diff(dayjs()) < 1;
      if (isExpired && !mounted) {
        setIsLogin(false);
        return;
      }

      /**
       *
       * check hash and manage token.
       */
      const { hash } = window.location;
      let hasToken = localStorage.getItem('token');
      if (hash && !hasToken) {
        hasToken =
          hash
            .substring(1)
            .split('&')
            .find((word) => word.startsWith('access_token'))
            ?.split('=')[1] ?? null;
        const expiresSecond =
          hash
            .substring(1)
            .split('&')
            .find((word) => word.startsWith('expires_in'))
            ?.split('=')[1] ?? 0;

        if (!hasToken) return;

        const isExpireIn = dayjs()
          .add(+expiresSecond, 'second')
          .unix();
        localStorage.setItem('token', hasToken);
        localStorage.setItem('token_expire', `${isExpireIn}`);
        !mounted && setToken(hasToken);
      }

      if (hasToken) {
        !mounted && setToken(hasToken);
      }
    } else {
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