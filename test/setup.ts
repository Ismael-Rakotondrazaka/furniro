import { vi } from 'vitest';

vi.mock('~/assets/scss/main.scss', () => ({}));

vi.mock('~/assets/scss/components/button', () => ({}));

vi.mock('~/assets/scss/abstracts/variables.scss', () => ({
  default: {
    '$breakpoint-desktop': 1024,
    '$breakpoint-large': 1200,
    '$breakpoint-tablet': 768,
    '$color-primary': '#B88E2F',
    '$color-primary-dark': '#A67C1F',
    '$color-white': '#FFFFFF',
    '$font-family-primary': 'Poppins, sans-serif',
    '$spacing-2xl': '4rem',
    '$spacing-3xl': '6rem',
    '$spacing-lg': '2rem',
    '$spacing-md': '1.5rem',
    '$spacing-sm': '1rem',
    '$spacing-xl': '3rem',
    '$spacing-xs': '0.5rem',
  },
}));

vi.mock('~/assets/scss/abstracts/typography.scss', () => ({
  default: {
    textLarge: () => ({}),
    textMedium: () => ({}),
    textPrimary: () => ({}),
  },
}));

vi.mock('~/assets/scss/abstracts/mixins.scss', () => ({
  default: {
    responsiveContainer: () => ({}),
  },
}));

vi.mock('~/assets/images/hero/hero-illustration.jpg', () => 'mock-image-url');

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));
