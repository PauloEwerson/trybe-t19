const books = require('./script');
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const authorBornIn1947 = () => {
  const found = books.find(element => element.author.birthYear === 1947);
  return found.author.name;
}

console.log(authorBornIn1947());