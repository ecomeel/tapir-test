import { API_BASE } from "./endpoints"
import { type RequestOptions } from "./types"

const api = $fetch.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const { params, body } = options

  return api<T>(url, {
    query: params,
    body,
  })
}