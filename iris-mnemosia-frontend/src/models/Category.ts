import * as yup from "yup";

export interface Category {
  id: string;
  name: string;
}

export const CategorySchema = yup
  .object({
    name: yup.string().max(100).required(),
  })
  .json()
  .camelCase();

export type CategoryForm = yup.InferType<typeof CategorySchema>;
