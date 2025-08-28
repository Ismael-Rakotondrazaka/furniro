<template>
  <div class="footer-nav">
    <h3 class="footer-nav__title">
      {{ title }}
    </h3>
    <ul class="footer-nav__list">
      <li
        v-for="link in links"
        :key="link.name"
        class="footer-nav__item"
      >
        <NuxtLink
          :to="link.url"
          class="footer-nav__link"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface FooterNavLink {
  name: string;
  url: string;
}

interface Props {
  links: FooterNavLink[];
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use "sass:map";

.footer-nav {
  &__title {
    @include typography.text-secondary;
    font-size: map.get(variables.$font-sizes, medium);
    font-weight: map.get(variables.$font-weights, medium);
    margin-bottom: 2.5rem;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-bottom: 2.5rem;
  }

  &__link {
    text-decoration: none;
    @include typography.text-primary;
    @include typography.text-medium;
    transition: color 0.3s ease;

    &:hover {
      color: variables.$color-primary;
    }
  }
}
</style>
