const myNumber = 42.0000;

// transformar número para string
const numberAsString = myNumber.toString();
console.log('\n Número transformado em string: ', numberAsString, typeof numberAsString);

// Retornanúmero com um númerode casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\n Número com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float
console.log('\n String parseada para float: ', typeof parseFloat('13.22'));

// Transforma uma string em int
console.log('\n String parseada para int: ', typeof parseFloat('13.20'));