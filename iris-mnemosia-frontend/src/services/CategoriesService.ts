import { mnemosiaApi } from "../config/QueryClients";
import type { Category, CategoryForm } from "../models/Category";

const axiosClient = mnemosiaApi;
const endpoint = "/categories";

export function getAllCategories(): Promise<Category[]> {
  return axiosClient
    .get<Category[]>(endpoint)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function getCategoryById(id: string): Promise<Category> {
  return axiosClient
    .get<Category>(`${endpoint}/${id}`)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function postCategory(payload: CategoryForm): Promise<Category> {
  return axiosClient
    //   "Content-Type": "application/json" is set by default, no need to precise it
    .post<Category>(endpoint, payload)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function putCategory(
  id: string,
  payload: CategoryForm,
): Promise<Category> {
  return axiosClient
    //   "Content-Type": "application/json" is set by default, no need to precise it
    .put<Category>(`${endpoint}/${id}`, payload)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function deleteCategory(id: string): Promise<void> {
  return axiosClient
    .delete<void>(`${endpoint}/${id}`)
    .then(() => undefined)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}
