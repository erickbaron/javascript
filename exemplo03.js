function calcularIMC(){
    var campoAltura = document.getElementById("altura");
    var campoPeso = document.getElementById("peso");

    var pesoString = campoPeso.value.replace(',','.');
    var alturaString = campoAltura.value.replace(',','.');

    var peso = parseFloat(pesoString);
    var altura = parseFloat(alturaString);

    var imc = peso / (altura * altura);
    var h3 = document.getElementById("resultado");
    h3.innerHTML= "IMC: " + imc;

    if(imc < 25){
        //verde
        h3.style.color = "rgb(120,200,102)"
    }else if (imc< 35){
        //laranja
        h3.style.color = "rgb(255,165,0)"
    }else{
        //vermelho  
        h3.style.color = "rgb(255,40,0)"
    }

}