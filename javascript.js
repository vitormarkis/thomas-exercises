//cuidar festas arrays e if e else
//itemnp item não permitido
const items_mochila_enaldo = [
  "bilheteentrar",
  "identidade",
  "faca",
  "bebida",
];
const ricardo = ["bilheteentrar", "dinheiro", "identidade", "faca"];
const ederson = [
  "bilheteentrar",
  "dinheiro",
  "identidade",
  "celular",
];

function verificarPertencesDaPessoa(pertencesPessoa) {
  const itensNaoPermitidos = pertencesPessoa.filter(
    (item) => item === "faca" || item === "bebida"
  );

  return itensNaoPermitidos.length === 0 ? "A" : "C";
}

let verificado1 = verificarPertencesDaPessoa(ederson);
let verificado2 = verificarPertencesDaPessoa(items_mochila_enaldo);
let verificado3 = verificarPertencesDaPessoa(ricardo);

console.log(verificado1);
// console.log(verificado2);
// console.log(verificado3);

// resumo codigoo
//linhas 3, 4 e 5
// criei 3 arrays com 2 com os itens proibidos

// criei uma função  que tem como parametro pessoa que e basicamente um array

// na linha 8 eu criei o sistema da propria função usando o filter filtrando/
//  criando um novo array que passou sob as condições

// as palavras faca e bebida(os itens não permitidos), o ||
//  ta verificando se tem os itens faca ou bebida

//o if e o els estão dando a resposta da function se tiver itemnp if se nn tiver else

// e a linha 19-21 e so usando a function nos arrays

//* outras coisas

//pegaritemnaopermitido e o array que fica com itensnp ou fica vazio

//  o "> 0" e uma expressão condicional, ele esta verificando se o valor a esquerda e maior do que o 0, ele serve no codigo para verificar se tem itens não permitidos no array pegaritemnãopermitido
// o que e o === verifica o valor e o tipo dos operandos.

// === - compara o valor da esquerda com o valor da direita

// || signifca OU

// Ternario: ? : INCERTEZA, PODE SER TRUE OU FALSE ? VALOR SE FOR TRUE : VALOR SE FOR FALSE
