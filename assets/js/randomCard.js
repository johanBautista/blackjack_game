// algoritmo de Fisher-Yates
const barajar = (arreglo) => {
  let i = arreglo.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arreglo[randIndex], arreglo[i]] = [arreglo[i], arreglo[randIndex]];
  }
  return arreglo;
};
