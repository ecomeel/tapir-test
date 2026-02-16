<template>
  <div class="page">
    <Header />
    <main class="page__content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Header } from '~/widgets/header';
import { Footer } from '~/widgets/footer';
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    padding-left: 60px;
    padding-right: 60px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    &__content {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>