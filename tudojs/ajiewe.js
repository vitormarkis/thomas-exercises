function divideArray(array) {
  const length = array.length;
  const partSize = Math.ceil(length / 3);
  return [
    array.slice(0, partSize),
    array.slice(partSize, partSize * 2),
    array.slice(partSize * 2),
  ];
}

// Exemplo de uso
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dividedArray = divideArray(originalArray);
console.log(dividedArray);
