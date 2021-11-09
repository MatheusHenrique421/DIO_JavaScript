let user = {
    name: 'Matheus'
};

//Alterando a propriedade de um objeto
//console.log(user);
user.name = 'Outro nome 1';

//console.log(user);
user['name'] = 'Outro nome 2';
//console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
//console.log(user);

function getProp(prop) {
    return user[prop]
}

//Criando uma propriedade
user.lastName = 'Cleber da Silva';
console.log(user);
//Deletando propriedade
delete user.name;