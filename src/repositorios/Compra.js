import RepositorioBase from "./Base.js";
import { Compra, Proveedor } from "../modelos/index.js";
import { formatDateToLocal } from "../funciones/funciones.js";

class RepositorioCompra extends RepositorioBase {
  constructor() {
    super(Compra);
  }

  obtenerTodos = async () => {
    try {
      const compras = await this.model.findAll({
        include: [{ model: Proveedor, as: "proveedor" }],
        order: [["id", "ASC"]],
      });
      return compras.map((compra) => {
        return {
          id: compra.id,
          proveedor: compra.proveedor.nombre,
          fecha: formatDateToLocal(new Date(compra.fecha)),
          total: compra.total,
        };
      });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener elementos: ${error.message}`
      );
    }
  };
}

const repositoriocompra = new RepositorioCompra();

export default repositoriocompra;
