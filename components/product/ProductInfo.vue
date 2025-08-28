<template>
  <div class="product-info">
    <div
      v-for="(info, key) in additionalInfo"
      :key="key"
      class="product-info__item"
    >
      <span class="product-info__label">{{ info.label }}:</span>
      <span class="product-info__value">{{ info.value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductInfo } from './types';

interface Props {
  additionalInfo: Record<string, ProductInfo>;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use "sass:map";

.product-info {
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: variables.$spacing-lg;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: variables.$spacing-md 0;
    border-bottom: 1px solid variables.$color-text-secondary;

    &:last-child {
      border-bottom: none;
    }
  }

  &__label {
    @include typography.text-secondary;
    @include typography.text-medium;
    font-weight: map.get(variables.$font-weights, medium);
    color: variables.$color-text-primary;
  }

  &__value {
    @include typography.text-secondary;
    @include typography.text-medium;
    color: variables.$color-text-secondary;
  }
}
</style>
