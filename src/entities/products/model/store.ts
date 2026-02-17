import { type Product, type GetProductsRequest } from "./types";

export const useProductsStore = defineStore("products", () => {
  const renderedItems = ref<Product[]>([])
  const page = ref(1)
  const hasMore = ref(true)
  const pending = ref(false)
  const error = ref(false)

  const setInitial = (data: GetProductsRequest) => {
    renderedItems.value = data.products
    page.value = 2
    hasMore.value = page.value <= data.totalPages
  }

  const appendProducts = (data: GetProductsRequest) => {
    renderedItems.value.push(...data.products)
    page.value++
    hasMore.value = page.value <= data.totalPages
  }

  const setError = (value: boolean) => {
    error.value = value
  }

  return {
    renderedItems,
    page,
    hasMore,
    pending,
    error,
    setError,
    setInitial,
    appendProducts,
  }
})