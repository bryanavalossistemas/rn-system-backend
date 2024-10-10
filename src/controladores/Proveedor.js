import sequelize from "../configuraciones/BaseDeDatos.js";
import Proveedor from "../modelos/Proveedor.js"
import validarParametroDeURL from "../funciones/funciones.js";

class ControladorProveedor {
  static async crearProveedor(req, res) {
    try {
      const { nombre, ruc, telefono, direccion } = req.body;
      if (!nombre || !ruc || !telefono || !direccion) {
        return res.status(500).json(`Se requiere completar todos los campos`);
      }
      await sequelize.transaction(async (transaccion) => {
        const proveedor = await Proveedor.create(
          {
            nombre,
            ruc,
            telefono,
            direccion,
          },
          { transaction: transaccion }
        );
        return res.status(201).json(proveedor);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerTodosLosProveedores(req, res) {
    try {
      await sequelize.transaction(async (transaccion) => {
        const proveedores = await Proveedor.findAll({
          attributes: ["id", "nombre", "ruc", "telefono", "direccion"],
          order: [["id", "ASC"]],
          transaction: transaccion,
        });
        return res.status(200).json(proveedores);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerProveedorPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const proveedor = await Proveedor.findByPk(id, {
        attributes: ["id", "nombre", "ruc", "telefono", "direccion"],
      });
      if (!proveedor) {
        return res.status(404).json(`No existe el proveedor con el id: ${id}`);
      }
      return res.status(200).json(proveedor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarProveedorPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const { nombre, ruc, telefono, direccion  } = req.body;
      if (!nombre || !ruc || !telefono || !direccion) {
        return res.status(500).json(`Se requiere todos los campos`);
      }
      const proveedor = await Proveedor.findByPk(id);
      if (!proveedor) {
        return res.status(404).json(`No existe el proveedor con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await proveedor.update({ nombre, ruc, telefono, direccion }, { transaction: transaccion });
        await proveedor.save({ transaction: transaccion });
        return res.status(200).json(proveedor);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async eliminarProveedorPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const proveedor = await Proveedor.findByPk(id);
      if (!proveedor) {
        return res.status(404).json(`No existe el proveedor con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await proveedor.destroy({ transaction: transaccion });
        return res.status(200).json(proveedor);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default ControladorProveedor;
