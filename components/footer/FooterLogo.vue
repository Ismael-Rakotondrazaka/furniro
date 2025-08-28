<template>
  <div class="footer-logo">
    <h2 class="footer-logo__title">
      Funiro.
    </h2>
    <p class="footer-logo__address">
      400 University Drive Suite 200 Coral<br>
      Gables, FL 33134 USA
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use "sass:map";

.footer-logo {
  &__title {
    font-size: 24px;
    font-weight: map.get(variables.$font-weights, bold);
    color: variables.$color-text-primary;
    margin-bottom: 2rem;
  }
  &__address {
    @include typography.text-secondary;
    font-size: map.get(variables.$font-sizes, medium);
    font-weight: map.get(variables.$font-weights, regular);
    line-height: map.get(variables.$line-heights, small);
  }
}
</style>
