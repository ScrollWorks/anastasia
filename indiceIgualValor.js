function indiceIgualValor(arr) {
  // escribe aqui el codigo
  for(let i=0; i<arr.length; i++){
    return arr.some((ind) => arr[ind] === ind);
  }
}

//console.log(indiceIgualValor([7,3,6,4]));

module.exports = indiceIgualValor;