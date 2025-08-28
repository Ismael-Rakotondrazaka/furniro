<template>
  <div
    :class="['mobile-sidebar', { 'mobile-sidebar--open': isOpen }]"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation menu"
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
          aria-label="Close navigation menu"
          @click="closeSidebar"
          @keydown.escape="closeSidebar"
        >
          <span class="mobile-sidebar__close-icon" />
        </button>
      </div>

      <nav
        class="mobile-sidebar__nav"
        aria-label="Main navigation"
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
          Quick Actions
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
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits<Emits>();

const closeButton = ref<HTMLButtonElement>();

const headerActions: HeaderAction[] = [
  {
    ariaLabel: 'Go to account page',
    icon: 'internal:account-alert-outline',
    id: 'account',
    label: 'Account',
    to: '/',
  },
  {
    ariaLabel: 'Open search page',
    icon: 'internal:search',
    id: 'search',
    label: 'Search',
    to: '/',
  },
  {
    ariaLabel: 'View wishlist',
    icon: 'internal:heart',
    id: 'wishlist',
    label: 'Wishlist',
    to: '/',
  },
  {
    ariaLabel: 'View shopping cart',
    icon: 'internal:shopping-cart-outlined',
    id: 'cart',
    label: 'Cart',
    to: '/',
  },
];

const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    isActive: true,
    label: 'Home',
    to: '/',
  },
  {
    id: 'about',
    label: 'About',
    to: '/',
  },
  {
    id: 'services',
    label: 'Services',
    to: '/',
  },
  {
    id: 'contact',
    label: 'Contact',
    to: '/',
  },
];

const closeSidebar = () => {
  emit('close');
};

const handleNavClick = () => {
  closeSidebar();
};

const handleActionClick = () => {
  closeSidebar();
};
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
