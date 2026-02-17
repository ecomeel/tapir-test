<template>
<a href="#" class="card">
  <button class="card__favorite">
    <img src="@/widgets/products/assets/like.svg" alt="favorite">
  </button>
  <div class="card__img-wrapper">
    <img :src="product.image" :alt="product.name">
  </div>
  <div class="card__price">
    <p>{{ formatPrice(product.price) }}</p>
    <p>{{ formatPrice(singleItemPrice) }} × 2</p>
  </div>
  <p class="card__name">
    {{ product.name }}
  </p>
</a>
</template>

<script setup lang="ts">
import type { Product } from '~/entities/products';
import { formatPrice } from '~/shared/lib/formatPrice';

const props = defineProps<{ product: Product }>();

const singleItemPrice = Math.floor(props.product.price / 2);
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  &__img-wrapper {
    height: 180px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__price {
    margin-top: 31px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 10px;

    > * {
      &:first-child {
        font-size: 24px;
        line-height: 1.4em;
        font-weight: 500;
      }

      &:last-child {
        padding: 4px;
        line-height: 1em;
        letter-spacing: -0.05em;
        background-color: $color-black;
        color: $color-white;
        height: max-content;
      }
    }
  }

  &__name {
    font-size: 16px;
    line-height: 1.4em;
  }
  
  &__favorite {
    padding: 2px;
    width: 24px;
    height: 24px;
    line-height: 0;
    background-color: transparent;
    position: absolute;
    right: 10px;
    top: 10px;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1024px) {
    &__img-wrapper {
      height: 120px;
    }
  }

  @media (max-width: 767px) {
    width: 150px;

    &__img-wrapper {
      height: 95px;
    }

    &__price {
      margin-top: 15px;
      flex-direction: column;
      align-items: flex-start;
      gap: 9px;

      > *:first-child {
        line-height: .8em;
      }
    }

    &__name {
      font-size: 12px;
    }
  }

  @media (max-width: 360px) {
    width: 100%;

    &__img-wrapper {
      height: 130px;
    }
  }
}
</style>