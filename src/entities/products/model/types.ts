export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface getProductsRequest {
  currentPage: number;
  limit: number;
  total: number;
  totalPages: number;
  products: Product[];
}