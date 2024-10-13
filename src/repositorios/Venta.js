import RepositorioBase from "./Base.js";
import { Venta, DetalleVenta, Producto, Cliente } from "../modelos/index.js";
// import ModeloDetalleVenta from "../modelos/DetalleVenta.js";

class RepositorioVenta extends RepositorioBase {
  constructor() {
    super(Venta);
  }

  obtenerPorId = async (id) => {
    try {
      return await this.model.findByPk(id, {
        include: [
          {
            model: Cliente,
            as: "cliente",
          },
          {
            model: DetalleVenta,
            as: "detallesVenta",
            include: [
              {
                model: Producto,
                as: "producto",
              },
            ],
          },
        ],
      });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el elemento con ID: ${id}: ${error.message}`
      );
    }
  };
}

const repositorioVenta = new RepositorioVenta();
export default repositorioVenta;
