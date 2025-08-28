<template>
  <div class="product-modal-navbar">
    <button
      v-if="gallery.length > 1"
      class="product-modal-navbar__nav product-modal-navbar__nav--prev"
      @click="handlePreviousImage"
    >
      <Icon name="internal:chevron-left" />
      <span class="product-modal-navbar__nav-text">Previous</span>
    </button>
    <button
      class="product-modal-navbar__close"
      @click="handleCloseModal"
    >
      <Icon name="internal:close" />
      <span class="product-modal-navbar__nav-text">Close</span>
    </button>
    <button
      v-if="gallery.length > 1"
      class="product-modal-navbar__nav product-modal-navbar__nav--next"
      @click="handleNextImage"
    >
      <Icon name="internal:chevron-right" />
      <span class="product-modal-navbar__nav-text">Next</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ProductImage } from './types';

interface Emits {
  'close-modal': [];
  'next-image': [];
  'previous-image': [];
}

interface Props {
  gallery: ProductImage[];
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleCloseModal = (): void => {
  emit('close-modal');
};

const handleNextImage = (): void => {
  emit('next-image');
};

const handlePreviousImage = (): void => {
  emit('previous-image');
};
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use "sass:map";

.product-modal-navbar {
  position: fixed;
  bottom: variables.$spacing-xl;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: variables.$spacing-sm;
  background-color: rgba(128, 128, 128, 0.8);
  padding: variables.$spacing-sm variables.$spacing-md;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  z-index: 1001;

  &__close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: map.get(variables.$font-sizes, medium);
    color: variables.$color-white;
    padding: variables.$spacing-xs;
    transition: all 0.3s ease;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  &__nav {
    background: none;
    border: none;
    cursor: pointer;
    font-size: map.get(variables.$font-sizes, medium);
    color: variables.$color-white;
    padding: variables.$spacing-xs;
    transition: all 0.3s ease;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }

    &-text {
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
}
</style>
