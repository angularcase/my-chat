import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mychat.mobile',
  appName: 'My Chat',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
