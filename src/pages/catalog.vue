<template>
<div class="content">
  <h1 class="content__title">Каталог</h1>

  <ProductsList :products="productStore.renderedItems" />

  <LoadMore 
    v-show="productStore.hasMore"
    :pending="productStore.pending"
    :error="productStore.error"
    @click="() => loadMore(PRODUCTS_LIMIT_PER_REQUEST)"
  />
</div>
</template>

<script setup lang="ts">
import { ProductsList } from '~/widgets/products';
import { getProducts } from '~/entities/products';
import { LoadMore } from '~/features/load-more';
import { useProductsStore } from '~/entities/products/model/store';
import { useLoadMoreProducts } from '~/features/load-more-products/lib/useLoadMoreProducts';

const productStore = useProductsStore();
const { loadMore} = useLoadMoreProducts();

const PRODUCTS_LIMIT_PER_REQUEST = 16;

const { data } = await useAsyncData(
  'products-initial',
  () => getProducts(1, PRODUCTS_LIMIT_PER_REQUEST)
);

if (data.value && !productStore.renderedItems.length) {
  productStore.setInitial(data.value)
}

</script>

<style scoped lang="scss">
.content {
  padding-top: 100px;
  padding-bottom: 100px;

  &__title {
    margin-bottom: 110px;
    font-size: 42px;
    line-height: 1.1em;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
  }
}

</style>