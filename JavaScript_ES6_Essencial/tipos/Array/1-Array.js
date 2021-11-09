const usuarios = ['Matheus', 'Henrique', 'Marcos', 'Jennifer'];

const genero = {
    MASCULINO: Symbol('M'),
    FEMININO: Symbol('F')
}

const pessoas = [

    {
        name: 'Matheus',
        age: 25,
        genero: genero.MASCULINO
    },
    {
        name: 'Henrique',
        age: 43,
        genero: genero.MASCULINO
    }, {
        name: 'Marcos',
        age: 16,
        genero: genero.MASCULINO
    }, {
        name: 'Jennifer',
        age: 22,
        genero: genero.FEMININO

    }
];

// Retornar a quantidade de itens de um array
console.log('Itens: ', pessoas.length);

//verifica se é um array
console.log('A variável person é um array: ', Array.isArray(pessoas));

// Iterar os itens do array
pessoas.forEach((pessoa, index, arr) => {
    console.log(`Nome: ${pessoas.name} index: ${index}`, arr);
});

// Filtrar Array
const masculinos = pessoas.filter(pessoa => pessoa.genero == genero.MASCULINO);
console.log('\n Nova Lista ---> Apenas com Homens: ', masculinos);

// Retornar um novo
const pessoasWithCourse = pessoas.map(pessoa => {
    pessoas.course = ' -- --- --- -- ------------- Introdução ao JavaScript';
    return pessoas;
});

console.log('\n Pessoas com a adição do course: ', pessoasWithCourse);