/**
 * Quero contratar para minha empresa, um guia turístico.
 * A pessoa chega pra ele, fala uma região do Brasil - Sul, Sudeste,
 * Centro-Oeste ou Nordeste - e ele responde um estado dessa região que
 * ele acha mais interessante (voce decide quais são).
 */

function conseguirMelhorEstadoDaRegiao(regiao) {
  switch (regiao) {
    case "Sul":
      console.log("RS");
      break;

    case "Sudeste":
      console.log("SP");
      break;
    case "Centro-Oeste":
      console.log("MT");
      break;

    case "Nordeste":
      console.log("RN");
      break;

    default:
      console.log("não sei");
  }
}

conseguirMelhorEstadoDaRegiao("Sul");
conseguirMelhorEstadoDaRegiao("Sudeste");
conseguirMelhorEstadoDaRegiao("Centro-Oeste");
conseguirMelhorEstadoDaRegiao("Nordeste");

/**
 * Exercicio 2.
 *
 * O guia conhece apenas essas 4 regiões, mas tem gente pedindo sugestoes
 * de outras regioes. Caso alguem pergunte outras sugestoes de regioes que
 * o guia nao conhece, responda "Não sei".
 */

/** Descomente as linhas abaixo */
conseguirMelhorEstadoDaRegiao("Nordeste");
conseguirMelhorEstadoDaRegiao("Noroeste");
