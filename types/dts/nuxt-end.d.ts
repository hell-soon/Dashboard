/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
  VITE_API_WEATHER: string
  VITE_API_CITY: string
  VITE_API_GITHUBPROFILE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
