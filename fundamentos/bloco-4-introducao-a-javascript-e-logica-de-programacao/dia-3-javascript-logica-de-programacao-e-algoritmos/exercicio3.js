/* Agora inverta o lado do triângulo. */

let n = 5;
let asterisco = '*';
let vazio = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      vazio = vazio + ' ';
    } else {
      vazio = vazio + asterisco;
    }
  }
  console.log(vazio);
  vazio = '';
  inputPosition -= 1;
};