//cuidar festas arrays e if e else
//itemnp item não permitido
const enaldo = ["bilheteentrar", "ententidade", "arma", "droga"];
const ricardo = ["bilheteentrar", "dinheiro", "ententidade", "arma"];
const ederson = ["bilheteentrar", "dinheiro", "ententidade", "celular"];

function verificarpessoa(pessoa) {
  const pegarItemNaoPermitido = pessoa.filter(
    (itemnp) => itemnp === "arma" || itemnp === "droga"
  );

  return pegarItemNaoPermitido.lenght > 0 ? "nao pode entrar" : "pode entrar";
}

let verificado1 = verificarpessoa(ederson);
let verificado2 = verificarpessoa(enaldo);
let verificado3 = verificarpessoa(ricardo);

console.log(verificado1);
// console.log(verificado2);
// console.log(verificado3);

// resumo codigo
//linhas 3, 4 e 5
// criei 3 arrays com 2 com os itens proibidos

// criei uma função  que tem como parametro pessoa que e basicamente um array

// na linha 8 eu criei a funçao da propria função o usando o filter filtrando/
//  criando um novo array que passou sob as condições

// as palavras arma e droga(os itens não permitidos), o ||
//  ta verificando se tem os itens arma ou droga

//o if e o els estão dando a resposta da function se tiver itemnp if se nn tiver else

// e a linha 19-21 e so usando a function nos arrays

//* outras coisas

//pegaritemnaopermitido e o array que fica com itensnp ou fica vazio

//  o "> 0" e uma expressão condicional, ele esta verificando se o valor a esquerda e maior do que o 0, ele serve no codigo para verificar se tem itens não permitidos no array pegaritemnãopermitido
// o que e o === verifica o valor e o tipo dos operandos.
