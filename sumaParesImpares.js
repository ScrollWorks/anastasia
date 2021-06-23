//let arrNum = [1,2,3,4,5,6,7,8,9];

function sumaParesImpares(arrNum) {
  // escribe aqui el codigo
  const obj = {};
 obj.pares = arrNum.reduce((acc, cur) => acc + (cur % 2 === 0 ? cur : 0), 0);
 obj.impares = arrNum.reduce((acc, cur) => acc + (cur % 2 !== 0 ? cur : 0), 0);
 return obj;
}





module.exports = sumaParesImpares;

// function sumaParesImpares(arrNum) {
//   // escribe aqui el codigo
//   const obj = {};
//   for(i=0; i<arrNum.length; i++){
//     if(arrNum[i] % 2 === 0){
//       obj.even += arrNum[i];
//     }else{
//       obj.odd += arrNum[i];
//     }
//   }
//   return obj;
// }