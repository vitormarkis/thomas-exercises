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

// or e and e "switch"

// let thomas = ["chave", "dinheiro", "celular"];
// let vitor = ["dinheiro", "celular", "carteira"];
// let pai = ["dinheiro", "celular", "carteira"];

// function abrirporta(pessoa) {
//   const aloguemtemachave = pessoa.includes("chave");
//   const aloguemtemadinheiro = pessoa.includes("dinheiro");

//   switch (true) {
//     case aloguemtemachave:
//       return "abriu a porta com a chave";

//     case aloguemtemadinheiro:
//       return "tem dinheiro mais dinheiro não abre a porta.";

//     default:
//       return "não tem dinheiro";
//   }
// }

// let resultado = abrirporta(thomas);
// let resultado2 = abrirporta(vitor);
// let resultado3 = abrirporta(pai);

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

// SWITCH OR E AND E ??

// let thomas = ["chave", "dinheiro", "celular"];
// let vitor = ["dinheiro", "celular", "carteira"];
// let pai = ["dinheiro", "celular", "carteira"];

// function abrirporta(pessoa) {
//   const aloguemtemachave = pessoa.includes("chave") ?? false;
//   const aloguemtemadinheiro = pessoa.includes("dinheiro") ?? false;

//   switch (true) {
//     case aloguemtemachave:
//       return "abriu a porta com a chave";

//     case aloguemtemadinheiro:
//       return "tem dinheiro mais dinheiro não abre a porta.";

//     default:
//       return "não tem dinheiro";
//   }
// }

// let resultado = abrirporta(thomas);
// let resultado2 = abrirporta(vitor);
// let resultado3 = abrirporta(pai);

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

// factory function CODIGO V1

function formularioempresa(nome, idade, experiencia) {
  return {
    nome: nome,
    idade: idade,
    experiencia: experiencia,
    apresentacao: function () {
      return `bom dia meu nome e ${this.nome} tenho ${this.idade} anos e eu ja trabalhei em ${this.experiencia}.`;
    },
  };
}

const thomas = formularioempresa(
  "Thomas",
  13,
  "um athellier de produtos de chimarrão, chockers correntes, resina, peças e tudo de cuia no geral"
);
const samoht = formularioempresa(
  "Samoth",
  16,
  "na verdade eu nunca trabalhei na verdade"
);

//COMEÇAR A FAZER UMA FUNÇAO PROS OBJETOS DO FACTORY FUNCTION

console.log(thomas.apresentacao());
console.log(samoht.apresentacao());
