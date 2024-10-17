import RepositorioBase from "./Base.js";
import { Vendedor, Usuario } from "../modelos/index.js";

class RepositorioVendedor extends RepositorioBase {
  constructor() {
    super(Vendedor);
  }

  obtenerTodos = async () => {
    try {
      const vendedores = await this.model.findAll({
        include: [{ model: Usuario, as: "usuario" }],
        order: [["id", "ASC"]],
      });
      const res = vendedores.map((vendedor) => {
        return {
          id: vendedor.id,
          nombre: vendedor.usuario.nombre,
          usuario: vendedor.usuario.usuario,
          contrasenia: vendedor.usuario.contrasenia,
          dni: vendedor.dni,
          celular: vendedor.celular,
        };
      });
      return res;
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener elementos: ${error.message}`
      );
    }
  };

  obtenerPorUsuarioId = async (usuarioId) => {
    try {
      return await this.model.findOne({ where: { usuarioId } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el vendedor con usuarioId: ${usuarioId}: ${error.message}`
      );
    }
  };

  obtenerPorDNI = async (dni) => {
    try {
      return await this.model.findOne({ where: { dni } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el vendedor con DNI: ${dni}: ${error.message}`
      );
    }
  };

  obtenerPorCelular = async (celular) => {
    try {
      return await this.model.findOne({ where: { celular } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el vendedor con celular: ${celular}: ${error.message}`
      );
    }
  };
}

const repositorioVendedor = new RepositorioVendedor();

export default repositorioVendedor;
