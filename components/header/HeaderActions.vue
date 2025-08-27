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
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface HeaderAction {
  icon: string;
  id: string;
  to: string;
}

const headerActions: HeaderAction[] = [
  {
    icon: 'internal:account-alert-outline',
    id: 'account',
    to: '/',
  },
  {
    icon: 'internal:search',
    id: 'search',
    to: '/',
  },
  {
    icon: 'internal:heart',
    id: 'wishlist',
    to: '/',
  },
  {
    icon: 'internal:shopping-cart-outlined',
    id: 'cart',
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
}
</style>
