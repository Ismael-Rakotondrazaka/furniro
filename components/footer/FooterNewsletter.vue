<template>
  <div class="footer-newsletter">
    <h3 class="footer-newsletter__title">
      Newsletter
    </h3>
    <form
      class="footer-newsletter__form"
      @submit.prevent
    >
      <input
        type="email"
        placeholder="Enter Your Email Address"
        class="footer-newsletter__input"
        required
      >
      <button
        type="submit"
        class="footer-newsletter__button"
      >
        SUBSCRIBE
      </button>
    </form>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use "sass:map";

.footer-newsletter {
  &__title {
    @include typography.text-secondary;
    font-size: map.get(variables.$font-sizes, medium);
    font-weight: map.get(variables.$font-weights, medium);
    margin-bottom: 2.5rem;
  }

  &__form {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 1rem;
    max-width: 300px;
  }

  &__input {
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid variables.$color-black;
    padding: 0.5rem 0;
    font-size: map.get(variables.$font-sizes, small);
    outline: none;
    color: variables.$color-text-secondary;

    &::placeholder {
      color: variables.$color-text-secondary;
    }
  }

  &__button {
    background: none;
    border: none;
    border-bottom: 1px solid variables.$color-text-primary;
    font-weight: map.get(variables.$font-weights, medium);
    cursor: pointer;
    font-size: map.get(variables.$font-sizes, medium);
    letter-spacing: 1px;
    padding: 0.5rem 0;
    color: variables.$color-black;
    transition: color 0.3s ease;

    &:hover {
      color: variables.$color-primary;
    }
  }
}
</style>
