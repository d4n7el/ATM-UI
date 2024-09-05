/// <reference types="vite/client" />
/// <reference  types="vite/client"  />
/// <reference  types="vitest"  />
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
