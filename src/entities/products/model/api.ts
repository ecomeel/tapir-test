import { request } from "~/shared/api/api";
import { PRODUCTS } from "~/shared/api/endpoints";
import type { GetProductsRequest } from "./types";

export async function getProducts(page?: number, limit?: number) {
  return request<GetProductsRequest>(PRODUCTS, {
    params: { page, limit }
  })
}