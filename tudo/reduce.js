const gastosComALuna = [30, 40, 170, 100]

const totalGastos = gastosComALuna.reduce(function (totalGasto, gasto) {
  console.log("totalGasto", totalGasto)
  totalGasto += gasto
  return totalGasto
}, 20)

console.log("gastosCaros", totalGastos)

// filter internamente
// functionThomasPassedMe(30, 0, gastosComALuna)
// functionThomasPassedMe(40, 1, gastosComALuna)
// functionThomasPassedMe(150, 2, gastosComALuna)
// functionThomasPassedMe(100, 3, gastosComALuna)

// SE PASSA COMO ARGUMENTO, O QUE A FUNCAO ESPERA COMO PARAMETRO

// O que um metodo de array faz com a funcao que voce passou para ele?
// R: Ele executa a sua funcao, passando cada elemento que ele tem como argumento dessa sua funcao.
