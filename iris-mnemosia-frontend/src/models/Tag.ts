import * as yup from "yup";

export interface Tag {
    id: string,
    name: string,
}

export const TagSchema = yup.object({
    name: yup.string().max(100).required()
})

export type TagForm = yup.InferType<typeof TagSchema>