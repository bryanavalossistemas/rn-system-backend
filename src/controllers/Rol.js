import sequelize from "../configs/database.js";
import validarParametroDeURL from "../helpers/funciones.js";
import Role from "../models/Rol.js";


class ControllerRol{
    static async crearRol(req, res){
        try{
            const{nombre} = req.body;
            if(!nombre){
                return res.status(500).json('EL nombre del Rol es requerido')
            }
            await sequelize.transaction(async(transaccion) =>{
                const rol = await Role.create(
                {
                    nombre,
                },
                {transaction: transaccion}
            );
            return res.status(201).json(rol);

            });
        } catch (error){
            return res.status(500).json(error.message);
        }
        
    }

    static async obtenerRoles(req,res){
        try{
            await sequelize.transaction(async(transaction)=> {
                const roles = await Role.findAll({
                    attributes: ["id","nombre"],
                    order:[["id", "ASC"]],
                    transaction: transaction,
                });
                return res.status(200).json(roles);
            }); 
        }  catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async obtenerRolId(req,res){
        try {
            const id = req.params.id;
            const parametroVal = validarParametroDeURL(id);
            if(!parametroVal){
                return res.status(500).json(`El parámetro '${id}' no es válido`);        
            }
            const rol = await Role.findByPk(id,{
                attributes: ["id","nombre"],
            });
            if(!rol){
                return res.status(404).json(`No existe la marca con el id: ${id}`);
            }
            return res.status(200).json(rol);
        } catch(error){
            return res.status(500).json(error.message);
        }

    }

    static async modificarRolId(req,res){
        try {
            const id = req.params.id;
            const parametroValido = validarParametroDeURL(id);
            if(!parametroValido){
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }
            const {nombre} = req.body;

            if(!nombre){
                return res.status(500).json(`El nombre de la rol es requerido`);
            }
            const rol = await Role.findByPk(id);
            if (!rol){
                return res.status(404).json(`No existe la rol con el id: ${id}`);
            }
            await sequelize.transaction(async (transaccion)=>{
                await rol.update({nombre}, {transaction: transaccion});
                await rol.save({transaction: transaccion});
                return res.status(200).json(rol);
            });
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async eliminarRolporId(req,res){
        try{
            const id = req.params.id; 
            const parametroValido = validarParametroDeURL(id);
            if(!parametroValido) {
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }
            const rol = await Role.findByPk(id);
            if(!rol){
                return res.status(404).json(`No existe la marca con el id: ${id}`);

            }
            await sequelize.transaccion(async(transaccion)=>{
                await rol.destroy({transaction: transaccion});
                return res.status(200).json(rol);
            });
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
}

export default ControllerRol;