<script setup lang="ts">
import { computed } from 'vue'
import { type TextButtonProps } from './types'

const props = withDefaults(defineProps<TextButtonProps>(), {
  colorToken: 'transparent',
  bordered: false,
})

const componentTag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    :class="[
      'button',
      `button_${colorToken}`,
      { 'button_bordered': bordered }
    ]"
  >
    {{ label }}
  </component>
</template>

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