<template>
  <div class="browse-range-item">
    <div
      v-motion-slide-visible-once-bottom
      class="browse-range-item__image-container"
    >
      <NuxtImg
        :src="imageSrc"
        :alt="altText"
        class="browse-range-item__image"
        width="381"
        height="480"
      />
    </div>
    <h3 class="browse-range-item__title">
      {{ title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
interface Props {
  altText: string;
  imageSrc: string;
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/mixins.scss' as mixins;

.browse-range-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-radius: 8px;

  &__image-container {
    width: 100%;
    max-width: 381px;
    aspect-ratio: 381 / 480;
    overflow: hidden;
    border-radius: 8px;

    @media (max-width: calc(variables.$breakpoint-tablet - 1px)) {
      max-width: 100%;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333333;
    margin-top: 1.7rem;
    font-family: variables.$font-family-primary;
    text-align: center;

    @media (min-width: variables.$breakpoint-tablet) {
      font-size: 1.5rem;
    }
  }
}
</style>
