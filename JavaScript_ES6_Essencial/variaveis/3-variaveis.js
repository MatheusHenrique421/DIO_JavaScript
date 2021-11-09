const name = 'matheus';

//Não podemos alterar o valor
//name = 'Matheus';

const user = {
    name: 'MATHEUS'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro Nome';

//Não podemos fazer o objeto "Apontar" para outro lugar
//user = {
//name: 'Matheus'
//};

const person = ['matheus', 'pedro', 'jennifer'];

//Podemos adicionar novos itens
person.push('joão');

//Remove algum item
person.shift();

//Podemos alterar diretamente
person[1] = 'Uwilson';

console.log('\n Array após as alterações: ', person);