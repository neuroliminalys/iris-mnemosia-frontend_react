import * as yup from "yup";
import type { Tag } from "./Tag";

export interface Resource {
  id: string;
  title: string;
  description?: string;
  content: string;
  created_at: string;
  updated_at: string;
  category_id?: string;
  tag_association: Tag[];
}

export const ResourceSchema = yup.object({
  title: yup.string().max(100).required(),
  description: yup.string(),
  content: yup.string().required(),
  category_id: yup.string(),
});

export type ResourceForm = yup.InferType<typeof ResourceSchema>;
