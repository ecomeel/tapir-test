<template>
<div class="content">
  <h1 class="content__title">Каталог</h1>

  <ProductsList :products="data?.products ?? []" />
</div>
</template>

<script setup lang="ts">
import { ProductsList } from '~/widgets/products';
import { getProducts } from '~/entities/products';
import { useBreakpoint } from '~/shared/lib/useBreakpoints';

const { isMobile } = useBreakpoint();

const MOBILE_ITEMS_PER_REQUEST = 6;
const DESKTOP_ITEMS_PER_REQUEST = 16;

const productsPage = ref(1);

const itemsLimit = computed(
  () => isMobile.value ?
  MOBILE_ITEMS_PER_REQUEST :
  DESKTOP_ITEMS_PER_REQUEST
);

const { data, pending, error, refresh } = useAsyncData(
  'products',
  () => getProducts(productsPage.value, itemsLimit.value)
);


watch([productsPage, itemsLimit], () => {
  refresh();
})

</script>

<style scoped lang="scss">

</style>