<template>
  <div class="layout">
    <HeaderDefault />
    <slot />
    <FooterDefault />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
}
</style>
