import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it, vi } from 'vitest';

import HeroSection from '~/components/hero/HeroSection.vue';

vi.mock('~/components/button/ButtonBase.vue', () => ({
  default: {
    name: 'ButtonBase',
    template: '<button class="button-base">BUY NOW</button>',
  },
}));

describe('HeroSection', () => {
  const createWrapper = async () => {
    return await mountSuspended(HeroSection);
  };

  describe('Rendering', () => {
    it('renders hero section structure correctly', async () => {
      const wrapper = await createWrapper();

      expect(wrapper.find('.hero-section').exists()).toBe(true);
      expect(wrapper.find('.hero-section__container').exists()).toBe(true);
      expect(wrapper.find('.hero-section__content-box').exists()).toBe(true);
    });

    it('renders hero content elements', async () => {
      const wrapper = await createWrapper();

      expect(wrapper.find('.hero-section__tagline').exists()).toBe(true);
      expect(wrapper.find('.hero-section__title').exists()).toBe(true);
      expect(wrapper.find('.hero-section__text').exists()).toBe(true);
      expect(wrapper.find('.hero-section__button').exists()).toBe(true);
    });
  });

  describe('Semantic HTML', () => {
    it('uses semantic section element', async () => {
      const wrapper = await createWrapper();
      const section = wrapper.find('.hero-section');

      expect(section.element.tagName).toBe('SECTION');
    });

    it('uses semantic heading element', async () => {
      const wrapper = await createWrapper();
      const title = wrapper.find('.hero-section__title');

      expect(title.element.tagName).toBe('H1');
    });

    it('uses semantic paragraph elements', async () => {
      const wrapper = await createWrapper();
      const tagline = wrapper.find('.hero-section__tagline');
      const text = wrapper.find('.hero-section__text');

      expect(tagline.element.tagName).toBe('P');
      expect(text.element.tagName).toBe('P');
    });
  });
});
