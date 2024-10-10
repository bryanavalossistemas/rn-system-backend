import sequelize from "../configs/database.js";
import validarParametroDeURL from "../helpers/funciones.js";
import Administrador from "../models/Administrador.js";
import Usuario from "../controllers/Usuario.js";
import Vendedor from "../controllers/Vendedor.js";



class ControllerAdmin{
    static async crearAdministrador(req, res){
        try{
            const{usuario_id} = req.body;
            if(!usuario_id){
                return res.status(500).json('los requerimientos del administrador es requerido')
            }
            await sequelize.transaction(async(transaction)=> {
                const administrador = await Administrador.create(
                    {
                        usuario_id,
                    },
                    {transaction: transaction}
                );
                return res.status(201).json(administrador);
            }); 
        } catch (error){
            return res.status(500).json(error.message);
        }
        
    }

    static async obtenerAdministrador(req,res){
      try{
        await sequelize.transaction(async(transaction)=>{
            const administrador = await Administrador.findAll({
                attributes: ["id","usuario_id"],
                order:[["id", "ASC"]],
                transaction: transaction,
                
            });
            return res.status(200).json(administrador);
        });
      } catch (error){
        return res.status(500).json(error.message);
        }
    }

    static async obtenerAdministradorId(req,res){
       try {
        const id = req.params.id;
        const parametroVal = validarParametroDeURL(id);
        if(!parametroVal){
            return res.status(500).json(`El parámetro '${id}' no es válido`);
        }
        const administrador = await Administrador.findByPk(id,{
            attributes:["id","usuario_id"]
        });
        if(!administrador){
            return res.status(404).json(`No existe el adminsitrador con el id: ${id}`);
        }
        return res.status(200).json(administrador);
       }catch(error){
        return res.status(500).json(error.message);
    }

    }

    static async modificarAdministradorId(req,res){
       try{
        const id = req.params.id;
        const parametroVal = validarParametroDeURL(id);
        if(!parametroVal){
            return res.status(500).json(`El parámetro '${id}' no es válido`);
        }
        const {nombre, usuario, contrasenia, rol_id} = req.body;
       
        if(!nombre || !usuario || !contrasenia || rol_id){
            return res.status(500).json(`los requerimientos del administrador son requeridos`);
        }
        const administrador = await Administrador.obtenerAdministrador(id);

        if(!administrador){
            return res.status(404).json(`No existe el usuario con el id: ${id}`); 
        }
        
        const usuariorelacionado = await Usuario.obtenerUsuario(administrador.usuario_id)
        if (!usuariorelacionado){    
            return res.status(404).json(`No se pudo encontrar el usuario relacionado`); 
        }

        const reqModificarUsuario = {
            params: {
                id: administrador.usuario_id 
            },
            body: {
                nombre,
                usuario,
                contrasenia,
                rol_id
            }
        };
        await Usuario.modificarUsuarioId(reqModificarUsuario, res)

       }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async eliminarAdministradorporId(req,res){
        try{
            const id = req.params.id;
            const parametroValido = validarParametroDeURL(id);

            if(!parametroValido){
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }
            const administrador = await Administrador.findByPk(id);
            if(!administrador){
                return res.status(404).json(`No existe el administrador con el id: ${id}`);
            }
            await sequelize.transaccion(async(transaccion)=>{
                await administrador.destroy({transaction: transaccion});
                return res.status(200).json(administrador);
            });
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
    
    static async modificarVendedorPorId(req, res) {
        try {
            const id = req.params.id;
            
            // Validar que el ID del vendedor es válido
            const parametroValido = validarParametroDeURL(id);
            if (!parametroValido) {
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }

            const { nombre, usuario, contrasenia, rol_id, dni, telefono } = req.body;

            if (!nombre || !usuario || !contrasenia || !rol_id || !dni || !telefono) {
                return res.status(500).json("Todos los campos son requeridos para la actualización.");

            }
            
            const vendedor = await Vendedor.obtenerVendedorId(id); 
            if (!vendedor) {
            return res.status(404).json(`No existe el vendedor con el id: ${id}`);
            }

            const user = await Usuario.obtenerUsuarioId(vendedor.usuario_id); 
            if (!user) {
            return res.status(404).json(`No existe el usuario relacionado con el vendedor id: ${id}`);
            }

            const reqModificarUsuario = {
                params: {
                    id: vendedor.usuario_id 
                },
                body: {
                    nombre,
                    usuario,
                    contrasenia,
                    rol_id
                }
            };

            const reqModificarVendedor = {
                params: {
                    id: vendedor.id
                },
                body: {
                    dni,
                    telefono
                }
            };
            
            await Usuario.modificarUsuarioId(reqModificarUsuario, res)
            await Vendedor.modificarVendedorId(reqModificarVendedor,res)

        } catch (error) {
            return res.status(500).json(error.message);
        }
    
    }

}




export default ControllerAdmin;