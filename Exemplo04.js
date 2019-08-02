tarefas = [];
var indiceParaEditar = -1; // Pertence ao escopo global por nao estar dentro de nenhum método/função


function salvar(e) {
    //13 é o código do enter no teclado
    if (e.keyCode == 13) {
        adicionar();
        adicionarEditar();

    }
}


function adicionarEditar() {
    if (indiceParaEditar == -1) {
        adicionar();
    }
    else {
        editar();
    }
}

function adicionar() {
    var campoNome = document.getElementById("nome");
    var nome = campoNome.value;
    valido = validarCampo(nome, campoNome);
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
    elementoBotaoEditar.classList.add("btn", "btn-primary", "mr-2");
    elementoBotaoEditar.onclick = preencherCampo;

    var elementoBotaoApagar = document.createElement("button");
    elementoBotaoApagar.innerHTML = "Apagar";
    elementoBotaoApagar.classList.add("btn", "btn-danger");

    elementoBotaoApagar.onclick = apagar; //sem () para executar o apagar apenas quando clickar

    elementoTdAcao.appendChild(elementoBotaoEditar);
    elementoTdAcao.appendChild(elementoBotaoApagar);


    elementoTr.appendChild(elementoTdNome);
    elementoTr.appendChild(elementoTdAcao);

    document.getElementById("registros").appendChild(elementoTr);
    tarefas.push(nome);

    limparCampo(campoNome);
    atualizarQuantidade();
}


function apagar() {
    var confirmacao = confirm('Deseja realmente apagar?');
    if (confirmacao == true) {
        var elemento = event.target;
        var elementoTd = elemento.parentNode;
        var elementoTr = elementoTd.parentNode;
        var elementoTBody = elementoTr.parentNode;

        var elementoTdNome = elementoTr.childNodes[0];
        var nome = elementoTdNome.innerHTML;
        tarefas.pop(nome);
        atualizarQuantidade();

        elementoTBody.removeChild(elementoTr);



    }
}


function preencherCampo() {
    var elementoBotaoEditar = event.target;
    var elementoTr = elementoBotaoEditar.parentNode.parentNode;
    var elementoTdNome = elementoTr.childNodes[0];
    var nome = elementoTdNome.innerHTML;
    indiceParaEditar = tarefas.indexOf(nome);
    document.getElementById('nome').value = nome;
    document.getElementById('nome').focus();
}


function editar() {
var nome = document.getElementById('nome').value;
tarefas[indiceParaEditar] = nome;

//atualizar tabela
var trs = document.getElementById('registros').childNodes;
var elementoTr = trs[indiceParaEditar];
elementoTr.childNodes[0].innerHTML= nome;

indiceParaEditar = -1;
document.getElementById('nome').value='';
document.getElementById('nome').focus();
}


function atualizarQuantidade() {
    document.getElementById("quantidade").innerHTML = tarefas.length;
}


function limparCampo(campo) {
    campo.value = "";
    campo.focus();
}


function validarCampo(nome, campo) {
    text = '';
    if (nome.trim().length == 0) {
        text = 'Nome deve ser preenchido';
    } else if (nome.trim().length < 3) {
        text = 'Nome deve conter no mínimo 3 caractéres';
    } else if (nome.trim().length > 20) {
        text = 'Nome deve conter no máximo 20 caractéres';
    }

    campo.classList.remove('border-danger', 'text-danger');

    //Remove a mensagem de span
    var elementos = document.getElementsByClassName('span-erro');

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i] //elemento pertence ao escopo for, por não existir fora do for 
        var elementoPai = elemento.parentNode;
        elementoPai.removeChild(elemento)
    }

    if (text != '') {
        campo.classList.add('border-danger', 'text-danger');

        var spanErro = document.createElement('span');
        spanErro.innerHTML = text;
        spanErro.classList.add('span-erro', 'text-danger', 'font-weight-bold');
        
        var elementoPaiDoInput = campo.parentNode;//pega o campo pai do 'campo', no caso a div pai do input
        elementoPaiDoInput.appendChild(spanErro);


        campo.focus();
        return false;
    }

    return true;
}

function validar(){
     var campo = document.getElementById('nome');
     var nome = campo.value;
     validarCampo(nome, campo);
}
