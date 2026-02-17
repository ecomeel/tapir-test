import { useProductsStore } from "~/entities/products/model/store";
import { getProducts } from "~/entities/products";

export function useLoadMoreProducts() {
  const productStore = useProductsStore();

  const loadMore = async (limit: number) => {
    if (productStore.pending) return

    productStore.pending = true
    productStore.setError(false)

    try {
      const result = await getProducts(
        productStore.page,
        limit
      )

      productStore.appendProducts(result)
    } catch (e) {
      productStore.setError(true)
    } finally {
      productStore.pending = false
    }
  };

  return {
    loadMore,
  }
}