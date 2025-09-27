import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import { swaggerSpec, swaggerUIOptions } from "./config/swagger";

// Conectar a  la base de datos
export async function connectDB() {
  try {
    await db.authenticate();
    await db.sync({ alter: true });

    // console.log(colors.bold.bgGreen.white("Conexión a la base de datos"));
  } catch (error: any) {
    console.log(
      colors.bold.white.bgRed("Hubo un error al conectar a la base de datos")
    );
    console.log(colors.red(error));
  }
}

connectDB();

// Instancia del servidor de express
const server = express();

// Permitir conexiones CORS
const corsOption: CorsOptions = {
  origin: function (origin, callback) {
    // --- INICIO DEL CAMBIO PARA DEBUGGING ---
    console.log("ORIGEN RECIBIDO:", origin);
    console.log("ORIGEN PERMITIDO:", process.env.FRONTEND_URL);
    // --- FIN DEL CAMBIO PARA DEBUGGING ---

    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(
        new Error(`Error de CORS: El origen ${origin} no está permitido.`),
        false
      );
    }
  },
};

server.use(cors(corsOption));

// Servidor de archivos estaticos
server.use(express.static("src/public"));

// Leer datos del formulario
server.use(express.json());

// Morgan para ver las peticiones por consola
server.use(morgan("combined"));

// Importación del router para obtener las peticiones de la API
server.use("/api/products", router);

// Docs
server.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec, swaggerUIOptions)
);

export default server;
