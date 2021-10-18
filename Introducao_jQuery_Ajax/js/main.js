function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            //console.log(response.logradouro);

            //Outra forma de concatenar resultado.
            // $("#logradouro").html(response.logradouro);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP - " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            // //
            // document.getElementById("logradouro").innerHTML = response.logradouro;
            // document.getElementById("bairro").innerHTML = response.bairro;
            // document.getElementById("localidade").innerHTML = response.localidade;
            // document.getElementById("uf").innerHTML = response.uf;
        }
    });
}

//Esconde o elemento div, para quando não tem o CEP
$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
});