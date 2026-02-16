<template>
  <NuxtLink
    v-if="props.to"
    :to="props.to"
    :class="buttonClasses"
  >
    {{ props.label }}
  </NuxtLink>

  <a
    v-else-if="props.href"
    :href="props.href"
    :class="buttonClasses"
  >
    {{ props.label }}
  </a>

  <button
    v-else
    type="button"
    :class="buttonClasses"
  >
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
import type { TextButtonProps } from './types'
import { computed } from 'vue'

const props = withDefaults(defineProps<TextButtonProps>(), {
  colorToken: 'transparent',
  bordered: false,
})

const buttonClasses = computed(() => [
  'button',
  `button_${props.colorToken}`,
  { 'button_bordered': props.bordered }
])
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 24px;
  color: $color-black;
  transition: opacity .3s;
  display: block;
  width: max-content;
  height: max-content;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }

  &_red {
    color: $color-white;
    background-color: $color-red;
  }

  &_transparent {
    background-color: transparent;
    border-color: $color-black;
  }

  &_bordered {
    border: 1px solid;
  }
}
</style>