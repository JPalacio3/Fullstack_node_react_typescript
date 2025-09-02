import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateAvailability,
  deleteProduct,
} from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

// Schema para la documentación de la API de productos
/**
 * @swagger
 *components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: ID del producto
 *          format: uuid
 *          example: "550e8400-e29b-41d4-a716-446655440000"
 *
 *        name:
 *          type: string
 *          description: Nombre del producto
 *          example: "Producto de ejemplo"
 *
 *        price:
 *          type: number
 *          description: Precio del producto
 *          example: 100
 *
 *        availability:
 *          type: boolean
 *          description: Disponibilidad del producto
 *          example: true
 *
 *      example:
 *        id: "550e8400-e29b-41d4-a716-446655440000"
 *        name: "Producto de ejemplo"
 *        price: 100
 *        availability: true
 */

// Schema para la documentación de la API de obtener productos
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags:
 *       - Products
 *     description: Retorna la lista de productos
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */

// Schema para la API de obtener un producto por ID
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags:
 *       - Products
 *     description: Retorna un producto específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Producto no encontrado"
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Solicitud inválida"
 */

// Schema para la API de crear un producto
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags:
 *       - Products
 *     description: Crea un nuevo producto
 *     parameters:
 *       - in: body
 *         name: product
 *         required: true
 *         description: Objeto del producto a crear
 *         schema:
 *           $ref: '#/components/schemas/Product'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *        201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *        400:
 *          description: Invalid request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: "Solicitud inválida"
 *
 *
 */

// Schema para la API de actualizar un producto
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags:
 *       - Products
 *     description: Actualiza un producto existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Producto no encontrado"
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Solicitud inválida"
 */

// Schema para la API de actualizar la disponibilidad de un producto
/**
 * @swagger
 * /api/products/{id}/availability:
 *   patch:
 *     summary: Actualizar la disponibilidad de un producto
 *     tags:
 *       - Products
 *     description: Actualiza la disponibilidad de un producto existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               availability:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Producto no encontrado"
 *
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Solicitud inválida"
 */

// Schema para la API de eliminar un producto
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags:
 *       - Products
 *     description: Elimina un producto existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       204:
 *         description: Successful response
 *         content: {}
 *
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Producto no encontrado"
 *
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Solicitud inválida"
 */

// Router
router.get("/", getProducts);

// Ruta para obtener un producto por ID
router.get(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
);

// Ruta para crear un producto
router.post(
  "/",
  // Validar los datos del formulario
  body("name").notEmpty().withMessage(" El nombre del producto es obligatorio"),

  body("price")
    .notEmpty()
    .withMessage(" El precio del producto es obligatorio")
    .isNumeric()
    .withMessage("Valor no válido")
    .custom((value) => value > 1)
    .withMessage("Precio NO válido"),

  // Middleware para manejar los errores de entrada
  handleInputErrors,

  // Handler para crear el producto
  createProduct
);

// Ruta para actualizar el producto
router.put(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),

  // Validar los datos del formulario
  body("name").notEmpty().withMessage(" El nombre del producto es obligatorio"),

  body("price")
    .notEmpty()
    .withMessage(" El precio del producto es obligatorio")
    .isNumeric()
    .withMessage("Valor no válido")
    .custom((value) => value > 1)
    .withMessage("Precio NO válido"),
  body("availability")
    .optional()
    .isBoolean()
    .withMessage("Valor para disponibilidad no válido"),

  // Middleware para manejar los errores de entrada
  handleInputErrors,
  updateProduct
);

// Ruta para actualizar la disponibilidad del producto
router.patch(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),
  handleInputErrors,
  updateAvailability
);

// Ruta para eliminar un producto
router.delete(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),
  handleInputErrors,
  deleteProduct
);

export default router;
