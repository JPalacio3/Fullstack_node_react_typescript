import { DraftProductSchema, ProductsSchema } from "../types";
import axios from "axios";
import { safeParse } from "valibot";

type productData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: productData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: Number(data.price),
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error("Datos NO Válidos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios.get(url);
    const result = safeParse(ProductsSchema, data.data);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error al cargar los productos");
    }
  } catch (error) {
    console.log(error);
  }
}
