import request from "supertest";
import server from "../../server";

describe("POST /api/products", () => {
  // Test para la validación de errores
  it("should display validation errors", async () => {
    const response = await request(server).post("/api/products").send({});

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors).toHaveLength(4);

    expect(response.status).not.toEqual(401);
    expect(response.body.errors).not.toHaveLength(0);
  });

  // Test para la creación de un nuevo producto
  it("should create a new product", async () => {
    const response = await request(server).post("/api/products").send({
      name: "creación de producto",
      price: 200,
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("data");

    expect(response.status).not.toBe(500);
    expect(response.status).not.toBe(400);
    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty("errors");
  });

  // Test para la validación del precio
  it("should validate that the price is greater than 0", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Producto con precio inválido",
      price: 0,
    });

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("msg", "Precio NO válido");
    expect(response.body.errors).toHaveLength(1);

    expect(response.status).not.toEqual(401);
    expect(response.body.errors).not.toHaveLength(0);
  });

  // Test para validar que el precio no sea una cadena de texto
  it("should validate that the price is greater than 0", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Producto con precio inválido",
      price: "texto",
    });

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[1]).toHaveProperty("msg", "Precio NO válido");
    expect(response.body.errors).toHaveLength(2);

    expect(response.status).not.toEqual(401);
    expect(response.body.errors).not.toHaveLength(0);
  });
});

describe("GET /api/products", () => {
  // Prueba para obtener todos los productos
  it("GET a JSON response with products", async () => {
    const response = await request(server).get("/api/products");
    expect(response.status).toBe(200);
  });
});
