export interface DownloadConfig {
  version: string;
  appTitle: string;
  filename: string;
  minAndroid: string;
  minApi: number;
  releaseType: 'debug-artifact' | 'release-apk' | 'pending';
  directApkUrl: string;
  actionsArtifactUrl: string;
  releasesUrl: string;
  repoUrl: string;
  statusLabel: string;
  availabilityDisclosure: string;
  checksumSha256: string;
  fileSizeBytes: string;
  updatedDate: string;
}

const env = import.meta.env;

export const downloadConfig: DownloadConfig = {
  version: env.VITE_APP_VERSION || '1.0.0',
  appTitle: 'CipherGrid',
  filename: env.VITE_APK_FILENAME || 'CipherGrid-v1.0.0.apk',
  minAndroid: env.VITE_MIN_ANDROID || 'Android 7.0 (Nougat) or higher',
  minApi: Number(env.VITE_MIN_API) || 24,
  releaseType: 'release-apk',
  directApkUrl:
    env.VITE_APK_DIRECT_URL ||
    'https://github.com/Sho-jii/CipherGrid/releases/download/V1/CipherGrid-v1.0.0.apk',
  actionsArtifactUrl:
    env.VITE_ACTIONS_URL || 'https://github.com/Sho-jii/CipherGrid/actions',
  releasesUrl:
    env.VITE_RELEASES_URL || 'https://github.com/Sho-jii/CipherGrid/releases/tag/V1',
  repoUrl: env.VITE_REPO_URL || 'https://github.com/Sho-jii/CipherGrid',
  statusLabel: `Official GitHub Release v${env.VITE_APP_VERSION || '1.0.0'} (${env.VITE_APK_FILE_SIZE || '53.5 MB'})`,
  availabilityDisclosure: 'Official GitHub Release · Not on Google Play',
  checksumSha256:
    env.VITE_APK_SHA256 ||
    '8eb1940f5abde60fb2073241eda03e6bac921bf9eecbc6b07d89a96992e53e03',
  fileSizeBytes: env.VITE_APK_FILE_SIZE || '53.5 MB',
  updatedDate: 'October 2026',
};
