import app from "./app.js";
import colors from "colors";
import sequelize from "./configuraciones/BaseDeDatos.js";

// Funcion principal
async function main() {
  try {
    const init = process.argv[2];

    if (init) await sequelize.sync({ force: true });
    else await sequelize.sync({ force: false });

    console.log(colors.blue.bold("CONEXIÓN EXITOSA A LA BASE DE DATOS"));

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
      console.log(
        colors.cyan.bold(`SERVIDOR FUNCIONANDO EN EL PUERTO ${port}`)
      );
    });
  } catch (err) {
    console.error(err);
  }
}

main();
