let arr = ["hola", "anastasia", "como", "estas"];

function cadenaMasLarga(arr) {
  // escribe aqui el codigo
  let longestWord = '';

  for(let i=0; i<arr.length; i++){
    if(arr[i].length > longestWord.length){
      longestWord = arr[i];
    }
  }
  // arr.forEach(ltr => {
  //   if(arr[ltr] > longestWord.length){
  //     longestWord = arr[ltr];
  //   }
  // });
  return longestWord;
}

// function cadenaMasLarga(arr) {
//   // escribe aqui el codigo
//   let longestWord = arr.reduce((a,b) => a.length > b.length ? a : b, '');
//   return longestWord;
// }

console.log(cadenaMasLarga(arr));


//module.exports = cadenaMasLarga;