import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function validarParametroDeURL(parametro) {
  const parametroEnNumero = Number(parametro);
  if (Number.isNaN(parametroEnNumero) || !Number.isInteger(parametroEnNumero)) {
    return false;
  }
  return true;
}

export async function encriptarContraseña(contrasenia) {
  try {
    const semilla = await bcrypt.genSalt(10);
    return await bcrypt.hash(contrasenia, semilla);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function verificarContrasenia(contrasenia, contraseniaGuardada) {
  try {
    return await bcrypt.compare(contrasenia, contraseniaGuardada);
  } catch (error) {
    throw new Error(error.message);
  }
}

export function generarJWT(datos) {
  const token = jwt.sign(datos, process.env.JWT_SECRET, {
    expiresIn: "180d",
  });
  return token;
}

export default validarParametroDeURL;
