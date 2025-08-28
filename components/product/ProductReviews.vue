<template>
  <div class="product-reviews">
    <div
      v-for="review in reviews"
      :key="review.id"
      class="product-reviews__review"
    >
      <div class="product-reviews__header">
        <span class="product-reviews__author">{{ review.author }}</span>
        <div class="product-reviews__rating">
          <span
            v-for="star in 5"
            :key="star"
            :class="['product-reviews__star', { 'product-reviews__star--filled': star <= review.rating }]"
          >
            ★
          </span>
        </div>
      </div>
      <p class="product-reviews__text">
        {{ review.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductReview } from './types';

interface Props {
  reviews: ProductReview[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use "sass:map";

.product-reviews {
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: variables.$spacing-lg;

  &__review {
    padding: variables.$spacing-lg 0;
    border-bottom: 1px solid variables.$color-text-secondary;

    &:last-child {
      border-bottom: none;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: variables.$spacing-md;
  }

  &__author {
    @include typography.text-secondary;
    @include typography.text-medium;
    font-weight: map.get(variables.$font-weights, medium);
    color: variables.$color-text-primary;
  }

  &__rating {
    display: flex;
    gap: 2px;
  }

  &__star {
    color: variables.$color-text-secondary;
    font-size: map.get(variables.$font-sizes, medium);
    transition: color 0.3s ease;

    &--filled {
      color: variables.$color-primary;
    }
  }

  &__text {
    @include typography.text-secondary;
    @include typography.text-medium;
    color: variables.$color-text-secondary;
    line-height: 1.6;
  }
}
</style>
