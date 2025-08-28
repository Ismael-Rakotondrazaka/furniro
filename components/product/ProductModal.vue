<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="product-modal"
    >
      <div class="product-modal__content">
        <ProductModalNavbar
          :gallery="gallery"
          @close-modal="handleCloseModal"
          @next-image="handleNextImage"
          @previous-image="handlePreviousImage"
        />
        <ProductModalImage
          :current-index="currentIndex"
          :gallery="gallery"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { ProductImage } from './types';

interface Emits {
  'close-modal': [];
  'next-image': [];
  'previous-image': [];
}

interface Props {
  currentIndex: number;
  gallery: ProductImage[];
  isOpen: boolean;
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
.product-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: default;

  &__content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
</style>
