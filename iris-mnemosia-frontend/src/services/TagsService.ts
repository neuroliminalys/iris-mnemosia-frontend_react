import { mnemosiaApi } from "../config/QueryClients";
import type { Tag, TagForm } from "../models/Tag";

const axiosClient = mnemosiaApi;
const endpoint = "/tags";

export function getAllTags(): Promise<Tag[]> {
  return axiosClient
    .get<Tag[]>(endpoint)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function getTagById(id: string): Promise<Tag> {
  return axiosClient
    .get<Tag>(`${endpoint}/${id}`)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function postTag(payload: TagForm): Promise<Tag> {
  return axiosClient
    //   "Content-Type": "application/json" is set by default, no need to precise it
    .post<Tag>(endpoint, payload)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function putTag(
  id: string,
  payload: TagForm,
): Promise<Tag> {
  return axiosClient
    //   "Content-Type": "application/json" is set by default, no need to precise it
    .put<Tag>(`${endpoint}/${id}`, payload)
    .then((resp) => resp.data)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}

export function deleteTag(id: string): Promise<void> {
  return axiosClient
    .delete<void>(`${endpoint}/${id}`)
    .then(() => undefined)
    .catch((e) => {
      console.log(e);
      throw e;
    });
}
