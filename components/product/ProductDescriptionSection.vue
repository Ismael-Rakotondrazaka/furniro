<template>
  <main class="product-section">
    <div class="product-section__container">
      <ProductTabs
        :tabs="tabs"
        :active-tab="activeTab"
        @update:active-tab="activeTab = $event"
      />

      <ProductDescription
        v-if="activeTab === 'description'"
        :description="product.description"
      />
      <ProductInfo
        v-else-if="activeTab === 'info'"
        :additional-info="product.additionalInfo"
      />
      <ProductReviews
        v-else-if="activeTab === 'reviews'"
        :reviews="product.reviews"
      />

      <ProductGallery
        :gallery="product.gallery"
        @open-modal="openModal"
      />

      <ProductModal
        :is-open="isModalOpen"
        :gallery="product.gallery"
        :current-index="currentImageIndex"
        @close-modal="closeModal"
        @next-image="nextImage"
        @previous-image="previousImage"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Product, TabItem } from './types';

const tabs: TabItem[] = [
  { key: 'description', label: 'Description' },
  { key: 'info', label: 'Additional Information' },
  { key: 'reviews', label: 'Reviews [5]' },
];

const activeTab = ref<string>('description');
const isModalOpen = ref<boolean>(false);
const currentImageIndex = ref<number>(0);

const product: Product = {
  additionalInfo: {
    care: { label: 'Care Instructions', value: 'Professional cleaning recommended' },
    cushions: { label: 'Cushions', value: 'High-density foam with down blend' },
    dimensions: { label: 'Dimensions', value: '84" W x 35" D x 32" H' },
    frame: { label: 'Frame', value: 'Solid hardwood construction' },
    material: { label: 'Material', value: 'Premium white fabric upholstery' },
    weight: { label: 'Weight', value: '85 lbs' },
  },
  description: [
    'This elegant large white sofa embodies timeless sophistication and modern comfort. Crafted with premium materials and expert craftsmanship, it serves as the perfect centerpiece for any living space.',
    'The generous seating area provides ample room for family and guests, while the plush cushions offer exceptional comfort for hours of relaxation. The clean white upholstery creates a versatile foundation that complements any decor style, from minimalist to traditional.',
  ],
  gallery: [
    { alt: 'Large White Sofa Front View', src: '/images/products/sofa-1.png' },
    { alt: 'Large White Sofa Side View', src: '/images/products/sofa-2.png' },
  ],
  id: 'sofa-001',
  name: 'Elegant Large White Sofa',
  reviews: [
    {
      author: 'Jennifer Martinez',
      id: 1,
      rating: 5,
      text: 'Absolutely stunning sofa! The white fabric is beautiful and the size is perfect for our living room. Very comfortable for the whole family.',
    },
    {
      author: 'Robert Chen',
      id: 2,
      rating: 4,
      text: 'Great quality construction and the cushions are incredibly comfortable. The white color brightens up our space beautifully.',
    },
    {
      author: 'Amanda Thompson',
      id: 3,
      rating: 5,
      text: 'This sofa exceeded our expectations. The fabric feels premium and it\'s the perfect size for our open concept living area.',
    },
    {
      author: 'Michael Rodriguez',
      id: 4,
      rating: 4,
      text: 'Excellent craftsmanship and very comfortable. The white upholstery stays clean surprisingly well with regular maintenance.',
    },
    {
      author: 'Lisa Park',
      id: 5,
      rating: 5,
      text: 'Perfect addition to our home! The large size accommodates our family perfectly and the white color goes with everything.',
    },
  ],
};

const openModal = (index: number): void => {
  currentImageIndex.value = index;
  isModalOpen.value = true;
};

const closeModal = (): void => {
  isModalOpen.value = false;
};

const nextImage = (): void => {
  currentImageIndex.value = (currentImageIndex.value + 1) % product.gallery.length;
};

const previousImage = (): void => {
  currentImageIndex.value = currentImageIndex.value === 0
    ? product.gallery.length - 1
    : currentImageIndex.value - 1;
};

const handleKeydown = (event: KeyboardEvent): void => {
  if (!isModalOpen.value) {
    return;
  }

  switch (event.key) {
    case 'ArrowLeft':
      previousImage();
      break;
    case 'ArrowRight':
      nextImage();
      break;
    case 'Escape':
      closeModal();
      break;
  }
};

useEventListener(document, 'keydown', handleKeydown);
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/mixins.scss' as mixins;

.product-section {
  font-family: variables.$font-family-primary;
  padding: variables.$spacing-2xl 0;

  &__container {
    max-width: 1239px;
    @include mixins.responsive-container;
  }
}
</style>
