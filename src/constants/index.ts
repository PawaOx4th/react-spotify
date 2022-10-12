const SPOTIFY = {
  AUTHENTICATE: `${import.meta.env.VITE_SPOTIFY_AUTHENTICATE_URL}?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}/&response_type=${
    import.meta.env.VITE_RESPONSE_TYPE
  }`,
};

export default SPOTIFY;
