<template>
  <div
    :class="['mobile-sidebar', { 'mobile-sidebar--open': isOpen }]"
    role="dialog"
    aria-modal="true"
    :aria-label="ariaLabel"
    :aria-hidden="!isOpen"
  >
    <div
      class="mobile-sidebar__overlay"
      tabindex="-1"
      @click="closeSidebar"
      @keydown.escape="closeSidebar"
    />
    <div
      ref="sidebarContent"
      class="mobile-sidebar__content"
    >
      <div class="mobile-sidebar__header">
        <HeaderLogo />
        <button
          ref="closeButton"
          class="mobile-sidebar__close"
          :aria-label="closeButtonLabel"
          @click="closeSidebar"
          @keydown.escape="closeSidebar"
        >
          <span class="mobile-sidebar__close-icon" />
        </button>
      </div>

      <nav
        class="mobile-sidebar__nav"
        :aria-label="navLabel"
      >
        <ul class="mobile-sidebar__nav-list">
          <li
            v-for="item in navigationItems"
            :key="item.id"
            class="mobile-sidebar__nav-item"
          >
            <NuxtLink
              :to="item.to"
              class="mobile-sidebar__nav-link"
              :aria-current="item.isActive ? 'page' : undefined"
              @click="handleNavClick"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="mobile-sidebar__actions">
        <h3 class="mobile-sidebar__actions-title">
          {{ actionsTitle }}
        </h3>
        <ul class="mobile-sidebar__actions-list">
          <li
            v-for="action in headerActions"
            :key="action.id"
            class="mobile-sidebar__actions-item"
          >
            <NuxtLink
              :to="action.to"
              class="mobile-sidebar__actions-link"
              :aria-label="action.ariaLabel || action.label"
              @click="handleActionClick"
            >
              <Icon
                size="1.5rem"
                :name="action.icon"
                :aria-hidden="true"
              />
              <span class="mobile-sidebar__actions-text">{{ action.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';

interface Emits {
  close: [];
}

interface HeaderAction {
  ariaLabel?: string;
  icon: string;
  id: string;
  label: string;
  to: string;
}

interface NavigationItem {
  id: string;
  isActive?: boolean;
  label: string;
  to: string;
}

interface Props {
  actionsTitle?: string;
  ariaLabel?: string;
  closeButtonLabel?: string;
  headerActions?: HeaderAction[];
  isOpen: boolean;
  navigationItems?: NavigationItem[];
  navLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  actionsTitle: 'Quick Actions',
  ariaLabel: 'Mobile navigation menu',
  closeButtonLabel: 'Close navigation menu',
  headerActions: () => [
    {
      ariaLabel: 'Go to account page',
      icon: 'internal:account-alert-outline',
      id: 'account',
      label: 'Account',
      to: '/account',
    },
    {
      ariaLabel: 'Open search page',
      icon: 'internal:search',
      id: 'search',
      label: 'Search',
      to: '/search',
    },
    {
      ariaLabel: 'View wishlist',
      icon: 'internal:heart',
      id: 'wishlist',
      label: 'Wishlist',
      to: '/wishlist',
    },
    {
      ariaLabel: 'View shopping cart',
      icon: 'internal:shopping-cart-outlined',
      id: 'cart',
      label: 'Cart',
      to: '/cart',
    },
  ],
  navigationItems: () => [
    {
      id: 'home',
      isActive: true,
      label: 'Home',
      to: '/',
    },
    {
      id: 'about',
      label: 'About',
      to: '/about',
    },
    {
      id: 'services',
      label: 'Services',
      to: '/services',
    },
    {
      id: 'contact',
      label: 'Contact',
      to: '/contact',
    },
  ],
  navLabel: 'Main navigation',
});

const emit = defineEmits<Emits>();

const sidebarContent = ref<HTMLElement>();
const closeButton = ref<HTMLButtonElement>();

const closeSidebar = () => {
  emit('close');
};

const handleNavClick = () => {
  closeSidebar();
};

const handleActionClick = () => {
  closeSidebar();
};

const focusFirstInteractiveElement = () => {
  nextTick(() => {
    if (closeButton.value) {
      closeButton.value.focus();
    }
  });
};

const trapFocus = (event: KeyboardEvent) => {
  if (!sidebarContent.value) return;

  const focusableElements = sidebarContent.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    }
    else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
};

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    focusFirstInteractiveElement();
    document.addEventListener('keydown', trapFocus);
    document.body.style.overflow = 'hidden';
  }
  else {
    document.removeEventListener('keydown', trapFocus);
    document.body.style.overflow = '';
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', trapFocus);
  document.body.style.overflow = '';
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;

.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  visibility: hidden;
  transition: visibility 0.3s ease;

  &--open {
    visibility: visible;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;

    .mobile-sidebar--open & {
      opacity: 1;
    }
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    background-color: variables.$color-white;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .mobile-sidebar--open & {
      transform: translateX(0);
    }

    @media (max-width: variables.$breakpoint-mobile) {
      width: 100%;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid #e5e5e5;
  }

  &__close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f5f5f5;
    }

    &:focus {
      outline: 2px solid variables.$color-primary;
      outline-offset: 2px;
    }
  }

  &__close-icon {
    position: relative;
    width: 20px;
    height: 20px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: variables.$color-primary;
      transform-origin: center;
    }

    &::before {
      transform: translateY(-50%) rotate(45deg);
    }

    &::after {
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  &__nav {
    flex: 1;
    padding: 1.5rem 0;
  }

  &__nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__nav-item {
    border-bottom: 1px solid #f5f5f5;
  }

  &__nav-link {
    @include typography.text-medium();
    @include typography.text-primary();
    display: block;
    padding: 1rem 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    border-radius: 0;

    &:hover {
      background-color: variables.$color-primary;
      color: variables.$color-white;
    }

    &:focus {
      outline: 2px solid variables.$color-primary;
      outline-offset: -2px;
    }

    &[aria-current="page"] {
      background-color: variables.$color-primary;
      color: variables.$color-white;
      font-weight: 600;
    }
  }

  &__actions {
    padding: 1.5rem;
    border-top: 1px solid #e5e5e5;
  }

  &__actions-title {
    @include typography.text-small();
    @include typography.text-primary();
    font-weight: 600;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__actions-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__actions-item {
    border-radius: 8px;
    overflow: hidden;
  }

  &__actions-link {
    @include typography.text-small();
    @include typography.text-primary();
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    border-radius: 8px;

    &:hover {
      background-color: #f8f9fa;
      color: variables.$color-primary;
    }

    &:focus {
      outline: 2px solid variables.$color-primary;
      outline-offset: 2px;
    }
  }

  &__actions-text {
    font-weight: 500;
  }
}
</style>
