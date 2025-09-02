import server from "./server";
import colors from "colors";

const port = process.env.port || 5434;

server.listen(port, () => {
  console.log(
    colors.bold.bgMagenta.white(`Servidor corriendo en el puerto ${port}`)
  );
});