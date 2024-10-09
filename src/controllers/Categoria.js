import sequelize from "../configs/database.js";
import Categoria from "../models/Categoria.js";
import validarParametroDeURL from "../helpers/funciones.js";
import { Op } from "sequelize";
// import Product from "../models/Product.js";
// import { Image } from "../models/Image.js";
// import { cloudinary } from "../utils/cloudinary.js";

class ControladorCategoria {
  static async crearCategoria(req, res) {
    try {
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(500).json(`El nombre de la categoría es requerido`);
      }
      await sequelize.transaction(async (transaccion) => {
        const categoria = await Categoria.create(
          {
            nombre,
          },
          { transaction: transaccion }
        );
        return res.status(201).json(categoria);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerTodasLasCategorias(req, res) {
    try {
      await sequelize.transaction(async (transaccion) => {
        const categorias = await Categoria.findAll({
          attributes: ["id", "nombre"],
          order: [["id", "ASC"]],
          transaction: transaccion,
        });
        return res.status(200).json(categorias);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerCategoriaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const categoria = await Categoria.findByPk(id, {
        attributes: ["id", "nombre"],
      });
      if (!categoria) {
        return res.status(404).json(`No existe la categoría con el id: ${id}`);
      }
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async modificarCategoriaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(500).json(`El nombre de la categoría es requerido`);
      }
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json(`No existe la categoría con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await categoria.update({ nombre }, { transaction: transaccion });
        await categoria.save({ transaction: transaccion });
        return res.status(200).json(categoria);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async eliminarCategoriaPorId(req, res) {
    try {
      const id = req.params.id;
      const parametroEsValido = validarParametroDeURL(id);
      if (!parametroEsValido) {
        return res.status(500).json(`El parámetro '${id}' no es válido`);
      }
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json(`No existe la categoría con el id: ${id}`);
      }
      await sequelize.transaction(async (transaccion) => {
        await categoria.destroy({ transaction: transaccion });
        return res.status(200).json(categoria);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obtenerCategoriasPorCadenaDeTexto(req, res) {
    try {
      const offset = Number.parseInt(req.query.offset);
      const limit = Number.parseInt(req.query.limit);
      const texto = req.query.texto;
      await sequelize.transaction(async (transaccion) => {
        const { count, rows } = await Categoria.findAndCountAll({
          where: {
            nombre: {
              [Op.like]: `%${texto}%`,
            },
          },
          offset,
          limit,
          transaction: transaccion,
        });
        return res.status(200).json({ categorias: rows, cantidad: count });
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default ControladorCategoria;
