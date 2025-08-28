import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it, vi } from 'vitest';

import HeaderDefault from '~/components/header/HeaderDefault.vue';

vi.mock('~/components/header/HeaderLogo.vue', () => ({
  default: {
    name: 'HeaderLogo',
    template: '<div class="header-logo">Logo</div>',
  },
}));

vi.mock('~/components/header/HeaderNav.vue', () => ({
  default: {
    name: 'HeaderNav',
    template: '<nav class="header-nav">Navigation</nav>',
  },
}));

vi.mock('~/components/header/HeaderActions.vue', () => ({
  default: {
    name: 'HeaderActions',
    template: '<div class="header-actions">Actions</div>',
  },
}));

vi.mock('~/components/header/HeaderMobileSidebar.vue', () => ({
  default: {
    emits: ['close'],
    name: 'HeaderMobileSidebar',
    props: ['isOpen'],
    template: '<div class="header-mobile-sidebar" :class="{ \'is-open\': isOpen }">Sidebar</div>',
  },
}));

describe('HeaderDefault', () => {
  const createWrapper = async () => {
    return await mountSuspended(HeaderDefault);
  };

  describe('Rendering', () => {
    it('renders header structure correctly', async () => {
      const wrapper = await createWrapper();

      expect(wrapper.find('.header').exists()).toBe(true);
      expect(wrapper.find('.header__container').exists()).toBe(true);
      expect(wrapper.find('.header-logo').exists()).toBe(true);
      expect(wrapper.find('.header-nav').exists()).toBe(true);
      expect(wrapper.find('.header-actions').exists()).toBe(true);
    });

    it('renders menu toggle button', async () => {
      const wrapper = await createWrapper();
      const menuToggle = wrapper.find('.header__menu-toggle');

      expect(menuToggle.exists()).toBe(true);
      expect(menuToggle.find('.header__menu-icon').exists()).toBe(true);
    });

    it('renders mobile sidebar component', async () => {
      const wrapper = await createWrapper();
      const sidebar = wrapper.find('.header-mobile-sidebar');

      expect(sidebar.exists()).toBe(true);
    });
  });

  describe('Menu Toggle Functionality', () => {
    it('initializes with menu closed', async () => {
      const wrapper = await createWrapper();
      const sidebar = wrapper.find('.header-mobile-sidebar');

      expect(sidebar.classes()).not.toContain('is-open');
    });

    it('toggles menu when menu button is clicked', async () => {
      const wrapper = await createWrapper();
      const menuToggle = wrapper.find('.header__menu-toggle');
      const sidebar = wrapper.find('.header-mobile-sidebar');

      await menuToggle.trigger('click');
      expect(sidebar.classes()).toContain('is-open');

      await menuToggle.trigger('click');
      expect(sidebar.classes()).not.toContain('is-open');
    });

    it('closes menu when close event is emitted', async () => {
      const wrapper = await createWrapper();
      const sidebar = wrapper.find('.header-mobile-sidebar');
      const menuToggle = wrapper.find('.header__menu-toggle');

      await menuToggle.trigger('click');
      expect(sidebar.classes()).toContain('is-open');

      await menuToggle.trigger('click');
      expect(sidebar.classes()).not.toContain('is-open');
    });
  });

  describe('Accessibility', () => {
    it('has proper button element for menu toggle', async () => {
      const wrapper = await createWrapper();
      const menuToggle = wrapper.find('.header__menu-toggle');

      expect(menuToggle.element.tagName).toBe('BUTTON');
    });

    it('has proper header semantic element', async () => {
      const wrapper = await createWrapper();
      const header = wrapper.find('header');

      expect(header.exists()).toBe(true);
    });
  });
});
