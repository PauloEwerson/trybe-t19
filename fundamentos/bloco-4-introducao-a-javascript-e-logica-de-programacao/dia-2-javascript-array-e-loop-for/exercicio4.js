/* Caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Valor final, considerando o último índice.
if (numbers[numbers.length - 1] > 20 ) {
  console.log("Valor maior que 20.")
} else {
  console.log("Valor menor ou igual a 20.");
}

// Valor final, considerando a soma do array dividido pela quanridade de elementos.

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}