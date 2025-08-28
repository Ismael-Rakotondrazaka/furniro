<template>
  <div class="header-actions">
    <ul class="header-actions__list">
      <li
        v-for="action in headerActions"
        :key="action.id"
        class="header-actions__item"
      >
        <NuxtLink
          :to="action.to"
          class="header-actions__link"
        >
          <Icon
            size="1.8rem"
            :name="action.icon"
          />

          <span class="header-actions__label">
            {{ action.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface HeaderAction {
  icon: string;
  id: string;
  label: string;
  to: string;
}

const headerActions: HeaderAction[] = [
  {
    icon: 'internal:account-alert-outline',
    id: 'account',
    label: 'Account',
    to: '/',
  },
  {
    icon: 'internal:search',
    id: 'search',
    label: 'Search',
    to: '/',
  },
  {
    icon: 'internal:heart',
    id: 'wishlist',
    label: 'Wishlist',
    to: '/',
  },
  {
    icon: 'internal:shopping-cart-outlined',
    id: 'cart',
    label: 'Cart',
    to: '/',
  },
];
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;

@mixin flex-center {
  display: flex;
  align-items: center;
}

.header-actions {
  display: none;

  @media (min-width: variables.$breakpoint-tablet) {
    display: block;
  }

  &__list {
    @include flex-center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: variables.$spacing-xl;

    @media (min-width: variables.$breakpoint-desktop) {
      gap: 3.7rem;
    }
  }

  &__link {
    @include typography.text-medium();
    @include typography.text-primary();
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: variables.$color-primary;
    }
  }

  &__label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
</style>
