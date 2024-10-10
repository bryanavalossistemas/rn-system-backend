import sequelize from "../configuraciones/BaseDeDatos.js";
import validarParametroDeURL from "../funciones/funciones.js";
import Rol from "../modelos/Rol.js";

class ControladorRol {
  static async crearRol(req, res) {
    try {
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(500).json("EL nombre del Rol es requerido");
      }
      await sequelize.transaction(async (transaccion) => {
        const rol = await Rol.create(
          {
            nombre,
          },
          { transaction: transaccion }
        );
        return res.status(201).json(rol);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerTodosLosRoles(req, res) {
    try {
      await sequelize.transaction(async (transaction) => {
        const roles = await Rol.findAll({
          attributes: ["id", "nombre"],
          order: [["id", "ASC"]],
          transaction: transaction,
        });
        return res.status(200).json(roles);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerRolPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const rol = await Rol.findByPk(id, {
        attributes: ["id", "nombre"],
      });
      if (!rol) {
        return res.status(404).json(`No existe el rol con el id: ${id}`);
      }
      return res.status(200).json(rol);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarRolPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(500).json(`El nombre del rol es requerido`);
      }
      const rol = await Rol.findByPk(id);
      if (!rol) {
        return res.status(404).json(`No existe el rol con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await rol.update({ nombre }, { transaction: transaccion });
        await rol.save({ transaction: transaccion });
        return res.status(200).json(rol);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async eliminarRolPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const rol = await Rol.findByPk(id);
      if (!rol) {
        return res.status(404).json(`No existe el rol con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await rol.destroy({ transaction: transaccion });
        return res.status(200).json(rol);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default ControladorRol;
