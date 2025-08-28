<template>
  <section class="browse-range">
    <div class="browse-range__container">
      <h2 class="browse-range__title">
        Browse The Range
      </h2>
      <p class="browse-range__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="browse-range__items">
        <BrowseRangeItem
          v-for="item in browseRangeItems"
          :key="item.id"
          :image-src="item.imageSrc"
          :title="item.title"
          :alt-text="item.altText"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface BrowseRangeItem {
  altText: string;
  id: number;
  imageSrc: string;
  title: string;
}

const browseRangeItems = ref<BrowseRangeItem[]>([
  {
    altText: 'Dining Room',
    id: 1,
    imageSrc: '/images/ranges/dining.png',
    title: 'Dining',
  },
  {
    altText: 'Living Room',
    id: 2,
    imageSrc: '/images/ranges/living.png',
    title: 'Living',
  },
  {
    altText: 'Bedroom',
    id: 3,
    imageSrc: '/images/ranges/bedroom.png',
    title: 'Bedroom',
  },
]);
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use '~/assets/scss/abstracts/mixins.scss' as mixins;

.browse-range {
  padding: variables.$spacing-md 0;

  @media (min-width: variables.$breakpoint-tablet) {
    padding: variables.$spacing-lg 0;
  }

  @media (min-width: variables.$breakpoint-desktop) {
    padding: variables.$spacing-xl 0;
  }

  &__container {
    @include mixins.responsive-container;
  }

  &__title {
    font-weight: bold;
    text-align: center;
    @include typography.text-primary;
    @include typography.heading-3;
  }

  &__text {
    font-family: variables.$font-family-primary;
    color: #666666;
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: variables.$spacing-xl;
    margin-top: 0;
    text-align: center;
  }

  &__items {
    display: grid;
    gap: variables.$spacing-sm;
    grid-template-columns: 1fr;

    @media (min-width: variables.$breakpoint-tablet) {
      grid-template-columns: repeat(3, 1fr);
      gap: variables.$spacing-md;
    }
  }
}
</style>
