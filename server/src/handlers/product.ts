import { Request, Response } from "express";
import Products from "../models/Product.model";

// Handler para guardar los productos en la base de datos
export const createProduct = async (req: Request, res: Response) => {
  try {
    // Enviar el producto a la base de datos
    const product = await Products.create(req.body);
    // Retornar el producto creado
    res.status(201).json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `"Error al crear el producto" : ${error} ` });
  }
};

// Handler para obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.findAll({
      order: [["createdAt", "DESC"]], // Ordenar por fecha de creación descendente
      attributes: { exclude: ["createdAt", "updatedAt"] }, // Excluir campos innecesarios
    });
    res.json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Handler para obtener un solo producto por ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Products.findByPk(id);

    // Validar si no existe el producto
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Handler para actualizar el producto - PUT
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Products.findByPk(id);

    // Validar si no existe el producto
    if (!product) {
      return res.status(404).json({ error: "Producto NO encontrado" });
    }

    // Actualizar el producto con los nuevos datos
    await product.update(req.body);
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Handler para actualizar la disponibilidad del producto - PATCH
export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);

  // Validar si no existe el producto
  if (!product) {
    return res.status(404).json({ error: "Producto NO encontrado" });
  }
  // Actualizar la disponibilidad del producto
  product.availability = !product.availability;
  await product.save();

  res.json({ data: product });
};

// Handler para eliminar un producto - DELETE
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Products.findByPk(id);

    // Validar si no existe el producto
    if (!product) {
      return res.status(404).json({ error: "Producto NO encontrado" });
    }

    // Eliminar el producto de la base de datos
    await product.destroy();
    res.json({
      data: `${product.name} Eliminado Correctamente`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
