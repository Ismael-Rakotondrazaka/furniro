import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    coverage: {
      provider: 'v8',
    },
    environment: 'nuxt',
    setupFiles: ['./test/setup.ts'],
  },
});
