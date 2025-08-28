<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
const isIcon = computed(() => !slots.default && !!slots.icon);

const IconPlacement = {
  left: 'left',
  right: 'right',
} as const;
type IconPlacement = (typeof IconPlacement)[keyof typeof IconPlacement];

const ButtonType = {
  primary: 'primary',
  secondary: 'secondary',
} as const;
type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];

const ButtonSize = {
  large: 'large',
  medium: 'medium',
  small: 'small',
} as const;
type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

interface Props {
  disabled?: boolean;
  iconPlacement?: IconPlacement;
  loading?: boolean;
  size?: ButtonSize;
  tag?: string;
  text?: boolean;
  type?: ButtonType;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  iconPlacement: 'right',
  loading: false,
  size: 'medium',
  tag: 'button',
  text: false,
  type: 'primary',
});

const buttonClass = computed(() => [
  'button',
  `button--${props.type}`,
  `button--${props.size}`,
  { 'button--text': props.text },
  { 'button--icon': isIcon.value },
  { 'button--icon-left': props.iconPlacement === IconPlacement.left },
  { 'button--icon-right': props.iconPlacement === IconPlacement.right },
  { 'button--loading': props.loading },
]);
</script>

<template>
  <component
    :is="props.tag"
    :class="buttonClass"
    :disabled="disabled"
  >
    <span
      v-if="$slots.default"
      class="button__content"
    >
      <slot />
    </span>
    <Icon
      v-if="loading"
      aria-hidden="true"
      name="internal:loader"
      class="button__icon"
    />
    <span
      v-else-if="$slots.icon"
      class="button__icon"
    >
      <slot name="icon" />
    </span>
  </component>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/components/button";
</style>
