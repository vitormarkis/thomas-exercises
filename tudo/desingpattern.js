// // desiing pattern
// // factory fuctions

// function criarcachorro(raca, nome, cor) {
//   let cachorro = {};
//   cachorro.raca = raca;
//   cachorro.nome = nome;
//   cachorro.cor = cor;

//   function comer(comida) {
//     console.log(`${cachorro.nome} esta comendo ${comida.nome}`);
//   }
//   cachorro.comer = comer;

//   return cachorro;
// }
// function criarcomida(nome, formato, cor, peso) {
//   let comida = {};
//   comida.nome = nome;
//   comida.formato = formato;
//   comida.cor = cor;
//   comida.peso = peso;
//   return comida;
// }

// let Lunaa = criarcachorro("chow_chow", "luna", "preta");

// let mauricio = criarcachorro("golden", "mauricio", "amarelo");

// const maca = criarcomida("maca", "redondo", "vermelho", "80g");

// console.log(maca);
// const banana = criarcachorro("reto", "banana", "amarelo", "80g");
// Lunaa.comer(banana);
//--------------------------------------------

// function criarpessoass(nome, idade, tamanho, raca) {
//   let pessoa = {};
//   pessoa.nome = nome;
//   pessoa.idade = idade;
//   pessoa.tamanho = tamanho;
//   pessoa.raca = raca;

//   function usarperfume(perfume) {
//     console.log(`${pessoa.nome} usou ${perfume.nomee}`);
//   }

//   pessoa.usarperfume = usarperfume;

//   return pessoa;
// }

// let thomas = criarpessoass("Thomas", "13", "1.74", "branco");

// let joaocapinadordelote = criarpessoass(
//   "joaocapinadordelote",
//   "22",
//   "1.80",
//   "pardo"
// );

// function criarperfume(nomee, cheiro, preco) {
//   let Perfume = {};
//   Perfume.nomee = nomee;
//   Perfume.cheiro = cheiro;
//   Perfume.preco = preco;
//   return Perfume;
// }

// let malbec = criarperfume("malbec", "forte", "150");

// let Egeoblue = criarperfume("egeo", "doce", "190");

// thomas.usarperfume(malbec);

// estancia thomas ou joao so usar perfumes acima de 200 reais

const criarpessoass = (nome, idade, tamanho, raca) => {
  let pessoa = {};
  pessoa.nome = nome;
  pessoa.idade = idade;
  pessoa.tamanho = tamanho;
  pessoa.raca = raca;

  const usarperfume = (perfume) => {
    if (perfume.preco > 200) {
      console.log(`${pessoa.nome} usou ${perfume.nomee}`);
    } else {
      throw new Error(
        `${pessoa.nome} NAO PODE USAR ${perfume.nomee} POIS E BARATO`
      );
    }
  };
  pessoa.usarperfume = usarperfume;

  return pessoa;
};

let thomas = criarpessoass("Thomas", "13", "1.74", "branco");

let joaocapinadordelote = criarpessoass(
  "joaocapinadordelote",
  "22",
  "1.80",
  "pardo"
);

const criarperfume = (nomee, cheiro, preco) => {
  let Perfume = {};
  Perfume.nomee = nomee;
  Perfume.cheiro = cheiro;
  Perfume.preco = preco;
  return Perfume;
};

let malbec = criarperfume("malbec", "forte", "150");

let Egeoblue = criarperfume("egeo", "doce", "250");

thomas.usarperfume(Egeoblue);
