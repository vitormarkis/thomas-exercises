console.clear()

function criarListaDeTarefas(descricao) {
  const atributoss = {
    descricao,
    listaDeTarefas: [],
  }
  const mudardescricao = descricao => {
    atributos.descricao = descricao
  }
  const adicionarTarefa = tarefa => {
    atributoss.listaDeTarefas.push(tarefa)
  }

  const listarTarefas = instrucoes => {
    const fim = instrucoes.pagina * instrucoes.itens_por_pagina
    const comeco = fim - instrucoes.itens_por_pagina
    return atributoss.listaDeTarefas.slice(comeco, fim)
  }

  const listarTarefasPendentes = () => {
    return atributoss.listaDeTarefas.filter(tarefa => {
      return tarefa.completo === false
    })
  }

  return {
    atributoss,
    adicionarTarefa,
    listarTarefasPendentes,
    listarTarefas,
  }
}

function criarTarefa(descricao) {
  const atributos = {
    completo: false,
    descricao,
    criadoEm: new Date(),
  }

  const limpartarefas = listaDeTarefas => {
    return (tarefasIncompsletas = listaDeTarefas.listarTarefasPendentess.filter(
      listaDeTarefas => !listaDeTarefas.listarTarefasPendentes.completo
    ))
  }
  const completar = () => {
    atributos.completo = true
  }
  const descompletar = () => {
    atributos.completo = false
  }

  return {
    atributos,
    completar,
    descompletar,
    limpartarefas,
  }
}

let listadetarefaspendents

let listaDeTarefas = criarListaDeTarefas()
listaDeTarefas.adicionarTarefa(criarTarefa("acordar luna", false))
listaDeTarefas.adicionarTarefa(criarTarefa("dar banho no mike", false))
listaDeTarefas.adicionarTarefa(criarTarefa("brincar com a luna", false))
listaDeTarefas.adicionarTarefa(criarTarefa("dar banho na luna", false))
listaDeTarefas.adicionarTarefa(criarTarefa("por racao pra luna", false))
listaDeTarefas.adicionarTarefa(criarTarefa("brincar com o mike", false))

console.log("lista de tarefas: ", listaDeTarefas)

console.log(
  listaDeTarefas.listarTarefas({
    pagina: 2,
    itens_por_pagina: 2,
  })
)
// const tarefasIncompletas = listaDeTarefas.listarTarefasPendentes;
// listaDeTarefas = criarListaDeTarefas("tarefas listadas", [tarefasIncompletas]);
// listadetarefaspendents = tarefasIncompletas;
// console.log({ tarefasIncompletas });

// listaDeTarefas.atributoss.descricao;

// const listaDeTarefasvitor = criarListaDeTarefas();
// const data = new Date("2012-03-06");

// const mess = listaDeTarefas.atributoss.listaDeTarefas.filter(
//   (checar) => new Date(checar) > new Date("2012-03-01")
// );

// const tarefa = criarTarefa("Passear com a luna.");
// console.log(tarefa);

// console.log(listadetarefaspendents);
// tarefa1.tarefasIncompletas = listadetarefaspendents;
// tarefa2.tarefasIncompletas = listadetarefaspendents;
// tarefa3.tarefasIncompletas = listadetarefaspendents;
// const [primeiraParte, segundaParte, TerceiraParte] =
//   listaDeTarefas.paginarlista(listadetarefaspendents);
// console.log("Primeira Parte:", primeiraParte);
// console.log("Segunda Parte:", segundaParte);
// console.log("Terceira Parte", TerceiraParte);
// listaDeTarefas.adicionarTarefa(tarefa);

// //  compelto 1: deve completar a unica tarefa da lista, de forma que o log de tarefas incompletas seja um array vazio n

// //  completo  2: o usuario que listar todas suas tarefas incompletas, mas aparece muitas, ele quer filtrar apenas tarefas dos ultimos 30 dias

// // completo 3: usuario escreveu uma descricao errada de uma tarefa, crie uma forma dele conseguir editar a descricao de uma tarefa ja registrada

// // completo 4:o usuario completou uma tarefa errada sem querer, crie uma funcionalidade de descompletar tarefa

// // completo? 5: usuario quer dar uma limpa nas suas tarefas, esta muito desorganizado,
// //e ele quer remover tarefas nao importantes, crie uma funcionalidade de remover tarefas

// // 6: o usuario quer listar todas suas tarefas pendentes,
// //mas aparece muitas tarefas no log. Implemente "paginacao", de forma que apareça 3 tarefas por pagina.

// // Ultimo: nosso time de desenvolvedores vai precisar mudar de paradigma,
// // vamos comecar a usar classes. Transfira seu código de factory functions para classes.
