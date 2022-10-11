/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SPOTIFY_AUTHENTICATE_URL: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_RESPONSE_TYPE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
