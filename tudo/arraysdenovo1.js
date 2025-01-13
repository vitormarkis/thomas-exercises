//findindex

// const CadeiraCinema = [12, 14, 13, 78];

// const Lugar = CadeiraCinema.findIndex(function aaa(element, index, array) {
//   return element === 14;
// });
// console.log(Lugar);

//------------------------  ---------
// forEach
// const cadeiraNumeros = [12, 12, 13, 78];

// const Lugar = cadeiraNumeros.forEach(function (value, index, array) {
//   console.log(`ìndex:   ${index} value: ${value}`);
// });

//---

//includes
const estojo = ["caneta", "borracha", "canetinha", "marcatexto"];
const letracestojo = estojo.filter((itemc) => {
  return itemc.startsWith("c");
});

console.log(letracestojo);
s;
//----------
//IndexOf
// const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(lista.indexOf(0));
// map;
// const numeross = [1, 2, 3, 4, 5];

// const NumerosTripicados = numeross.map(function (element, index, array) {
//   return element * 3;
// });

// console.log(numeross);
// console.log(NumerosTripicados);
//-------------------------
// pop
// const praia = ["grasiela", "thomas", "fernando", "vitor", "luna", "mike"];

// const naovai = praia.pop();

// console.log(praia);
// console.log(naovai);
//------------------------------------
//push
// const restaurante = ["thomas", "vitor"];

// const entrou = restaurante.push("pai", "mae");

// console.log(restaurante);
// console.log(entrou);
//--------------------
//shift
// const casa = ["mike", "pai", "mae", "thomas", "vitor"];

// const fujiu = casa.shift();

// console.log(casa);
// console.log(fujiu);
// --------------------------------
//slice
// const casa = ["mike", "pai", "mae", "thomas", "vitor"];

// const rua = casa.slice(1);

// console.log(casa);
// console.log(rua);
// -----------------------------------------
// some;
// const entrarfesta = [17, 16, 15, 14, 9, 20];

// const passa = entrarfesta.some(function (element, index, array) {
//   return element > 19;
// });

// console.log(passa);
// ---------------------------------------
// sort;
// const listaidademaisvelho = [100, 23, 53, 65, 14, 34, 13, 15];

// listaidademaisvelho.sort(function (a, b) {
//   if (a > b) return -1;
// });

// console.log(listaidademaisvelho);
//--------------------------------------------------
//splice

// const lista = ["neymar", "bolsonario", "lula", "Thomas"];

// const foradalista = lista.splice(2, 1, "vitor", "ronaldinhogaucho");

// console.log(lista);
// console.log(foradalista);
//----------------------------------------------------------

//----------------------------------------------
//unshit
// const pessoas = ["neymar", "thomas", "vitor", "cr7"];

// const maispessoas = pessoas.unshift("messi", "bolsonaro");
// console.log(pessoas);
// console.log(maispessoas);
//----------------------------
// reverse
// const numerosaleatorios = [
//   12, 23, 45, 24, 62, 53, 45, 25, 65, 32, 43, 3, 32, 21, 54, 65, 87, 745, 6, 45,
//   5654, 45, 45,
// ];
// numerosaleatorios.reverse();

// console.log({ numerosaleatorios });
//=´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´--------------------------
// const arr = [1, 2, 3];
// arr.push(4);
// const onlyeven = [1, 3]
// console.log(onlyeven);
//----------------------------------------------------------------------

// //reduce
// const dinheiropizza = [28, 12, 30];
// const rachadao = dinheiropizza.reduce(function (
//   accumulator,
//   value,
//   index,
//   array
// ) {
//   console.log(accumulator);
//   console.log("");
//   return accumulator + value;
// });
// console.log(rachadao);

// const numeros = [1, 2, 3];

// numeros.reverse]
// ();
// console.log(numeros);
