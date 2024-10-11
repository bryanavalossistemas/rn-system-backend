import RepositorioBase from "./Base.js";
import ModeloVendedor from "../modelos/Vendedor.js";
import ModeloUsuario from "../modelos/Usuario.js";

class RepositorioVendedor extends RepositorioBase {
  constructor() {
    super(ModeloVendedor);
  }

  obtenerTodos = async () => {
    try {
      const vendedores = await this.model.findAll({
        include: [{ model: ModeloUsuario, as: "usuario" }],
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
}

const repositorioVendedor = new RepositorioVendedor();

export default repositorioVendedor;
