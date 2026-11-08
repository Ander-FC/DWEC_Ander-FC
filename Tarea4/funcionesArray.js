let arr = [95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31,
27, 36, 30, 86, 88, 88, 68, 16, 5, 14, 41, 56, 89, 11, 6, 29, 72,
11, 69, 36, 16, 11, 82, 84, 32, 84, 95, 98, 76, 99, 100, 12, 89, 1,
92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31, 37, 5, 32, 9, 33, 98,
94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72, 31, 39, 15, 10, 46,
78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54, 50, 77, 13, 85, 7, 36 ];

// Devuelve el array ordenado sin modificar el array original.
function ordenar(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado[i] = array[i];
  }
  for (let i = 0; i < resultado.length; i++) {
    for (let j = 0; j < resultado.length - 1; j++) {
      if (resultado[j] > resultado[j + 1]) {
        let temporal = resultado[j];
        resultado[j] = resultado[j + 1];
        resultado[j + 1] = temporal;
      }
    }
  }
  return resultado;
}

// Devuelve un array solo de impares y ordenados
function imparesOrdenados(array) {
  let resultado = [];
  let cantidad = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      resultado[cantidad] = array[i];
      cantidad++;
    }
  }
  for (let i = 0; i < resultado.length; i++) {
    for (let j = 0; j < resultado.length - 1; j++) {
      if (resultado[j] > resultado[j + 1]) {
        let temporal = resultado[j];
        resultado[j] = resultado[j + 1];
        resultado[j + 1] = temporal;
      }
    }
  }
  return resultado;
}

// Devuelve un array únicamente con los números impares de dos cifras.
function imparesDosCifras(array) {
  let resultado = [];
  let cantidad = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10 && array[i] <= 99 && array[i] % 2 !== 0) {
      resultado[cantidad] = array[i];
      cantidad++;
    }
  }
  return resultado;
}

// Devuelve un array con la frecuencia de cada elemento (cada vez que sale) en el primer array.
function frecuencia(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    let cantidad = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        cantidad++;
      }
    }
    resultado[i] = cantidad;
  }
  return resultado;
}
