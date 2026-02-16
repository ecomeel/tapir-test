<template>
<div class="content">
  <h1 class="content__title">Каталог</h1>

  <ProductsList :products="data?.products ?? []" />

  <!-- Отображать если не последняя страница -->
   <!-- Вынести кнопку в features -->
  <div class="load-action">
    <p v-show="error" class="load-action__error">
      Произошла ошибка, попробуйте позже
    </p>
    <TextButton
      v-bind="loadButtonSettings"
    />
  </div>
</div>
</template>

<script setup lang="ts">
import { ProductsList } from '~/widgets/products';
import { getProducts } from '~/entities/products';
import { useBreakpoint } from '~/shared/lib/useBreakpoints';
import TextButton from '~/shared/ui/TextButton/TextButton.vue';

// Селать рендер нужных товаров

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

const loadButtonSettings = computed(() => ({
  label: pending.value ? "Загрузка..." : error.value ? "Повторить" : "Показать еще",
  bordered: !pending.value,
  disabled: pending.value
}))

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

.load-action {
  margin-top: 110px;
  display: flex;
  justify-content: center;

  &__error {
    padding: 10px 24px;
    margin-bottom: 20px;
  }
}
</style>