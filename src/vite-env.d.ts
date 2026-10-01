/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION?: string;
  readonly VITE_APK_FILENAME?: string;
  readonly VITE_APK_FILE_SIZE?: string;
  readonly VITE_APK_DIRECT_URL?: string;
  readonly VITE_APK_SHA256?: string;
  readonly VITE_MIN_ANDROID?: string;
  readonly VITE_MIN_API?: string;
  readonly VITE_REPO_URL?: string;
  readonly VITE_RELEASES_URL?: string;
  readonly VITE_ACTIONS_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
