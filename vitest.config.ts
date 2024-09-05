import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      reporters: ['verbose', 'html'],
      name: 'happy-dom',
      environment: 'happy-dom',
      setupFiles: './test/setupTests.js',
      coverage: {
        provider: 'istanbul',
        enabled: true,
        reportsDirectory: '../coverage',
        reporter: ['text', 'html', 'json'],
        all: true,
        include: ['src/**/*.{js,jsx,ts,tsx}'],
        exclude: ['node_modules/**', 'test/**', 'coverage/**', 'src/routes'],
      },
    },
  })
);
