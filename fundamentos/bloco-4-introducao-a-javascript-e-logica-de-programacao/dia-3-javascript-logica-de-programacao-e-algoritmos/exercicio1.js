/* Faça um programa que, dado um valor N qualquer, seja N > 1 ,
imprima na tela um quadrado feito de asteriscos de lado de tamanho N */

const n = 5;

const asteriscos = [];

for (let i = 0; i < n; i += 1) {
  asteriscos.push('*');
};

for (let i = 0; i < n; i += 1) {
  console.log(asteriscos);
};