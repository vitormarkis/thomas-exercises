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

// function formularioempresa(nome, idade, experiencia, sobreareatformulario) {
//   return {
//     nome: nome,
//     idade: idade,
//     experiencia: experiencia,
//     sobreareatformulario: sobreareatformulario,
//     apresentacao: function () {
//       return `bom dia meu nome e ${this.nome} tenho ${this.idade} anos e eu ja trabalhei em ${this.experiencia}.`;
//     },
//     pergunta: function () {
//       return ` Bom dia ${this.nome}, Você tem experiência anterior na área em que estamos contratando?`;
//     },
//     resposta: function () {
//       return `minha experiencia em trabalho e outras coisas foi... ${this.sobreareatformulario}`;
//     },
//   };
// }

// const thomas = formularioempresa(
//   "Thomas",
//   13,
//   "um athellier de produtos de chimarrão, chockers correntes, resina, peças e tudo de cuia no geral que eu trabalhei esse ano",
//   "falando serio nunca tive experiencia no asunto"
// );
// const samoht = formularioempresa(
//   "Samoth",
//   16,
//   "na verdade eu nunca trabalhei na verdade e nem tenho experiencia",
//   "por mais qu e eu não tenha trabalhado sou um expert no assunto"
// );

// //COMEÇAR A FAZER UMA FUNÇAO PROS OBJETOS DO FACTORY FUNCTION

// console.log(thomas.apresentacao());
// console.log(samoht.apresentacao());

// console.log(thomas.pergunta());
// console.log(samoht.pergunta());

// console.log(thomas.resposta());
// console.log(samoht.resposta());

//desafio de rotina
// function criarrotina() {
//   let tarefas = [];

// function adicionartarefa(descricao) {
//   const novaTarefa = {
//     descricao,
//     concluida: false
//   };
//   tarefas.push(novatarefa) = {
//  console.log(`Tarefa "${descricao}"  removida`)
//   };
//   function removertarefa(descricao) {
//     const index = tarefas.index(tarefa => tarefa.descricao === descricao);
//       if(index !== -1) {
//         tarefas.splice(index, 1);
//         console.log(`Tarefa "${descricao}" removida`)

//       }
//     }
//   }
//   function listartarefa () {
//     console.log(' Lista de Tarefa');
//     tarefas.forEach(Tarefa => {
//       console.log(`${Tarefa.descricao} - ${tarefa.concluida ? 'Concluida' : 'pendente'}$ ` )
//     }) ;
//   }
// return {adicionartarefa, removertarefa, listartarefa};
// };

// const minharotina = criarrotina();

// minharotina.adicionartarefa('acorda')
// minharotina.adicionartarefa('trabalhar')
// minharotina.adicionartarefa('almocar')
// minharotina.adicionartarefa()
// minharotina.adicionartarefa('estudar')
// minharotina.adicionartarefa('Estudar js')
// minharotina.adicionartarefa('nada')
// minharotina.adicionartarefa('dormir')

// console.log(minharotina)
//teoricamente terminado.

//AGORA 26/02 COMEÇO UM NOVO PROJETO DE LAÇOS
//APENAS PARA SALVAR

//Desafio: Crie um objeto que representa uma pessoa, contendo várias
// propriedades como nome, idade, cidade, e hobbies.
//  Em seguida, escreva um código que use o laço for...in para listar todas as propriedades
//  desse objeto, mostrando tanto o nome das propriedades quanto seus valores.

// let garotolindo = {
//   nome: "thomas",
//   idade: 13,
//   cidade: "novohamburgo",
//   hobbie1: "desenhar",
//   hobbie2: "usarocelular",
// };

// function mostrarpropriedades() {
//   for (let chave in thomas) console.log(chave + "; " + pessoa[chave]);
// }

// console.log(garotolindo);

let garotolindo = {
  nome: "thomas",
  idade: 13,
  cidade: "novohamburgo",
  hobbie1: "desenhar",
  hobbie2: "usarocelular",
};

function mostrarpropriedades() {
  const chaves = Object.keys(garotolindo);
  for (let i = 0; i < chaves.length; i++) {
    let chave = chaves[i];
    console.log(chave + ":" + [chave]);
  }
}

console.log(garotolindo);

//multiplicação com for

let numero = 2;

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${}`)
}

// nn consigo enviar pra nuvem ent aq esta
//fiz anotações importantes e no final comecei esse codigo q e simples