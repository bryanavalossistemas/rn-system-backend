import Administrador from "../models/Administrador.js";
import sequelize from "../configs/database.js";
import validarParametroDeURL from "../helpers/funciones.js";
import Usuario from "../models/Usuario.js";
import Vendedor from "../models/Vendedor.js";

class ControladorAdministrador {
  static async crearVendedor(req, res) {
    try {
      const { nombre, usuario, contrasenia, rolId, dni, telefono } = req.body;
      if (!nombre || !usuario || !contrasenia || !rolId || !dni || !telefono) {
        return res.status(500).json("Los datos del venedor son requeridos");
      }
      await sequelize.transaction(async (transaction) => {
        const user = await Usuario.create(
          {
            nombre,
            usuario,
            contrasenia,
            rolId,
          },
          { transaction: transaction }
        );
        const vendedor = await Vendedor.create(
          {
            dni,
            telefono,
            usuarioId: user.id,
          },
          { transaction: transaction }
        );
        const respuesta = {
          id: vendedor.id,
          nombre: user.nombre,
          usuario: user.usuario,
          contrasenia: user.contrasenia,
          dni: vendedor.dni,
          telefono: vendedor.telefono,
          userId: vendedor.usuarioId,
        };
        return res.status(201).json(respuesta);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarVendedorPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const { nombre, usuario, contrasenia, rolId, dni, telefono } = req.body;
      if (!nombre || !usuario || !contrasenia || !rolId || !dni || !telefono) {
        return res
          .status(500)
          .json("Todos los campos son requeridos para la actualización.");
      }
      const vendedor = await Vendedor.findByPk(id);
      if (!vendedor) {
        return res.status(404).json(`No existe el vendedor con el id: ${id}`);
      }
      const user = await Usuario.findByPk(vendedor.usuarioId);
      if (!user) {
        return res
          .status(404)
          .json(`No existe el usuario relacionado con el vendedor id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await vendedor.update({ dni, telefono }, { transaction: transaccion });
        await vendedor.save({ transaction: transaccion });
        await user.update(
          { nombre, usuario, contrasenia, rolId },
          { transaction: transaccion }
        );
        await user.save({ transaction: transaccion });
        const respuesta = {
          id: vendedor.id,
          nombre: user.nombre,
          usuario: user.usuario,
          contrasenia: user.contrasenia,
          dni: vendedor.dni,
          telefono: vendedor.telefono,
        };
        return res.status(200).json(respuesta);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarDatosDelAdministradorPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const { nombre, usuario, contrasenia } = req.body;
      if (!nombre || !usuario || !contrasenia) {
        return res.status(500).json(`Los datos del usuario son requeridos`);
      }
      const administrador = await Administrador.findByPk(id);
      if (!administrador) {
        return res
          .status(404)
          .json(`No existe el administrador con el id: ${id}`);
      }
      const user = await Usuario.findByPk(administrador.usuarioId);
      if (!user) {
        return res
          .status(404)
          .json(
            `No existe el usuario relacionado con el administrador id: ${id}`
          );
      }
      await sequelize.transaction(async (transaccion) => {
        await user.update(
          { nombre, usuario, contrasenia },
          { transaction: transaccion }
        );
        await user.save({ transaction: transaccion });
        const respuesta = {
          id: administrador.id,
          nombre: user.nombre,
          usuario: user.usuario,
          contrasenia: user.contrasenia,
        };
        return res.status(200).json(respuesta);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerTodosLosVendedores(req, res) {
    try {
      await sequelize.transaction(async (transaction) => {
        const vendedores = await Vendedor.findAll({
          include: { model: Usuario, as: "usuario" },
          attributes: ["id", "dni", "telefono"],
          order: [["id", "ASC"]],
          transaction: transaction,
        });
        const respuesta = vendedores.map((vendedor) => {
          return {
            id: vendedor.id,
            nombre: vendedor.usuario.nombre,
            usuario: vendedor.usuario.usuario,
            contrasenia: vendedor.usuario.contrasenia,
            dni: vendedor.dni,
            telefono: vendedor.telefono,
          };
        });
        return res.status(200).json(respuesta);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //   static async obtenerUsuarioPorId(req, res) {
  //     try {
  //       const id = req.params.id;
  //       const parametroEsValido = validarParametroDeURL(id);
  //       if (!parametroEsValido) {
  //         return res.status(500).json(`El parámetro '${id}' no es válido`);
  //       }
  //       const usuario = await Usuario.findByPk(id, {
  //         attributes: ["id", "nombre", "usuario", "contrasenia", "rolId"],
  //       });
  //       if (!usuario) {
  //         return res.status(404).json(`No existe el usuario con el id: ${id}`);
  //       }
  //       return res.status(200).json(usuario);
  //     } catch (error) {
  //       return res.status(500).json(error.message);
  //     }
  //   }

  //   static async eliminarUsuarioPorId(req, res) {
  //     try {
  //       const id = req.params.id;
  //       const parametroEsValido = validarParametroDeURL(id);
  //       if (!parametroEsValido) {
  //         return res.status(500).json(`El parámetro '${id}' no es válido`);
  //       }
  //       const usuario = await Usuario.findByPk(id);
  //       if (!usuario) {
  //         return res.status(404).json(`No existe el usuario con el id: ${id}`);
  //       }
  //       await sequelize.transaction(async (transaccion) => {
  //         await usuario.destroy({ transaction: transaccion });
  //         return res.status(200).json(usuario);
  //       });
  //     } catch (error) {
  //       return res.status(500).json(error.message);
  //     }
  //   }
  //   static async modificarAdministradorPorIdDeUsuario(req, res) {
  //     try {
  //       const id = req.params.id;
  //       const parametroEsValido = validarParametroDeURL(id);
  //       if (!parametroEsValido) {
  //         return res.status(500).json(`El parámetro '${id}' no es válido`);
  //       }
  //       const { nombre, usuario, contrasenia } = req.body;
  //       if (!nombre || !usuario || !contrasenia) {
  //         return res
  //           .status(500)
  //           .json(`Los datos del administrador son requeridos`);
  //       }
  //       const administrador = await ControladorUsuario.
  //       if (!administrador) {
  //         return res.status(404).json(`No existe el usuario con el id: ${id}`);
  //       }
  //       const usuariorelacionado = await Usuario.obtenerUsuario(
  //         administrador.usuario_id
  //       );
  //       if (!usuariorelacionado) {
  //         return res
  //           .status(404)
  //           .json(`No se pudo encontrar el usuario relacionado`);
  //       }
  //       const reqModificarUsuario = {
  //         params: {
  //           id: administrador.usuario_id,
  //         },
  //         body: {
  //           nombre,
  //           usuario,
  //           contrasenia,
  //           rol_id,
  //         },
  //       };
  //       await Usuario.modificarUsuarioId(reqModificarUsuario, res);
  //     } catch (error) {
  //       return res.status(500).json(error.message);
  //     }
}

export default ControladorAdministrador;
