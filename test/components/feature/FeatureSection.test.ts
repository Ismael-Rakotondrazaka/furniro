import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it, vi } from 'vitest';

import FeatureSection from '~/components/feature/FeatureSection.vue';

vi.mock('~/components/feature/FeatureListItem.vue', () => ({
  default: {
    name: 'FeatureListItem',
    props: ['iconName', 'subtitle', 'title'],
    template: '<div class="feature-list-item" :data-icon="iconName" :data-title="title" :data-subtitle="subtitle">Feature Item</div>',
  },
}));

describe('FeatureSection', () => {
  const createWrapper = async () => {
    return await mountSuspended(FeatureSection);
  };

  describe('Rendering', () => {
    it('renders feature section structure correctly', async () => {
      const wrapper = await createWrapper();

      expect(wrapper.find('.feature-list').exists()).toBe(true);
      expect(wrapper.find('.feature-list__container').exists()).toBe(true);
      expect(wrapper.find('.feature-list__items').exists()).toBe(true);
    });

    it('renders all feature items', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      expect(featureItems).toHaveLength(4);
    });
  });

  describe('Feature Items Data', () => {
    it('renders High Quality feature item', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      const highQualityItem = featureItems.find(item =>
        item.attributes('data-title') === 'High Quality',
      );

      expect(highQualityItem).toBeDefined();
      expect(highQualityItem?.attributes('data-icon')).toBe('internal:trophy');
      expect(highQualityItem?.attributes('data-subtitle')).toBe('crafted from top materials');
    });

    it('renders Warranty Protection feature item', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      const warrantyItem = featureItems.find(item =>
        item.attributes('data-title') === 'Warranty Protection',
      );

      expect(warrantyItem).toBeDefined();
      expect(warrantyItem?.attributes('data-icon')).toBe('internal:warranty');
      expect(warrantyItem?.attributes('data-subtitle')).toBe('Over 2 years');
    });

    it('renders Free Shipping feature item', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      const shippingItem = featureItems.find(item =>
        item.attributes('data-title') === 'Free Shipping',
      );

      expect(shippingItem).toBeDefined();
      expect(shippingItem?.attributes('data-icon')).toBe('internal:shipping');
      expect(shippingItem?.attributes('data-subtitle')).toBe('Order over 150 $');
    });

    it('renders 24/7 Support feature item', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      const supportItem = featureItems.find(item =>
        item.attributes('data-title') === '24 / 7 Support',
      );

      expect(supportItem).toBeDefined();
      expect(supportItem?.attributes('data-icon')).toBe('internal:support');
      expect(supportItem?.attributes('data-subtitle')).toBe('Dedicated support');
    });
  });

  describe('Component Props', () => {
    it('passes correct props to FeatureListItem components', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      const expectedData = [
        {
          iconName: 'internal:trophy',
          subtitle: 'crafted from top materials',
          title: 'High Quality',
        },
        {
          iconName: 'internal:warranty',
          subtitle: 'Over 2 years',
          title: 'Warranty Protection',
        },
        {
          iconName: 'internal:shipping',
          subtitle: 'Order over 150 $',
          title: 'Free Shipping',
        },
        {
          iconName: 'internal:support',
          subtitle: 'Dedicated support',
          title: '24 / 7 Support',
        },
      ];

      featureItems.forEach((item, index) => {
        expect(item.attributes('data-icon')).toBe(expectedData[index].iconName);
        expect(item.attributes('data-title')).toBe(expectedData[index].title);
        expect(item.attributes('data-subtitle')).toBe(expectedData[index].subtitle);
      });
    });
  });

  describe('Semantic HTML', () => {
    it('uses semantic section element', async () => {
      const wrapper = await createWrapper();
      const section = wrapper.find('.feature-list');

      expect(section.element.tagName).toBe('SECTION');
    });
  });

  describe('Data Structure', () => {
    it('has correct number of feature items', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      expect(featureItems).toHaveLength(4);
    });

    it('each feature item has required properties', async () => {
      const wrapper = await createWrapper();
      const featureItems = wrapper.findAll('.feature-list-item');

      featureItems.forEach((item) => {
        expect(item.attributes('data-icon')).toBeDefined();
        expect(item.attributes('data-title')).toBeDefined();
        expect(item.attributes('data-subtitle')).toBeDefined();
      });
    });
  });
});
