//obj = {prop1: "valor1", prop2: "valor2"};
//objArray = [{nombre: 'XXX', valor: 'YYY'}, {nombre: 'zz', valor: 'hh'}];

// function extiendeObjeto(obj, arrObj) {
//   //escribe aqui el codigo
//   return arrObj.reduce((acc, cur) => ({
//     ...acc, [cur.nombre]: cur.valor
//   }), obj)

  //  const a = {
  //    y:'x'
  //  }

  // function extiendeObjeto(obj, arrObj) {
  //   return arrObj.reduce((acc, cur) => {
  //       acc[cur.nombre] = cur.valor;
  //       return acc;
  //     }, obj);   
      
      
      function extiendeObjeto(obj, arrObj) {
         arrObj.forEach((cur) => 
            obj[cur.nombre] = cur.valor //sobre mi mismo obj utiliza las propiedades del otro objecto cur
          );
      }



//console.log(extiendeObjeto({prop1: "valor1", prop2: "valor2"},[{nombre: 'XXX', valor: 'YYY'}, {nombre: 'zz', valor: 'hh'}]));

module.exports = extiendeObjeto;

