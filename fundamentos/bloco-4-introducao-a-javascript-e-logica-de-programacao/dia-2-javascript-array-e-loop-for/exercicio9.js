/* Utilizando o array criado no exercício anterior 
imprima o resultado da divisão de cada um dos elementos por 2 .*/

let numbers = [];
for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}
/* //////////////////////////////// */

let total = [];
for (let index = 0; index < numbers.length; index += 1) {
  total.push(numbers[index] / 2);
}
console.log(total);