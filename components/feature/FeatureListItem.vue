<template>
  <div class="feature-item">
    <div class="feature-item__icon">
      <Icon
        :name="iconName"
        size="3.5rem"
      />
    </div>
    <div class="feature-item__content">
      <h3 class="feature-item__title">
        {{ title }}
      </h3>
      <p class="feature-item__subtitle">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  iconName: string;
  subtitle: string;
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use "sass:map";

.feature-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  &__title {
    @include typography.text-primary;
    @include typography.text-large;
    font-weight: map.get(variables.$font-weights, bold);
    margin-bottom: 0.25rem;
    margin-top: 0;
    text-wrap-mode: nowrap;
  }

  &__subtitle {
    @include typography.text-secondary;
    font-family: variables.$font-family-primary;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    text-wrap-mode: nowrap;
  }
}
</style>
