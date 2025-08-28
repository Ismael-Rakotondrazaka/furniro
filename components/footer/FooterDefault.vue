<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top-section">
        <div class="footer__column">
          <FooterLogo />
        </div>
        <div class="footer__column">
          <FooterNav
            title="Links"
            :links="links"
          />
        </div>
        <div class="footer__column">
          <FooterNav
            title="Help"
            :links="helpLinks"
          />
        </div>
        <div class="footer__column">
          <FooterNewsletter />
        </div>
      </div>
      <div class="footer__divider" />
      <div class="footer__bottom-section">
        <p class="footer__copyright">
          2023 funiro. All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterLogo from './FooterLogo.vue';
import FooterNav from './FooterNav.vue';
import FooterNewsletter from './FooterNewsletter.vue';

const links = [
  { name: 'Home', url: '/' },
  { name: 'Shop', url: '/' },
  { name: 'About', url: '/' },
  { name: 'Contact', url: '/' },
];

const helpLinks = [
  { name: 'Payment Options', url: '/' },
  { name: 'Returns', url: '/' },
  { name: 'Privacy Policies', url: '/' },
];
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;
@use '~/assets/scss/abstracts/typography.scss' as typography;
@use '~/assets/scss/abstracts/mixins.scss' as mixins;
@use "sass:map";

@mixin flex-center {
  display: flex;
  align-items: center;
}

.footer {
  background-color: variables.$color-white;
  font-family: variables.$font-family-primary;
  padding: variables.$spacing-2xl 0;

  &__container {
    @include mixins.responsive-container;
  }

  &__top-section {
    display: grid;
    gap: variables.$spacing-lg;
    grid-template-columns: 1fr;

    @media (min-width: variables.$breakpoint-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: variables.$breakpoint-desktop) {
      grid-template-columns: 2fr 1fr 1fr 2fr;
    }
  }

  &__divider {
    height: 1px;
    background-color: #e5e5e5;
    margin: variables.$spacing-lg 0;
  }

  &__bottom-section {
    text-align: center;

    @media (min-width: variables.$breakpoint-tablet) {
      text-align: left;
    }
  }

  &__copyright {
    @include typography.text-primary();
  }
}
</style>
