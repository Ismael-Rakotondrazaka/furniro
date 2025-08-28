<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li
        v-for="item in navItems"
        :key="item.label"
        class="header-nav__item"
      >
        <NuxtLink
          :to="item.to"
          class="header-nav__link"
        >{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
type NavItem = {
  label: string;
  to: { name: string };
};

const navItems: NavItem[] = [
  { label: 'Home', to: { name: 'index' } },
  { label: 'About', to: { name: 'index' } },
  { label: 'Services', to: { name: 'index' } },
  { label: 'Contact', to: { name: 'index' } },
];
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;

@mixin flex-center {
  display: flex;
  align-items: center;
}

.header-nav {
  display: none;

  @media (min-width: variables.$breakpoint-tablet) {
    display: block;
  }

  &__list {
    @include flex-center;
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 26.875rem;
    gap: variables.$spacing-xl;

    @media (min-width: variables.$breakpoint-desktop) {
      gap: 3.7rem;
    }
  }

  &__link {
    @include typography.text-medium();
    @include typography.text-primary();
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: variables.$color-primary;
    }
  }
}
</style>
