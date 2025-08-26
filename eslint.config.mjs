import perfectionist from 'eslint-plugin-perfectionist';

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  [
    {
      rules: {
        'no-console': [
          'error',
          {
            allow: [
              'info',
              'warn',
              'trace',
              'error',
              'group',
              'groupEnd',
              'time',
              'timeEnd',
            ],
          },
        ],
      },
    },
    // @link https://perfectionist.dev/configs/recommended-alphabetical
    perfectionist.configs['recommended-alphabetical'],
  ],
);
