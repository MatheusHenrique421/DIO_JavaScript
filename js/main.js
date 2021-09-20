var nome = "Matheus Henrique Schumliak. ";
// var idade = 25;

//alert("Bem vindo " + nome + " Você tem " + idade + " de idade ?");

// var soma1 = 10;
// var soma2 = 5;
//alert(soma1 + soma2);

//var frase = "LOL é melhor do que CounterStrike!";
//console.log(frase.replace("LOL", "SkaterXL"));
//alert(frase.replace("LOL", "SkaterXL"));

//Deixa todo string em Minusculo
//console.log(frase.toLowerCase());

//Deixa todo string em Maiuscula
//console.log(frase.toUpperCase());

//Arrays
//var lista = [" A ", " B ", " C "];

//Adicionar um item amais a lista.
//lista.push("Alfabétuke");

//Remove o ultimo elemento da string
//lista.pop();

//Tamanho da lista, quantos elementos possui.
//console.log(lista.length);

//Inverte os resultados da lista.
//console.log(lista.reverse());

//Converte para string
//console.log(lista.toString());

//Converte para string separando pelo que eu definir.
//console.log(lista.join(" <-> "));

//Dicionarios
// var fruta = { nome: "maça", cor: "vermelha" };
// console.log(fruta.nome);
// alert(fruta.cor);

//Lista de Dicionarios
// var frutas = [{ nome: "Maça", cor: "Vermelha" }, { nome: "Uva", cor: "Roxa" }, { nome: "Kiwi", cor: "Verde" }];
// console.log(frutas);
// alert(frutas);

//Escolhendo posição a ser exibida
// console.log(frutas[2].nome);
// alert(frutas[2].cor);

//if else
// var idade = prompt("Qual a sua Idade?");
// //var idade = 25;
// if (idade > 20) {
//     alert("Maior de Idade.");
// } else {
//     alert("Menor de Idade.");
// };

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count);
//     count++;
// };

// var count;
// for (count = 0; count <= 5; count++) {
//     alert(count);
// };

// //Datas
// var d = new Date();
// alert(d.getDay());
// alert(d.getMinutes());
// alert(d.getDate());
// alert(d.getMonth() + 1);

//+_________________________Functions
// function soma(n1, n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }

// alert(soma(5, 10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));

//Validando a idade 
// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true;
//         alert("uhul é de maior,Já pode comprar cigarrin");
//     } else {
//         validar = false;
//         alert("Que pena,Você não pode comprar cigarrin");
//     }
//     return validar;
// }

// var idade = prompt("Qual a sua Idade?");
// console.log(validaIdade(idade));

//
// function cliqueAqui() {
//     //alert("Obrigado por clicar no Butão!");
//     document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b> por Clicar";
//     //console.log(document.getElementById("agradecimento"));
// }

// function redirecionar() {
//     window.open("https://github.com/MatheusHenrique421");
//     window.location.href = "https://github.com/MatheusHenrique421";
// }

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse.";
    elemento.innerHTML = "Obrigado por passar o Mouse.";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui!";
    elemento.innerHTML = "Passe o Mouse Aqui!";
    //     //alert("trocar texto");
}

function trocar2(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse.";
    elemento.innerHTML = "Obrigado por passar o Mouse, e ver outro resultado!!!!";
    //alert("trocar texto");
}

function voltar2(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui!";
    elemento.innerHTML = "Passe o Mouse Aqui!";
    //     //alert("trocar texto");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}