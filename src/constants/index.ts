const SCOPES = [
  'user-library-read',
  'user-library-modify',
  'user-read-email',
  'user-read-private',
  'user-read-recently-played',
  'user-top-read',
  'user-read-playback-position',
  'user-follow-read',
  'user-follow-modify',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'playlist-read-private',
  'streaming',
  'app-remote-control',
  'user-read-currently-playing',
  'user-modify-playback-state',
  'user-read-playback-state',
  'ugc-image-upload',
];

const SPOTIFY = {
  AUTHENTICATE: `${import.meta.env.VITE_SPOTIFY_AUTHENTICATE_URL}?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=${
    import.meta.env.VITE_RESPONSE_TYPE
  }&scope=${SCOPES.join(',')}`,
};

export default SPOTIFY;
