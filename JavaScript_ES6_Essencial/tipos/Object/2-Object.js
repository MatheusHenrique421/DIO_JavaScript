const user = {
    name: 'Matheus',
    lastName: 'Henrique Schumliak'
};

//Recupera as chaves do Objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\n Valores das propriedades do objeto user: ', Object.values(user));

//Recupera um array de arrays contendo [ nome_prop, valor_prop]
console.log('\n Lista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, { fullName: 'Matheus Henrique Schumliak' });

console.log('\n Adiciona a propriedade fullName no Objeto user', user);
console.log('\n Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, { age: 25 }));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n Variavel newObj após as alterações: ', newObj);

//Permite apenas a altera~]ao de propriedade existentes em um objeto
const person = { name: 'Matheus' };
Object.seal(person);

person.name = 'Matheus Henrique Schumliak';
delete person.name;
person.age;

console.log('\n Variável person após as alterações: ', person);