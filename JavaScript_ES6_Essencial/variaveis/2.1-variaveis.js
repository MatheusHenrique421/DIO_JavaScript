var teste = 'exemplo';

(() => {

    console.log(`\n Valor dentro da função "${teste}"`);

    if (true) {
        var teste = 'exemplo';
        console.log(`\n Valor dentro do if "${teste}"`);
    }

    console.log(`\n Valor após a execução do if "${teste}"`);
})();