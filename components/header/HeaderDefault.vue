<template>
  <header class="header">
    <div class="header__container">
      <HeaderLogo />
      <HeaderNav />
      <HeaderActions />

      <button
        class="header__menu-toggle"
        @click="toggleMenu"
      >
        <span class="header__menu-icon" />
      </button>
    </div>

    <HeaderMobileSidebar
      :is-open="isMenuOpen"
      @close="closeMenu"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use '~/assets/scss/abstracts/mixins.scss' as mixins;

@mixin flex-center {
  display: flex;
  align-items: center;
}

.header {
  background-color: variables.$color-white;
  font-family: variables.$font-family-primary;
  position: relative;
  z-index: 100;
  padding: variables.$spacing-md 0;
  height: 6.25rem;

  @media (min-width: variables.$breakpoint-tablet) {
    padding: variables.$spacing-lg 0;
  }

  &__container {
    max-width: 80.375rem;
    margin: 0 auto;
    justify-content: space-between;
    @include flex-center;
    @include mixins.responsive-container;
  }

  &__menu-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: variables.$spacing-xs;

    @media (min-width: variables.$breakpoint-tablet) {
      display: none;
    }
  }

  &__menu-icon {
    display: block;
    width: 25px;
    height: 2px;
    background-color: variables.$color-primary;
    position: relative;
    transition: background-color 0.3s ease;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: variables.$color-primary;
      position: absolute;
      left: 0;
      transition: transform 0.3s ease;
    }

    &::before {
      transform: translateY(-8px);
    }

    &::after {
      transform: translateY(8px);
    }
  }

  &__menu-toggle:hover &__menu-icon,
  &__menu-toggle:hover &__menu-icon::before,
  &__menu-toggle:hover &__menu-icon::after {
    background-color: variables.$color-primary-dark;
  }
}
</style>
