function validarParametroDeURL(parametro) {
  const parametroEnNumero = Number(parametro);
  if (Number.isNaN(parametroEnNumero) || !Number.isInteger(parametroEnNumero)) {
    return false;
  }
  return true;
}

export default validarParametroDeURL;
