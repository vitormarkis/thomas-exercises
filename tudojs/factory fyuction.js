function homenspadroesrs(altura, nome, cabelo, time) {
  return { altura, nome, cabelo, time };
}
const homempadrao = homenspadroesrs("1.7", "jorge", "liso", "juventude");
console.log(homempadrao);

const clonado = { ...homempadrao };
console.log(clonado);
