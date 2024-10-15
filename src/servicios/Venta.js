import repositorioVenta from "../repositorios/Venta.js";
import repositorioDetalleVenta from "../repositorios/DetalleVenta.js";
import repositorioProducto from "../repositorios/Producto.js";
import repositorioCliente from "../repositorios/Cliente.js";

class ServicioVentas {
  async crearVenta(cliente, detallesVenta) {
    try {
      const clienteExiste = repositorioCliente.obtenerPorId(cliente.id);
      if (!clienteExiste) {
        throw new Error(`No existe el cliente con ID: ${cliente.id}`);
      }
      for (let index = 0; index < detallesVenta.length; index++) {
        const producto = await repositorioProducto.obtenerPorId(
          detallesVenta[index].producto.id
        );
        if (!producto) {
          throw new Error(
            `No existe el producto con ID: ${detallesCompra[index].producto.id}`
          );
        }
        if (producto.stock < detallesVenta[index].cantidad) {
          throw new Error(
            `No existe suficiente stock para el producto: ${producto.nombre}, stock: ${producto.stock}`
          );
        }
      }
      const total = detallesVenta.reduce(
        (total, detalleVenta) =>
          total + detalleVenta.cantidad * detalleVenta.precioVenta,
        0
      );
      const subtotal = Math.round((total / 1.18) * 100) / 100;
      const igv = Math.round(subtotal * 0.18 * 100) / 100;
      const fecha = new Date();
      const nuevaVenta = {
        total,
        igv,
        subtotal,
        fecha,
        clienteId: cliente.id,
      };
      const venta = await repositorioVenta.agregar(nuevaVenta);
      for (let index = 0; index < detallesVenta.length; index++) {
        const nuevoDetalleVenta = {
          precioVenta: detallesVenta[index].precioVenta,
          cantidad: detallesVenta[index].cantidad,
          productoId: detallesVenta[index].producto.id,
          ventaId: venta.id,
        };
        await repositorioDetalleVenta.agregar(nuevoDetalleVenta);
        const producto = await repositorioProducto.obtenerPorId(
          detallesVenta[index].producto.id
        );
        const nuevoStock = producto.stock - detallesVenta[index].cantidad;
        await repositorioProducto.actualizar(producto.id, {
          stock: nuevoStock,
        });
      }
      const ventaCreada = await repositorioVenta.obtenerPorId(venta.id);
      return {
        ok: true,
        message: ventaCreada,
      };
    } catch (error) {
      throw new Error(`Error al crear la venta: ${error.message}`);
    }
  }

  async obtenerVentas() {
    try {
      return await repositorioVenta.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener las ventas: ${error.message}`);
    }
  }

  async obtenerVentaPorId(id) {
    try {
      const venta = await repositorioVenta.obtenerPorId(id);
      if (!venta) throw new Error("Venta no encontrada");
      return venta;
    } catch (error) {
      throw new Error(
        `Error al obtener la venta con ID ${id}: ${error.message}`
      );
    }
  }

  async modificarVentaPorId(id, fecha, subtotal, igv, total, clienteId) {
    try {
      const datosActualizados = {
        fecha,
        subtotal,
        igv,
        total,
        clienteId,
      };
      return await repositorioVenta.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar la venta con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarVentaPorId(id) {
    try {
      return await repositorioVenta.eliminar(id);
    } catch (error) {
      throw new Error(
        `Error al eliminar la venta con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioVentas = new ServicioVentas();
export default servicioVentas;
