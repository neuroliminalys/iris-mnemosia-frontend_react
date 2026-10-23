import { mnemosiaApi } from "../config/QueryClients";
import type { Resource, ResourceForm } from "../models/Resource";

const axiosClient = mnemosiaApi;
const endpoint = "/resources";

export function getAllResources(): Promise<Resource[]> {
  return axiosClient
    .get<Resource[]>(endpoint)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function getResourceById(id: string): Promise<Resource> {
  return axiosClient
    .get<Resource>(`${endpoint}/${id}`)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function postResource(payload: ResourceForm): Promise<Resource> {
  return axiosClient
    //   "Content-Type": "application/json" is set by default, no need to precise it
    .post<Resource>(endpoint, payload)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function putResource(
  id: string,
  payload: ResourceForm,
): Promise<Resource> {
  return axiosClient
    //   "Content-Type": "application/json" is set by default, no need to precise it
    .put<Resource>(`${endpoint}/${id}`, payload)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function deleteResource(id: string): Promise<void> {
  return axiosClient
    .delete<void>(`${endpoint}/${id}`)
    .then(() => undefined)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}
