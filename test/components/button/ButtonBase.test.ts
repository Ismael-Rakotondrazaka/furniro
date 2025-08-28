import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import ButtonBase from '~/components/button/ButtonBase.vue';

describe('ButtonBase', () => {
  const createWrapper = async (props = {}, slots = {}) => {
    return await mountSuspended(ButtonBase, {
      props,
      slots,
    });
  };

  describe('Rendering', () => {
    it('renders with default props', async () => {
      const wrapper = await createWrapper();
      expect(wrapper.find('.button').exists()).toBe(true);
      expect(wrapper.classes()).toContain('button--primary');
      expect(wrapper.classes()).toContain('button--medium');
    });

    it('renders with custom text content', async () => {
      const wrapper = await createWrapper({}, { default: () => 'Click me' });
      expect(wrapper.text()).toBe('Click me');
      expect(wrapper.find('.button__content').exists()).toBe(true);
    });

    it('renders as different HTML tag', async () => {
      const wrapper = await createWrapper({ tag: 'a' });
      expect(wrapper.element.tagName).toBe('A');
    });
  });

  describe('Button Types', () => {
    it('applies primary type class', async () => {
      const wrapper = await createWrapper({ type: 'primary' });
      expect(wrapper.classes()).toContain('button--primary');
    });

    it('applies secondary type class', async () => {
      const wrapper = await createWrapper({ type: 'secondary' });
      expect(wrapper.classes()).toContain('button--secondary');
    });
  });

  describe('Button Sizes', () => {
    it('applies large size class', async () => {
      const wrapper = await createWrapper({ size: 'large' });
      expect(wrapper.classes()).toContain('button--large');
    });

    it('applies medium size class', async () => {
      const wrapper = await createWrapper({ size: 'medium' });
      expect(wrapper.classes()).toContain('button--medium');
    });

    it('applies small size class', async () => {
      const wrapper = await createWrapper({ size: 'small' });
      expect(wrapper.classes()).toContain('button--small');
    });
  });

  describe('Button States', () => {
    it('applies disabled state', async () => {
      const wrapper = await createWrapper({ disabled: true });
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('applies loading state', async () => {
      const wrapper = await createWrapper({ loading: true });
      expect(wrapper.classes()).toContain('button--loading');
    });

    it('applies text variant class', async () => {
      const wrapper = await createWrapper({ text: true });
      expect(wrapper.classes()).toContain('button--text');
    });
  });

  describe('Icon Handling', () => {
    it('renders icon slot when provided', async () => {
      const wrapper = await createWrapper({}, { icon: () => h('span', 'Icon') });
      expect(wrapper.find('.button__icon').exists()).toBe(true);
      expect(wrapper.text()).toContain('Icon');
    });

    it('applies icon-only class when only icon slot is provided', async () => {
      const wrapper = await createWrapper({}, { icon: () => h('span', 'Icon') });
      expect(wrapper.classes()).toContain('button--icon');
    });

    it('applies left icon placement class', async () => {
      const wrapper = await createWrapper({ iconPlacement: 'left' }, { icon: () => h('span', 'Icon') });
      expect(wrapper.classes()).toContain('button--icon-left');
    });

    it('applies right icon placement class', async () => {
      const wrapper = await createWrapper({ iconPlacement: 'right' }, { icon: () => h('span', 'Icon') });
      expect(wrapper.classes()).toContain('button--icon-right');
    });

    it('does not render icon when loading is true', async () => {
      const wrapper = await createWrapper({ loading: true }, { icon: () => h('span', 'Icon') });
      expect(wrapper.text()).not.toContain('Icon');
    });
  });

  describe('Combined Props', () => {
    it('combines multiple props correctly', async () => {
      const wrapper = await createWrapper({
        disabled: true,
        size: 'large',
        text: true,
        type: 'secondary',
      });

      expect(wrapper.classes()).toContain('button--secondary');
      expect(wrapper.classes()).toContain('button--large');
      expect(wrapper.classes()).toContain('button--text');
      expect(wrapper.attributes('disabled')).toBeDefined();
    });
  });
});
