/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let compara = numbers[0]; //Compara receber o primeiro índide do array
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < compara) { // Primeiro verifica se o índice 1 é menor doq o índice 0;
    compara = numbers[i]; // Caso positivo, atribui o valor a Compara
  }
}

console.log(compara);