const n1 = 5;
const n2 = 5;
const n3 = 3;

if (n1 > n2 && n1 > n3) {
  console.log(n1, 'é o maior valor.');
} else if (n2 > n1 && n2 > n3) {
  console.log(n2, 'é o maior valor.');
} else if (n3 > n1 && n3 > n2) {
  console.log(n3, 'é o maior valor.');
} else {
  console.log('Há valores iguais, defina outro.');
}