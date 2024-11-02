console.clear();

function criarListaDeTarefas(descricao) {
  const atributoss = {
    descricao,
    listaDeTarefas: [],
  };
  const mudardescricao = (descricao) => {
    atributos.descricao = descricao;
  };

  const adicionarTarefa = (tarefa) => {
    atributoss.listaDeTarefas.push(tarefa);
  };

  const listarTarefasPendentes = () => {
    return atributoss.listaDeTarefas.filter((tarefa) => {
      return tarefa.completo === false;
    });
  };

  return {
    atributoss,
    adicionarTarefa,
    listarTarefasPendentes,
  };
}

function criarTarefa(descricao) {
  const atributos = {
    completo: false,
    descricao,
    criadoEm: new Date(),
  };

  const completar = () => {
    atributos.completo = true;
  };
  const descompletar = () => {
    atributos.completo = false;
  };

  return {
    atributos,
    completar,
    descompletar,
  };
}

const listaDeTarefas = criarListaDeTarefas("desarumarcama");
listaDeTarefas.atributoss.descricao;

const listaDeTarefasvitor = criarListaDeTarefas();
const data = new Date("2012-03-06");
const mess = listaDeTarefas.atributoss.listaDeTarefas.filter(
  (checar) => new Date(checar) > new Date("2012-03-01")
);

const tarefa = criarTarefa("Passear com a luna.");
// tarefa.mudardescricao("desarumarcama");
console.log(tarefa);
// console.log({ tarefa });
console.log(listaDeTarefas);
listaDeTarefas.adicionarTarefa(tarefa);

function limpartarefas(listaDeTarefas) {
  return (tarefasIncompletas = listaDeTarefas.listarTarefasPendentess.filter(
    (listaDeTarefas) => !listaDeTarefas.listarTarefasPendentes.completo
  ));
}
const listarTarefasPendentes = limpartarefas;
const tarefasIncompletas = listaDeTarefas.listarTarefasPendentes();

console.log({ tarefasIncompletas });
// console.log({ listaDeTarefas });
// console.log({
//   mess,
// });

//  compelto 1: deve completar a unica tarefa da lista, de forma que o log de tarefas incompletas seja um array vazio n

//  completo  2: o usuario que listar todas suas tarefas incompletas, mas aparece muitas, ele quer filtrar apenas tarefas dos ultimos 30 dias

// completo 3: usuario escreveu uma descricao errada de uma tarefa, crie uma forma dele conseguir editar a descricao de uma tarefa ja registrada

// completo 4:o usuario completou uma tarefa errada sem querer, crie uma funcionalidade de descompletar tarefa

// completo? 5: usuario quer dar uma limpa nas suas tarefas, esta muito desorganizado,
//e ele quer remover tarefas nao importantes, crie uma funcionalidade de remover tarefas

// 6: o usuario quer listar todas suas tarefas pendentes,
//mas aparece muitas tarefas no log. Implemente "paginacao", de forma que apareça 3 tarefas por pagina.

// Ultimo: nosso time de desenvolvedores vai precisar mudar de paradigma,
// vamos comecar a usar classes. Transfira seu código de factory functions para classes.
