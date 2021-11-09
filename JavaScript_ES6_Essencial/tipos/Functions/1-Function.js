function fn() {
    return 'Codigo aqui.';
}
const arrowFn = () => 'Código aqui!';
const arrowFn2 = () => {
    //Mais de uma expressão.
    return 'Código aqui';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções;
const controlFnExec = fnParam => allowed => {

    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution(); //não executará a função fn


//controlFnExec como função
function controllFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}