<template>
  <div class="product-gallery">
    <div
      v-for="(image, index) in gallery"
      :key="image.alt"
      v-motion-fade-visible-once
      class="product-gallery__item"
      @click="handleOpenModal(index)"
    >
      <NuxtImg
        :src="image.src"
        :alt="image.alt"
        class="product-gallery__image"
        width="605"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductImage } from './types';

interface Emits {
  'open-modal': [index: number];
}

interface Props {
  gallery: ProductImage[];
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleOpenModal = (index: number): void => {
  emit('open-modal', index);
};
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;

.product-gallery {
  display: flex;
  flex-direction: column;
  gap: variables.$spacing-md;

  @media (min-width: variables.$breakpoint-tablet) {
    flex-direction: row;
    justify-content: center;
    gap: variables.$spacing-lg;
  }

  &__item {
    background-color: #f9f1e7;
    max-width: 605px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    padding: variables.$spacing-2xl variables.$spacing-xl;

    @media (min-width: variables.$breakpoint-tablet) {
      flex: 1;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 8px;
    object-fit: contain;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
    }
  }
}
</style>
