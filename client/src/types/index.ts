import {
  object,
  string,
  number,
  boolean,
  array,
  type InferOutput,
} from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: string(),
  name: string(),
  price: string(),
  availability: boolean(),
});

export const ProductsSchema = array(ProductSchema);
export type Product = InferOutput<typeof ProductSchema>;
