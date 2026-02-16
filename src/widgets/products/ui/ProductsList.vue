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
}
</style>