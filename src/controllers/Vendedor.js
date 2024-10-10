import sequelize from "../configs/database.js";
import validarParametroDeURL from "../helpers/funciones.js";
import Vendedor from "../models/Vendedor.js";



class ControllerVendedor{
    static async crearVendedor(req, res){
        try{
            const{nombre} = req.body;
            if(!nombre){
                return res.status(500).json('los requerimientos del vendedor es requerido')
            }
            await sequelize.transaction(async(transaction)=> {
                const vendedor = await Vendedor.create(
                    {
                        dni,
                        telefono,
                        usuario_id,
                    },
                    {transaction: transaction}
                );
                return res.status(201).json(vendedor);
            }); 
        } catch (error){
            return res.status(500).json(error.message);
        }
        
    }

    static async obtenerVendedor(req,res){
      try{
        await sequelize.transaction(async(transaction)=>{
            const vendedor = await Vendedor.findAll({
                attributes: ["id","dni", "telefono","usuario_id"],
                order:[["id", "ASC"]],
                transaction: transaction,
                
            });
            return res.status(200).json(vendedor);
        });
      } catch (error){
        return res.status(500).json(error.message);
        }
    }

    static async obtenerVendedorId(req,res){
       try {
        const id = req.params.id;
        const parametroVal = validarParametroDeURL(id);
        if(!parametroVal){
            return res.status(500).json(`El parámetro '${id}' no es válido`);
        }
        const vendedor = await Vendedor.findByPk(id,{
            attributes:["id","dni", "telefono","usuario_id"]
        });
        if(!vendedor){
            return res.status(404).json(`No existe el vendedor con el id: ${id}`);
        }
        return res.status(200).json(vendedor);
       }catch(error){
        return res.status(500).json(error.message);
    }

    }

    static async modificarVendedorId(req,res){
       try{
        const id = req.params.id;
        const parametroVal = validarParametroDeURL(id);
        if(!parametroVal){
            return res.status(500).json(`El parámetro '${id}' no es válido`);
        }
        const {dni, telefono} = req.body;
       
        if(!dni || !telefono){
            return res.status(500).json(`los requerimientos del Vendedor son requeridos`);
        }

        const vendedor = await Vendedor.findByPk(id);
        if(!vendedor){
            return res.status(404).json(`No existe el usuario con el id: ${id}`); 
        }
        await sequelize.transaction(async(transaccion)=>{
            await vendedor.update({nombre}, {transaction: transaccion});
            await vendedor.save({transaction:transaccion});
            return res.status(200).json(vendedor);
        });
       }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async eliminarVendedorporId(req,res){
        try{
            const id = req.params.id;
            const parametroValido = validarParametroDeURL(id);

            if(!parametroValido){
                return res.status(500).json(`El parámetro '${id}' no es válido`);
            }
            const vendedor = await Vendedor.findByPk(id);
            if(!vendedor){
                return res.status(404).json(`No existe el vendedor con el id: ${id}`);
            }
            await sequelize.transaccion(async(transaccion)=>{
                await vendedor.destroy({transaction: transaccion});
                return res.status(200).json(vendedor);
            });
        } catch(error){
            return res.status(500).json(error.message);
        }
    }   
}

export default ControllerVendedor;