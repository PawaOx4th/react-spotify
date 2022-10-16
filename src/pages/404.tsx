import React from 'react';

import useManageRouterError from '../hooks/useManageRouterError';

export default function ErrorPage() {
  const error = useManageRouterError<string | null>();

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.data || error.statusText}</i>
      </p>
    </div>
  );
}
