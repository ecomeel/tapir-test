<template>
<button class="burger-btn">
  <img alt="burger icon" src="@/widgets/header/assets/burger.svg" />
</button>
</template>

<style lang="scss" scoped>
.burger-btn {
  opacity: 0;
  pointer-events: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-grey;

  @media (max-width: 767px) {
    opacity: 1;
    pointer-events: initial;
  }
}
</style>