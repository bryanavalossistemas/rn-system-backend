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
          telefono: vendedor.telefono,
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
      const vendedordni = await this.model.findOne({ where: { dni } });
      if (!vendedordni) {
        return null;
      }

      return vendedordni;
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el usuario con DNI: ${dni}: ${error.message}`
      );
    }
  };


  obtenerPorTelefono = async (telefono) => {
    try {
      const vendedortelefono = await this.model.findOne({ where: { telefono } });
      if (!vendedortelefono) {
        return null;
      }

      return vendedortelefono;
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el usuario con telefono: ${telefono}: ${error.message}`
      );
    }
  };
}

const repositorioVendedor = new RepositorioVendedor();

export default repositorioVendedor;
