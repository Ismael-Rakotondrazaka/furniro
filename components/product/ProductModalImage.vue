<template>
  <Transition
    name="image"
    mode="out-in"
  >
    <NuxtImg
      :key="currentIndex"
      :src="gallery[currentIndex].src"
      :alt="gallery[currentIndex].alt"
      class="product-modal-image"
      placeholder="/images/loading/spin.svg"
      @click.stop
    />
  </Transition>
</template>

<script setup lang="ts">
import type { ProductImage } from './types';

interface Props {
  currentIndex: number;
  gallery: ProductImage[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.product-modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.image-enter-active,
.image-leave-active {
  transition: all 0.4s ease;
}

.image-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.95);
}

.image-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}
</style>
