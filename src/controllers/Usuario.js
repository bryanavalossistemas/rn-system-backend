import sequelize from "../configs/database.js";
import validarParametroDeURL from "../helpers/funciones.js";
import Usuario from "../models/Rol.js";


class ControllerUsuario{
    static async crearUsuario(req, res){
        try{
            const{nombre} = req.body;
            if(!nombre){
                return res.status(500).json('EL nombre del Rol es requerido')
            }
            await sequelize.transaction(async(transaction)=> {
                const rol = await Usuario.create(
                    {
                        nombre,
                        usuario,
                        contrasenia,
                        roleId,
                    },
                    {transaction: transaction}
                )
            });
        } catch (error){
            return res.status(500).json(error.message);
        }
        
    }

    static async obtenerUsuario(req,res){
      try{
        await sequelize.transaction(async(transaction)=>{
            const usuario = await Usuario.findAll({
                attributes: ["id", "nombre", "usuario" ,"contrasenia","roleId"],
                order:[["id", "ASC"]],
                transaction: transaction,
                
            });
            return res.status(200).json(usuario);
        });
      } catch (error){
        return res.status(500).json(error.message);
        }
    }

    static async obtenerUsuarioId(req,res){
       try {
        const id = req.params.id;
        const parametroVal = validarParametroDeURL(id);
        if(!parametroVal){
            return res.status(500).json(`El parámetro '${id}' no es válido`);
        }
        const usuario = await Usuario.findByPk(id,{
            attributes:["id","nombre","usuario","contrasenia","roleId"]
        });
        if(!usuario){
            return res.status(404).json(`No existe la marca con el id: ${id}`);
        }
        return res.status(200).json(rol);
       }catch(error){
        return res.status(500).json(error.message);
    }

    }

    static async modificarRolId(req,res){
       try{
        const id = req.params.id;
        const parametroVal = validarParametroDeURL(id);
        if(!parametroVal){
            return res.status(500).json(`El parámetro '${id}' no es válido`);
        }
        const {nombre} = req.body;
       
        if(!nombre){
            return res.status(500).json(`El nombre de la marca es requerido`);
        }

        const usuario = await Usuario.findByPk(id);
        if(!marca){
            return res.status(404).json(`No existe la marca con el id: ${id}`); 
        }
        await sequelize.transaction(async(transaction)=>{
            await usuario.update({nombre}, {transaction: transaccion});
            await usuario.save({transaction:transaction});
            return res.status(200).json(usuario);
        });
       }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async eliminarRolporId(req,res){
        try{
            const id = req.params.id;
            const parametroValido = validarParametroDeURL(id);

            if(!parametroValido){
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }
            const usuario = await Usuario.findByPk(id);
            if(!usuario){
                return res.status(404).json(`No existe la marca con el id: ${id}`);
            }
            await sequelize.transaccion(async(transaccion)=>{
                await usuario.destroy({transaction: transaccion});
                return res.status(200).json(marca);
            });
        } catch(error){
            return res.status(500).json(error.message);
        }
    }   
}

export default ControllerUsuario;