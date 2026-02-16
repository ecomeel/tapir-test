<template>
<div class="content">
  <h1 class="content__title">Тестовое задание</h1>
  <TextButton 
    color-token="red"
    label="В каталог"
    to="some"
  />
</div>
</template>

<script setup lang="ts">
import { TextButton } from '~/shared/ui/TextButton';
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  justify-content: center;

  &__title {
    font-size: 64px;
    line-height: 1.1em;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    padding: 20px 0;

    &__title {
      font-size: 26px;
      max-width: 220px;
    }
  }
}
</style>