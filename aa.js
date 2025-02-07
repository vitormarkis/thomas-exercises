//usando simplificaçoes do if e else

//exemplo de ternario

// let thomas = ["chave", "dinheiro", "celular"];
// let vitor = ["dinheiro", "celular", "carteira"];
// let pai = ["dinheiro", "celular", "carteira"];

// function abrirporta(pessoa) {
//   const usarchave = pessoa.filter((item) => item === "chave");
//   return usarchave.length > 0 ? "abriu porta" : "nao consegue abrir a porta";
// }
// let resultado = abrirporta(thomas);
// let resultado2 = abrirporta(vitor);
// let resultado3 = abrirporta(pai);

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

// or e and

let thomas = ["chave", "dinheiro", "celular"];
let vitor = ["dinheiro", "celular", "carteira"];
let pai = ["dinheiro", "celular", "carteira"];

function abrirporta(pessoa) {
  const aloguemtemachave = pessoa.includes("chave");
  const aloguemtemadinheiro = pessoa.includes("dinheiro");

  switch (true) {
    case aloguemtemachave:
      return "abriu a porta com a chave";

    case aloguemtemadinheiro:
      return "tem dinheiro mais dinheiro não abre a porta.";

    default:
      return "não tem dinheiro";
  }
}

let resultado = abrirporta(thomas);
let resultado2 = abrirporta(vitor);
let resultado3 = abrirporta(pai);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
