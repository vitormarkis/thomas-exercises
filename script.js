const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-cell]");

let IsCircleTurn = false;

const placeMark = (cell, classToAdd) => {
  cell.classLista.add(classToAdd);
  // for (const cell of cellElements {
  // cell.addEventListener("click", handleClick, { once: true });
};

const swapTurns = () => {
  cell.classList = !isCircleTurn;

  Board.classList.remove("Circle");
  Board.classList.remove("X");

  if (isCircleTurn) {
    Board.classList.add("Circle");
  } else {
    Board.classList.remove("X");
  }
};

const handleClick = (e) => {
  // colocar a marca (X ou O)
  const cell = e.target;
  const classToAdd = IsCircleTurn ? "circle" : "x";

  placeMark(cell, classToAdd);

  //checar vitoria
  //checar empate

  //Mudar simbolo

  swapTurns();
};

for (const cell of cellElements) {
  cell.addEventListener("click", handleClick, { once: true });
}
