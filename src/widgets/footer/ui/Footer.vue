<template>
<footer class="footer">
  <ul
    v-for="chapter in navigation"
    :key="chapter.id"
    class="footer__chapter"
  >
    <p class="footer__chapter-title">{{ chapter.title }}</p>

    <li class="footer__nav-link" v-for="nav in chapter.navList" :key="nav.id">
      <a :href="nav.link">
        {{ nav.label }}
      </a>
    </li>
  </ul>
</footer>
</template>

<script setup lang="ts">
import navigation from '../model/navigation';
</script>

<style lang="scss" scoped>
.footer {
  padding: 100px 60px;
  background-color: $color-black;
  display: flex;
  gap: 20px;

  &__chapter {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__chapter-title {
    color: $color-dark-grey;
  }

  &__nav-link {
    color: $color-white;
    transition: opacity .3s;

    &:hover {
      opacity: .7;
    }
  }

  > * {
    flex: 1;
  }

  @media (max-width: 767px) {
    padding: 60px 20px;
    flex-direction: column;
    gap: 60px;

    &__chapter {
      max-width: 220px;
    }
  }
}
</style>