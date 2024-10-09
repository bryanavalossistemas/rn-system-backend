import sequelize from "../configs/database.js";
import Marca from "../models/Marca.js"
import validarParametroDeURL from "../helpers/funciones.js";

class ControladorMarca {
  static async crearMarca(req, res) {
    try {
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(500).json(`El nombre de la marca es requerido`);
      }
      await sequelize.transaction(async (transaccion) => {
        const marca = await Marca.create(
          {
            nombre,
          },
          { transaction: transaccion }
        );
        return res.status(201).json(marca);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerTodasLasMarcas(req, res) {
    try {
      await sequelize.transaction(async (transaccion) => {
        const marcas = await Marca.findAll({
          attributes: ["id", "nombre"],
          order: [["id", "ASC"]],
          transaction: transaccion,
        });
        return res.status(200).json(marcas);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerMarcaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const marca = await Marca.findByPk(id, {
        attributes: ["id", "nombre"],
      });
      if (!marca) {
        return res.status(404).json(`No existe la marca con el id: ${id}`);
      }
      return res.status(200).json(marca);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarMarcaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(500).json(`El nombre de la marca es requerido`);
      }
      const marca = await Marca.findByPk(id);
      if (!marca) {
        return res.status(404).json(`No existe la marca con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await marca.update({ nombre }, { transaction: transaccion });
        await marca.save({ transaction: transaccion });
        return res.status(200).json(marca);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async eliminarMarcaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const marca = await Marca.findByPk(id);
      if (!marca) {
        return res.status(404).json(`No existe la marca con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await marca.destroy({ transaction: transaccion });
        return res.status(200).json(marca);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default ControladorMarca;
