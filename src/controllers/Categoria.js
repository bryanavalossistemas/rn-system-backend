import sequelize from "../configs/database.js";
// import Product from "../models/Product.js";
import Categoria from "../models/Categoria.js";
// import { Image } from "../models/Image.js";
// import { cloudinary } from "../utils/cloudinary.js";

class ControladorCategoria {
  static async crearCategoria(req, res) {
    try {
      await sequelize.transaction(async (transaccion) => {
        const { nombre } = req.body;
        if (!nombre) {
          return res.status(500).json(`El nombre de la categoría es requerido`);
        }
        const categoria = await Categoria.create(
          {
            nombre,
          },
          { transaction: transaccion }
        );
        return res.status(201).json(categoria);
      });
    } catch (error) {
      return res.status(500).json("Hubo un error");
    }
  }

  static async obtenerTodasLasCategorias(req, res) {
    try {
      const categorias = await Categoria.findAll({
        // include: { model: Product, as: "products" },
        attributes: ["id", "nombre"],
        order: [["id", "ASC"]],
      });
      // const filteredProductCategories = categorias.map((productCategory) => {
      //   return {
      //     id: productCategory.id,
      //     name: productCategory.name,
      //     createdAt: productCategory.createdAt,
      //     products: productCategory.products.length,
      //   };
      // });
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json("Hubo un error");
    }
  }

  static async obtenerCategoriaPorId(req, res) {
    try {
      const parametro = req.params.id;
      const id = Number(parametro);
      if (Number.isNaN(id) || !Number.isInteger(id)) {
        return res
          .status(500)
          .json(`El parámetro '${parametro}' no es válido`);
      }
      const categoria = await Categoria.findByPk(id, {
        attributes: ["id", "nombre"],
      });
      if (!categoria) {
        return res.status(404).json(`No existe la categoría con el id: ${id}`);
      }
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json("Hubo un error");
    }
  }

  static async modificarCategoriaPorId(req, res) {
    try {
      await sequelize.transaction(async (transaccion) => {
        const parametro = req.params.id;
        const id = Number(parametro);
        if (Number.isNaN(id) || !Number.isInteger(id)) {
          return res
            .status(500)
            .json(`El parámetro '${parametro}' no es válido`);
        }
        const { nombre } = req.body;
        if (!nombre) {
          return res.status(500).json(`El nombre de la categoría es requerido`);
        }
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
          return res
            .status(404)
            .json(`No existe la categoría con el id: ${id}`);
        }
        categoria.nombre = nombre;
        await categoria.save();
        return res.status(200).json(categoria);
      });
    } catch (error) {
      return res.status(500).json("Hubo un error");
    }
  }

  static async eliminarCategoriaPorId(req, res) {
    try {
      const parametro = req.params.id;
      const id = Number(parametro);
      if (Number.isNaN(id) || !Number.isInteger(id)) {
        return res
          .status(500)
          .json(`El parámetro '${parametro}' no es válido`);
      }
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json(`No existe la categoría con el id: ${id}`);
      }
      await categoria.destroy();
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json("Error");
    }
  }
}

export default ControladorCategoria;
