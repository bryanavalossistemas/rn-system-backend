import repositorioDetalleCompra from "../repositorios/DetalleCompra.js";
import repositorioCompra from "../repositorios/Compra.js";
import repositorioProducto from "../repositorios/Producto.js";
import repositorioProveedor from "../repositorios/Proveedor.js";

class ServicioCompras {
  async crearCompra(proveedor, detallesCompra) {
    try {
      const proveedorBuscado = repositorioProveedor.obtenerPorId(proveedor.id);
      if (!proveedorBuscado) {
        throw new Error(`No existe el proveedor con ID: ${proveedor.id}`);
      }
      const total = detallesCompra.reduce(
        (total, detalleCompra) =>
          total + detalleCompra.cantidad * detalleCompra.precioCosto,
        0
      );
      const fecha = new Date();
      const nuevaCompra = { total, fecha, proveedorId: proveedor.id };
      const compra = await repositorioCompra.agregar(nuevaCompra);
      for (let index = 0; index < detallesCompra.length; index++) {
        const producto = await repositorioProducto.obtenerPorId(
          detallesCompra[index].producto.id
        );
        if (!producto) {
          throw new Error(
            `No existe el producto con ID: ${detallesCompra[index].producto.id}`
          );
        }
        const nuevoDetalleCompra = {
          cantidad: detallesCompra[index].cantidad,
          precioCosto: detallesCompra[index].precioCosto,
          productoId: detallesCompra[index].producto.id,
          compraId: compra.id,
        };
        await repositorioDetalleCompra.agregar(nuevoDetalleCompra);
        const nuevoStock = producto.stock + detallesCompra[index].cantidad;
        const nuevoCosto =
          (detallesCompra[index].precioCosto * detallesCompra[index].cantidad +
            producto.precioCosto * producto.stock) /
          (detallesCompra[index].cantidad + producto.stock);
        await repositorioProducto.actualizar(producto.id, {
          stock: nuevoStock,
          precioCosto: nuevoCosto,
        });
      }
      return compra;
    } catch (error) {
      throw new Error(`Error al crear la compra: ${error.message}`);
    }
  }

  async obtenerCompras() {
    try {
      return await repositorioCompra.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener las compras: ${error.message}`);
    }
  }

  async obtenerCompraPorId(id) {
    try {
      const compra = await repositorioCompra.obtenerPorId(id);
      if (!compra) throw new Error("compra no encontrada");
      return compra;
    } catch (error) {
      throw new Error(
        `Error al obtener la compra con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarCompra(id, total, fecha, proveedorId) {
    try {
      const datosActualizados = { total, fecha, proveedorId };
      return await repositorioCompra.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar la compra con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioCompras = new ServicioCompras();

export default servicioCompras;
