<template>
<nav class="navigation">
  <ul class="navigation__list">
    <li
      v-for="nav in navigation"
      :key="nav.id"
      class="navigation__item"
    >
    <a :href="nav.link">
      {{ nav.label }}
    </a>
    </li>
  </ul>
</nav>
</template>

<script setup lang="ts">
import navigation from '../model/navigation';
</script>

<style lang="scss" scoped>
.navigation {
  padding: 10px 24px;
  background-color: $color-grey;

  &__list {
    display: flex;
    column-gap: 40px;
  }

  &__item {
    transition: opacity .3s;

    &:hover {
      opacity: .8;
    }
  }
}
</style>