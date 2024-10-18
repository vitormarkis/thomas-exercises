console.clear()

function criarListaDeTarefas() {
  const listaDeTarefas = []

  const adicionarTarefa = tarefa => {
    listaDeTarefas.push(tarefa)
  }

  const listarTarefasPendentes = () => {
    return listaDeTarefas.filter(tarefa => {
      return tarefa.completo === false
    })
  }

  return {
    listaDeTarefas,
    adicionarTarefa,
    listarTarefasPendentes,
  }
}

function criarTarefa(descricao) {
  let completo = false
  let criadoEm = new Date()
  const completar = () => {
    completo = true
  }

  return {
    descricao,
    get completo() {
      return completo
    },
    criadoEm,
    completar,
  }
}

const listaDeTarefas = criarListaDeTarefas()

const tarefa = criarTarefa("Passear com a luna.")
listaDeTarefas.adicionarTarefa(tarefa)
const tarefasIncompletas = listaDeTarefas.listarTarefasPendentes()
console.log(tarefasIncompletas)

// 1: deve completar a unica tarefa da lista, de forma que o log de tarefas incompletas seja um array vazio

// 2: o usuario que listar todas suas tarefas incompletas, mas aparece muitas, ele quer filtrar apenas tarefas dos ultimos 30 dias

// 3: usuario escreveu uma descricao errada de uma tarefa, crie uma forma dele conseguir editar a descricao de uma tarefa ja registrada

// 4: o usuario completou uma tarefa errada sem querer, crie uma funcionalidade de descompletar tarefa

// 5: usuario quer dar uma limpa nas suas tarefas, esta muito desorganizado, e ele quer remover tarefas nao importantes, crie uma funcionalidade de remover tarefas

// 6: o usuario quer listar todas suas tarefas pendentes, mas aparece muitas tarefas no log. Implemente "paginacao", de forma que apareça 3 tarefas por pagina.

// Ultimo: nosso time de desenvolvedores vai precisar mudar de paradigma, vamos comecar a usar classes. Transfira seu código de factory functions para classes.
