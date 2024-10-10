/* import sequelize from "../configs/database.js";
import Venta from "../models/Venta.js";
import DetalleVenta from "../models/DetalleVenta.js";
import validarParametroDeURL from "../helpers/funciones.js";

class ControladorVenta {
  static async crearVenta(req, res) {
    try {
      const { fecha, subtotal, igv, total, vendedorId, clienteId, detalles } = req.body;

      if (!fecha || !subtotal || !igv || !total || !vendedorId || !clienteId || !detalles) {
        return res.status(500).json(`Todos los campos son requeridos para crear la venta.`);
      }

      await sequelize.transaction(async (transaccion) => {
        const venta = await Venta.create(
          {
            fecha,
            subtotal,
            igv,
            total,
            vendedorId,
            clienteId,
          },
          { transaction: transaccion }
        );

        for (const detalle of detalles) {
          await DetalleVenta.create(
            {
              cantidad: detalle.cantidad,
              monto: detalle.monto,
              productoId: detalle.productoId,
              ventaId: venta.id,
            },
            { transaction: transaccion }
          );
        }

        return res.status(201).json(venta);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerVentas(req, res) {
    try {
      const ventas = await Venta.findAll({
        attributes: ["id", "fecha", "subtotal", "igv", "total", "vendedorId", "clienteId"],
        include: [{ model: DetalleVenta }],
        order: [["id", "ASC"]],
      });
      return res.status(200).json(ventas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerVentaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const venta = await Venta.findByPk(id, {
        attributes: ["id", "fecha", "subtotal", "igv", "total", "vendedorId", "clienteId"],
        include: [{ model: DetalleVenta }],
      });
      if (!venta) {
        return res.status(404).json(`No existe la venta con el id: ${id}`);
      }
      return res.status(200).json(venta);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarVentaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }

      const { fecha, subtotal, igv, total, vendedorId, clienteId } = req.body;

      if (!fecha || !subtotal || !igv || !total || !vendedorId || !clienteId) {
        return res.status(500).json(`Todos los campos son requeridos para modificar la venta.`);
      }

      const venta = await Venta.findByPk(id);
      if (!venta) {
        return res.status(404).json(`No existe la venta con el id: ${id}`);
      }

      await sequelize.transaction(async (transaccion) => {
        await venta.update(
          {
            fecha,
            subtotal,
            igv,
            total,
            vendedorId,
            clienteId,
          },
          { transaction: transaccion }
        );
        await venta.save({ transaction: transaccion });
        return res.status(200).json(venta);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async eliminarVentaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }

      const venta = await Venta.findByPk(id);
      if (!venta) {
        return res.status(404).json(`No existe la venta con el id: ${id}`);
      }

      await sequelize.transaction(async (transaccion) => {
        await venta.destroy({ transaction: transaccion });
        return res.status(200).json(venta);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default ControladorVenta;
*/