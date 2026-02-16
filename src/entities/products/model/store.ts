import { useLoading } from "~/shared/lib/useLoading"
import { getProducts } from "./api";

export const useProductsStore = defineStore('products', () => {
  const {isLoading, withLoading} = useLoading();

  const products = ref([]);

  const loadProducts = async (page?: number, limit?: number) => {
    withLoading(async () => getProducts(page, limit))
  };

  return {
    products,
    loadProducts,
  }
})