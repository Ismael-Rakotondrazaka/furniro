<template>
  <div class="product-description">
    <p
      v-for="(text, idx) in description"
      :key="idx"
      class="product-description__text"
    >
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  description: string[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;

.product-description {
  margin-bottom: variables.$spacing-lg;

  &__text {
    @include typography.text-secondary;
    @include typography.text-medium;
    max-width: 1024px;
    margin: 0 auto;
    margin-bottom: variables.$spacing-md;
  }
}
</style>
