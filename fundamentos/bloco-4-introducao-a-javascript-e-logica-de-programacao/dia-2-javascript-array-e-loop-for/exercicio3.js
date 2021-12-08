/* Calcule e imprima a média aritmética dos valores contidos no array; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

let media = soma / numbers.length;
console.log(media);