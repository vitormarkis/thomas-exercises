// function criarData(dia, mes, ano) {
//   function avancarAno() {
//     ano += 1
//   }

//   function pegarDataEmString() {
//     return (
//       String(dia).padStart(2, "0") +
//       "/" +
//       String(mes).padStart(2, "0") +
//       "/" +
//       String(ano)
//     )
//   }

//   function pegarAno() {
//     return ano
//   }

//   return {
//     mes,
//     dia,
//     ano,
//     pegarAno,
//     pegarDataEmString,
//     avancarAno,
//   }
// }

// class Data {
//   constructor(dia, mes, ano) {
//     this.dia = dia
//     this.mes = mes
//     this.ano = ano

//     this.dataEmString =
//       String(this.dia).padStart(2, "0") +
//       "/" +
//       String(this.mes).padStart(2, "0") +
//       "/" +
//       String(this.ano)
//   }

//   avancarAno() {
//     this.ano = this.ano + 1
//   }

//   retrocederAno() {
//     this.ano = this.ano - 1
//   }

//   pegarIdadeDeQuemNasceuNessaData() {
//     return 2024 - this.ano
//   }
// }

// const data = new Data(20, 3, 1998)
// // console.log(data.dataEmString)

// // console.log(data)

// // data.avancarAno()
// // data.avancarAno()
// // console.log(data.pegarDataEmString())

// let mes = 0

// class MesDoAno {
//   constructor(valorInicial) {
//     if (valorInicial < 1 || valorInicial > 12) throw new Error("Valor inicial invalido!")
//     this.mes = valorInicial
//   }

//   irProximoMes() {
//     if (this.mes === 12) return
//     this.mes = this.mes + 1
//   }

//   irMesAnterior() {
//     if (this.mes === 1) return
//     this.mes = this.mes - 1
//   }
// }

// const mes = new MesDoAno(99)

// console.log(mes.mes)
