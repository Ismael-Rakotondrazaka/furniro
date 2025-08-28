import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import type { Props } from '~/components/feature/FeatureListItem.vue';

import FeatureListItem from '~/components/feature/FeatureListItem.vue';

describe('FeatureListItem', () => {
  const createWrapper = async (props: Props) => {
    return await mountSuspended(FeatureListItem, {
      props,
    });
  };

  describe('Rendering', () => {
    it('renders feature item structure correctly', async () => {
      const wrapper = await createWrapper({
        iconName: 'internal:trophy',
        subtitle: 'crafted from top materials',
        title: 'High Quality',
      });

      expect(wrapper.find('.feature-item').exists()).toBe(true);
      expect(wrapper.find('.feature-item__icon').exists()).toBe(true);
      expect(wrapper.find('.feature-item__content').exists()).toBe(true);
      expect(wrapper.find('.feature-item__title').exists()).toBe(true);
      expect(wrapper.find('.feature-item__subtitle').exists()).toBe(true);
    });
  });

  describe('Props', () => {
    it('displays correct title', async () => {
      const wrapper = await createWrapper({
        iconName: 'internal:trophy',
        subtitle: 'crafted from top materials',
        title: 'High Quality',
      });

      expect(wrapper.find('.feature-item__title').text()).toBe('High Quality');
    });

    it('displays correct subtitle', async () => {
      const wrapper = await createWrapper({
        iconName: 'internal:trophy',
        subtitle: 'crafted from top materials',
        title: 'High Quality',
      });

      expect(wrapper.find('.feature-item__subtitle').text()).toBe('crafted from top materials');
    });
  });

  describe('Semantic HTML', () => {
    it('uses semantic heading element for title', async () => {
      const wrapper = await createWrapper({
        iconName: 'internal:trophy',
        subtitle: 'crafted from top materials',
        title: 'High Quality',
      });

      const title = wrapper.find('.feature-item__title');
      expect(title.element.tagName).toBe('H3');
    });

    it('uses semantic paragraph element for subtitle', async () => {
      const wrapper = await createWrapper({
        iconName: 'internal:trophy',
        subtitle: 'crafted from top materials',
        title: 'High Quality',
      });

      const subtitle = wrapper.find('.feature-item__subtitle');
      expect(subtitle.element.tagName).toBe('P');
    });
  });

  describe('Content Structure', () => {
    it('has icon and content sections', async () => {
      const wrapper = await createWrapper({
        iconName: 'internal:trophy',
        subtitle: 'crafted from top materials',
        title: 'High Quality',
      });

      const iconSection = wrapper.find('.feature-item__icon');
      const contentSection = wrapper.find('.feature-item__content');

      expect(iconSection.exists()).toBe(true);
      expect(contentSection.exists()).toBe(true);
    });

    it('content section contains title and subtitle', async () => {
      const wrapper = await createWrapper({
        iconName: 'internal:trophy',
        subtitle: 'crafted from top materials',
        title: 'High Quality',
      });

      const contentSection = wrapper.find('.feature-item__content');
      const title = contentSection.find('.feature-item__title');
      const subtitle = contentSection.find('.feature-item__subtitle');

      expect(title.exists()).toBe(true);
      expect(subtitle.exists()).toBe(true);
    });
  });
});
