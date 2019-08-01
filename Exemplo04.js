tarefas = [];

function salvar(e){
    //13 é o código do enter no teclado
    if(e.keyCode == 13){
        adicionar();
    }
}


function adicionar() {
    var campoNome = document.getElementById("nome");
    var nome = campoNome.value;
    valido = validar(nome, campoNome);
    if (valido == false) {
        //mostrar feedback
        return
    }

    var elementoTr = document.createElement("tr");
    var elementoTdNome = document.createElement("td");
    elementoTdNome.innerHTML = nome;
    var elementoTdAcao = document.createElement("td");
    //Adicionar botoes:
    var elementoBotaoEditar = document.createElement("button");
    elementoBotaoEditar.innerHTML = "Editar";
    elementoBotaoEditar.classList.add("btn","btn-primary", "mr-2");

    var elementoBotaoApagar = document.createElement("button");
    elementoBotaoApagar.innerHTML = "Apagar";
    elementoBotaoApagar.classList.add("btn", "btn-danger");

    elementoTdAcao.appendChild(elementoBotaoEditar);
    elementoTdAcao.appendChild(elementoBotaoApagar);


    elementoTr.appendChild(elementoTdNome);
    elementoTr.appendChild(elementoTdAcao);

    document.getElementById("registros").appendChild(elementoTr);
tarefas.push(nome);

    limparCampo(campoNome);
    atualizarQuantidade();
}


function apagar() { }


function preencherCampo() { }


function editar() { }


function atualizarQuantidade() {
    document.getElementById("quantidade").innerHTML = tarefas.length;
 }


function limparCampo(campo) {
    campo.value = "";
    campo.focus();
}


function validar(nome, campo) { }