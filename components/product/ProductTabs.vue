<template>
  <div class="product-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      :class="['product-tabs__btn', { 'product-tabs__btn--active': activeTab === tab.key }]"
      @click="handleUpdateActiveTab(tab.key)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { TabItem } from './types';

interface Emits {
  'update:active-tab': [value: string];
}

interface Props {
  activeTab: string;
  tabs: TabItem[];
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleUpdateActiveTab = (value: string): void => {
  emit('update:active-tab', value);
};
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use '~/assets/scss/abstracts/mixins.scss' as mixins;
@use "sass:map";

.product-tabs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: variables.$spacing-lg;
  align-items: center;
  gap: variables.$spacing-md;

  @media (min-width: variables.$breakpoint-tablet) {
    flex-direction: row;
    gap: variables.$spacing-xl;
  }

  @media (min-width: variables.$breakpoint-desktop) {
    gap: variables.$spacing-2xl;
  }

  &__btn {
    background: none;
    border: none;
    cursor: pointer;
    @include typography.text-primary;
    color: variables.$color-text-secondary;
    font-weight: map.get(variables.$font-weights, regular);
    padding: variables.$spacing-sm variables.$spacing-md;
    transition: all 0.3s ease;
    text-align: center;
    width: 100%;
    max-width: 300px;

    @media (min-width: variables.$breakpoint-tablet) {
      @include typography.text-large;
      width: auto;
      max-width: none;
      padding: 0;
    }

    &:hover {
      color: variables.$color-text-primary;
    }

    &--active {
      color: variables.$color-text-primary;
      font-weight: map.get(variables.$font-weights, medium);
    }
  }
}
</style>
