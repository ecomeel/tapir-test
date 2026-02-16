<template>
<header class="header">
  <Logo />

  <HeaderNavigation v-if="!isMobile" />

  <BurgerBtn />
</header>
</template>

<script setup lang="ts">
import { useBreakpoint } from '~/shared/lib/useBreakpoints';
import HeaderNavigation from './HeaderNavigation.vue';
import BurgerBtn from './BurgerBtn.vue';
import Logo from './Logo.vue';

const { isMobile } = useBreakpoint();
</script>

<style scoped lang="scss">
.header {
  padding: 19px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 19px 40px;
  }

  @media (max-width: 767px) {
    padding: 10px 20px;
  }
}
</style>