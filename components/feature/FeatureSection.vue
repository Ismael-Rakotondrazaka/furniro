<template>
  <section class="feature-list">
    <div class="feature-list__container">
      <div class="feature-list__items">
        <FeatureListItem
          v-for="item in featureItems"
          :key="item.title"
          :icon-name="item.iconName"
          :subtitle="item.subtitle"
          :title="item.title"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FeatureItem {
  iconName: string;
  subtitle: string;
  title: string;
}

const featureItems: FeatureItem[] = [
  {
    iconName: 'internal:trophy',
    subtitle: 'crafted from top materials',
    title: 'High Quality',
  },
  {
    iconName: 'internal:warranty',
    subtitle: 'Over 2 years',
    title: 'Warranty Protection',
  },
  {
    iconName: 'internal:shipping',
    subtitle: 'Order over 150 $',
    title: 'Free Shipping',
  },
  {
    iconName: 'internal:support',
    subtitle: 'Dedicated support',
    title: '24 / 7 Support',
  },
];
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/mixins.scss' as mixins;

.feature-list {
  background-color: #FAF3EA;
  margin: variables.$spacing-2xl 0;
  padding: variables.$spacing-3xl 0;

  &__container {
    max-width: 1334px;
    @include mixins.responsive-container;
  }

  &__items {
    display: grid;
    gap: variables.$spacing-lg;
    grid-template-columns: 1fr;

    @media (min-width: variables.$breakpoint-tablet) {
      grid-template-columns: repeat(2, 1fr);
      text-align: left;
      gap: variables.$spacing-xl;
    }

    @media (min-width: variables.$breakpoint-desktop) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
