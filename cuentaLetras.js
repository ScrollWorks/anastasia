function cuentaLetras(strg) {
  //escribe aqui el codigo
  let obj = {};
  strg.split('').forEach(ltr => obj[ltr] = 0);

  strg.split('').forEach(sumL => {
      obj[sumL] += 1;
  });
  return obj;
}

//console.log(cuentaLetras('Holaaaaa'));

module.exports = cuentaLetras;