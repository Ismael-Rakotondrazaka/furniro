<template>
  <section class="hero-section">
    <div class="hero-section__container">
      <div class="hero-section__content-box">
        <p class="hero-section__tagline">
          New Arrival
        </p>
        <h1 class="hero-section__title">
          Discover Our<br>New Collection
        </h1>
        <p class="hero-section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <ButtonBase
          type="primary"
          size="large"
          class="hero-section__button"
        >
          BUY NOW
        </ButtonBase>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/typography' as typography;
@use '~/assets/scss/abstracts/variables' as variables;
@use '~/assets/scss/abstracts/mixins' as mixins;

$color-primary: #B88E2F;
$color-secondary: #FFF3E3;
$color-text: #555;
$font-family: 'Poppins', sans-serif;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-section {
  position: relative;
  width: 100%;
  height: calc(100vh - 15rem);
  background-image: url('~/assets/images/hero/hero-illustration.jpg'); /* Placeholder for your image */
  background-size: cover;
  background-position: center;
  @include flex-center;
  text-align: left;

  &__container {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    @include mixins.responsive-container;

    @media (min-width: variables.$breakpoint-tablet) {
      justify-content: flex-end;
      @include flex-center;
    }
  }

  &__content-box {
    background-color: $color-secondary;
    padding: variables.$spacing-xl;
    border-radius: 8px;
    max-width: 645px;
    width: 100%;

    @media (max-width: #{variables.$breakpoint-tablet - 1px}) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: variables.$spacing-sm 0;
    }

    @media (min-width: variables.$breakpoint-tablet) {
      position: absolute;
      right: variables.$spacing-lg;
      max-width: 500px;
    }

    @media (min-width: variables.$breakpoint-desktop) {
      right: variables.$spacing-2xl;
      max-width: 580px;
    }

    @media (min-width: variables.$breakpoint-large) {
      right: variables.$spacing-3xl;
      max-width: 645px;
    }
  }

  &__tagline {
    @include typography.text-primary;
    @include typography.text-medium;
    font-weight: bold;
    margin-bottom: variables.$spacing-xs;
  }

  &__title {
    @include typography.text-primary;
    @include typography.text-large;
    font-size: 2rem;
    font-weight: bold;
    color: $color-primary;
    line-height: 1.2;
    margin-bottom: variables.$spacing-sm;
    margin-top: 0;

    @media (min-width: variables.$breakpoint-tablet) {
      font-size: 2.5rem;
    }

    @media (min-width: variables.$breakpoint-desktop) {
      font-size: 3.5rem;
    }
  }

  &__text {
    @include typography.text-primary;
    @include typography.text-medium;
    margin-bottom: variables.$spacing-xl;
  }

  &__button {
    width: 100%;
    @media (min-width: variables.$breakpoint-tablet) {
      width: auto;
    }
  }
}
</style>
