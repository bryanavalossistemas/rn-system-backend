import sequelize from "../configs/database.js";
import Compra from "../models/Compra.js"
import validarParametroDeURL from "../helpers/funciones.js";

class ControladorCompra {
  static async crearCompra(req, res) {
    try {
      const { total, fecha, proveedor_id } = req.body;
      if (!total || !fecha || !proveedor_id) {
        return res.status(500).json(`Se requieren completar campos de la compra`);
      }
      await sequelize.transaction(async (transaccion) => {
        const compra = await Compra.create(
          {
            total,
            fecha,
            proveedor_id,
          },
          { transaction: transaccion }
        );
        return res.status(201).json(compra);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerTodasLasCompras(req, res) {
    try {
      await sequelize.transaction(async (transaccion) => {
        const compras = await Compra.findAll({
          attributes: ["id", "total", "fecha", "proveedor_id"],
          order: [["id", "ASC"]],
          transaction: transaccion,
        });
        return res.status(200).json(compras);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerCompraPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const compra = await Compra.findByPk(id, {
        attributes: ["id", "total", "fecha", "proveedor_id"],
      });
      if (!compra) {
        return res.status(404).json(`No existe la compra con el id: ${id}`);
      }
      return res.status(200).json(compra);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarCompraPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const { total, fecha, proveedor_id } = req.body;
      if (!total || !fecha || !proveedor_id) {
        return res.status(500).json(`Se requiere completar campos de la compra`);
      }
      const compra = await Compra.findByPk(id);
      if (!compra) {
        return res.status(404).json(`No existe la compra con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await compra.update({ total, fecha, proveedor_id }, { transaction: transaccion });
        await compra.save({ transaction: transaccion });
        return res.status(200).json(compra);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async eliminarCompraPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const compra = await Compra.findByPk(id);
      if (!compra) {
        return res.status(404).json(`No existe la compra con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await compra.destroy({ transaction: transaccion });
        return res.status(200).json(compra);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default ControladorCompra;