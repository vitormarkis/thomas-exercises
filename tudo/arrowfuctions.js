const roupas = [
  { tamanho: "m", marcaa: "adidas_calça" },
  { tamanho: "p", marcaa: "nike_calça" },
];

console.log(
  roupas.find((marca) => {
    return marca.marcaa === "adidas_calça";
  })
);
