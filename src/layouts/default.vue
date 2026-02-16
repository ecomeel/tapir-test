<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <footer>
      im footer
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Header } from '~/widgets/header';
</script>