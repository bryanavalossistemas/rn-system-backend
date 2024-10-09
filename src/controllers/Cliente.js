import sequelize from "../configs/database.js";
import validarParametroDeURL from "../helpers/funciones.js";
import Cliente from "../models/Cliente.js";

class ControllerCliente {
    // Crear un nuevo cliente
    static async crearCliente(req, res) {
        try {
            const { nombre, telefono, ruc } = req.body;
            if (!nombre) {
                return res.status(500).json('El nombre del cliente es requerido');
            }

            await sequelize.transaction(async (transaction) => {
                const cliente = await Cliente.create(
                    { nombre, telefono, ruc },
                    { transaction: transaction }
                );
                return res.status(201).json(cliente);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async obtenerClientes(req, res) {
        try {
            await sequelize.transaction(async (transaction) => {
                const clientes = await Cliente.findAll({
                    attributes: ["id", "nombre", "telefono", "ruc"],
                    order: [["id", "ASC"]],
                    transaction: transaction,
                });
                return res.status(200).json(clientes);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async obtenerClienteId(req, res) {
        try {
            const id = req.params.id;
            const parametroVal = validarParametroDeURL(id);
            if (!parametroVal) {
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }
            const cliente = await Cliente.findByPk(id, {
                attributes: ["id", "nombre", "telefono", "ruc"]
            });
            if (!cliente) {
                return res.status(404).json(`No existe el cliente con el id: ${id}`);
            }
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async modificarClienteId(req, res) {
        try {
            const id = req.params.id;
            const parametroVal = validarParametroDeURL(id);
            if (!parametroVal) {
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }

            const { nombre, telefono, ruc } = req.body;
            if (!nombre) {
                return res.status(500).json(`El nombre del cliente es requerido`);
            }

            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return res.status(404).json(`No existe el cliente con el id: ${id}`);
            }

            await sequelize.transaction(async (transaction) => {
                await cliente.update({ nombre, telefono, ruc }, { transaction: transaction });
                await cliente.save({ transaction: transaction });
                return res.status(200).json(cliente);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async eliminarClienteporId(req, res) {
        try {
            const id = req.params.id;
            const parametroValido = validarParametroDeURL(id);

            if (!parametroValido) {
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }

            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return res.status(404).json(`No existe el cliente con el id: ${id}`);
            }

            await sequelize.transaction(async (transaction) => {
                await cliente.destroy({ transaction: transaction });
                return res.status(200).json(`Cliente con id: ${id} eliminado correctamente`);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default ControllerCliente;
