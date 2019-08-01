//alert('Olá Mundo')

function concatenar()  {
    var campoNome = document.getElementById("nome")
    var campoSobreome = document.getElementById("sobrenome")

    var nome = campoNome.value;
    var sobrenome = campoSobreome.value;

    var nomeCompleto = nome + " " + sobrenome;
    alert("Nome Completo: " + nomeCompleto)
}