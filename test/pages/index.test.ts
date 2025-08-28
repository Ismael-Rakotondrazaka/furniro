import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it, vi } from 'vitest';

import IndexPage from '~/pages/index.vue';

vi.mock('~/components/hero/HeroSection.vue', () => ({
  default: {
    name: 'HeroSection',
    template: '<section class="hero-section">Hero Section</section>',
  },
}));

vi.mock('~/components/browse-range/BrowseRangeSection.vue', () => ({
  default: {
    name: 'BrowseRangeSection',
    template: '<section class="browse-range-section">Browse Range Section</section>',
  },
}));

vi.mock('~/components/product/ProductDescriptionSection.vue', () => ({
  default: {
    name: 'ProductDescriptionSection',
    template: '<section class="product-description-section">Product Description Section</section>',
  },
}));

vi.mock('~/components/feature/FeatureSection.vue', () => ({
  default: {
    name: 'FeatureSection',
    template: '<section class="feature-section">Feature Section</section>',
  },
}));

describe('Index Page', () => {
  const createWrapper = async () => {
    return await mountSuspended(IndexPage);
  };

  describe('Rendering', () => {
    it('renders page structure correctly', async () => {
      const wrapper = await createWrapper();

      expect(wrapper.find('.home').exists()).toBe(true);
    });

    it('renders all main sections', async () => {
      const wrapper = await createWrapper();

      expect(wrapper.find('.hero-section').exists()).toBe(true);
      expect(wrapper.find('.browse-range-section').exists()).toBe(true);
      expect(wrapper.find('.product-description-section').exists()).toBe(true);
      expect(wrapper.find('.feature-section').exists()).toBe(true);
    });

    it('renders section breaks', async () => {
      const wrapper = await createWrapper();
      const sectionBreaks = wrapper.findAll('.section-break');

      expect(sectionBreaks).toHaveLength(3);
    });
  });

  describe('Component Order', () => {
    it('renders components in correct order', async () => {
      const wrapper = await createWrapper();
      const sections = wrapper.findAll('section');

      expect(sections[0].classes()).toContain('hero-section');
      expect(sections[1].classes()).toContain('browse-range-section');
      expect(sections[2].classes()).toContain('product-description-section');
      expect(sections[3].classes()).toContain('feature-section');
    });

    it('has section breaks between main sections', async () => {
      const wrapper = await createWrapper();
      const children = wrapper.find('.home').findAll('*');

      const sectionBreakIndices = children
        .map((child, index) => child.classes().includes('section-break') ? index : -1)
        .filter(index => index !== -1);

      expect(sectionBreakIndices).toHaveLength(3);
    });
  });

  describe('Semantic HTML', () => {
    it('uses semantic section elements', async () => {
      const wrapper = await createWrapper();
      const sections = wrapper.findAll('section');

      sections.forEach((section) => {
        expect(section.element.tagName).toBe('SECTION');
      });
    });

    it('uses semantic hr elements for section breaks', async () => {
      const wrapper = await createWrapper();
      const sectionBreaks = wrapper.findAll('.section-break');

      sectionBreaks.forEach((breakElement) => {
        expect(breakElement.element.tagName).toBe('HR');
      });
    });
  });
});
