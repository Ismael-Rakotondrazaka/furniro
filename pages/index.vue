<template>
  <div class="home">
    <HeroSection />
    <BrowseRangeSection />
    <hr class="section-break">
    <ProductDescriptionSection />
    <hr class="section-break">
    <FeatureSection />
    <hr class="section-break">
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

useHead({
  link: [
    {
      href: '/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
    },
  ],
});

useSeoMeta({
  author: 'Furniro',
  keywords: 'furniture, home accessories, furniture store, furniture online, furniture shop',
  ogImageAlt: 'Furniro',
  ogImageHeight: 630,
  ogImageSecureUrl: `${runtimeConfig.public.appUrl}/images/og/furniro-og.jpg`,
  ogImageType: 'image/jpeg',
  ogImageUrl: `${runtimeConfig.public.appUrl}/images/og/furniro-og.jpg`,
  ogImageWidth: 900,
  twitterCard: 'summary_large_image',
  twitterCreator: () => runtimeConfig.public.appUrl,
  twitterDescription: 'Discover our collection of furniture and home accessories. Find the perfect piece for your home.',
  twitterImage: `${runtimeConfig.public.appUrl}/images/og/furniro-og.jpg`,
  twitterSite: () => runtimeConfig.public.appUrl,
  twitterTitle: 'Furniro',
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables.scss' as variables;

.section-break {
  height: 1px;
  width: 100%;
  background-color: #D9D9D9;
  margin: variables.$spacing-lg 0 variables.$spacing-lg 0;
  display: block;
}

.home {
  width: 100%;
  height: 100%;
}
</style>
