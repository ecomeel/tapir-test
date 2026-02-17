<template>
  <div class="products">
    <ProductCard 
      v-for="card in products" 
      :key="card.id"
      :product="card"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import { type Product } from '~/entities/products/model/types';

defineProps<{ products: Product[] }>();
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1279px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 767px) {
    gap: 20px
  }

  @media (max-width: 460px) {
    grid-template-columns: repeat(2, 150px);
  }

  @media (max-width: 359px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>