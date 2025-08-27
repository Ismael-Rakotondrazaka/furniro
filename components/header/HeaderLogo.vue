<template>
  <div class="header-logo">
    <NuxtLink
      :to="{ name: 'index' }"
      class="header-logo__link"
    >
      <img
        src="/images/logos/logo-furniro.png"
        alt="Logo Furniro"
        class="header-logo__image"
      >
      <span class="header-logo__text">Furniro</span>
    </NuxtLink>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;

.header-logo {
  &__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  &__image {
    height: 30px;
    width: auto;
    display: block;
  }

  &__text {
    font-size: 2.1rem;
    font-weight: 700;
    color: variables.$color-black;
    font-family: variables.$font-family-primary;
  }
}
</style>
