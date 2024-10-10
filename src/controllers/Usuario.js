import sequelize from "../configs/database.js";
import validarParametroDeURL from "../helpers/funciones.js";
import Usuario from "../models/Usuario.js"; 


class ControllerUsuario{
    static async crearUsuario(req, res){
        try{
            console.log("xd")
            const{nombre, usuario, contrasenia, rol_id} = req.body;
            if(!nombre || !usuario || !contrasenia || !rol_id){
                return res.status(500).json('EL datos son requiridos para el usuario')
            }
            await sequelize.transaction(async(transaction)=> {
                const usuario = await Usuario.create(
                    {
                        nombre,
                        usuario,
                        contrasenia,
                        rol_id,
                    },
                    {transaction: transaction}
                );
                return res.status(201).json(usuario);
            });
        } catch (error){
            return res.status(500).json(error.message);
        }
        
    }

    static async obtenerUsuario(req,res){
      try{
        await sequelize.transaction(async(transaction)=>{
            const usuario = await Usuario.findAll({
                attributes: ["id", "nombre", "usuario" ,"contrasenia","rol_id"],
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
            attributes:["id","nombre","usuario","contrasenia","role_id"]
        });
        if(!usuario){
            return res.status(404).json(`No existe la marca con el id: ${id}`);
        }
        return res.status(200).json(usuario);
       }catch(error){
        return res.status(500).json(error.message);
    }

    }

    static async modificarUsuarioId(req,res){
       try{
        const id = req.params.id;
        const parametroVal = validarParametroDeURL(id);
        if(!parametroVal){
            return res.status(500).json(`El parámetro '${id}' no es válido`);
        }
        const {nombre, usuario, contrasenia, rol_id} = req.body;
       
        if(!nombre ||  !usuario || !contrasenia || !rol_id ){
            return res.status(500).json(`los datos del usuario son requeridos`);
        }

        const user = await Usuario.findByPk(id);
        if(!user){
            return res.status(404).json(`No existe el usuario con el id: ${id}`); 
        }
        await sequelize.transaction(async(transaccion)=>{
            await user.update({nombre}, {transaction: transaccion});
            await user.save({transaction:transaccion});
            return res.status(200).json(user);
        });
       }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async eliminarUsuarioporId(req,res){
        try{
            const id = req.params.id;
            const parametroValido = validarParametroDeURL(id);

            if(!parametroValido){
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }
            const usuario = await Usuario.findByPk(id);
            if(!usuario){
                return res.status(404).json(`No existe el usuario con el id: ${id}`);
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