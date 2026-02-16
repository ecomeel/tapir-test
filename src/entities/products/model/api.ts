import { request } from "~/shared/api/api";
import { PRODUCTS } from "~/shared/api/endpoints";
import type { getProductsRequest } from "./types";

export async function getProducts(page?: number, limit?: number) {
  return request<getProductsRequest>(PRODUCTS, {
    params: { page, limit }
  })
}