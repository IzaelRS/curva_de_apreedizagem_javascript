/*
Abaixo de 17   Muito abaixo do peso
Entre 17 e 18,49 Abaixo do peso
Entre 18,5 e 24,99 Peso normal
Entre 25 e 29,99 Acima do peso
*/

// peso/(altura*altura);

var peso;
var altura;
var imc;
var resultado;

function calcular() {
        peso = document.getElementById("peso").value;
        altura = document.getElementById("altura").value;
        imc = peso / (altura * altura);

        if (imc < 17 || imc == 17) {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3 style = "color: #FF0000" > Cuidado !!! Voce esta muito abaixo do peso </h3>'
                document.getElementById('peso').value = ''; // serve para limpar o campo
                document.getElementById('altura').value = '';
                return false;
                //toFixed, serve para configurar as casa decimais 
                //return false, serve para não enviar a requisicao e mostrar na tela
                //resultado, é o campo da <div>

        } else if (imc > 17 && imc < 18.49) {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3 style = "color: #ffc775" > Atencao !!! Voce esta um pouco abaixo do peso </h3>'
                document.getElementById('peso').value = '';
                document.getElementById('altura').value = '';
                return false;

        } else if (imc > 18.5 && imc < 24.99) {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3 h3 style = "color: #608c55" > Otimo !!! Voce esta com o peso certo !!! </h3>'
                document.getElementById('peso').value = '';
                document.getElementById('altura').value = '';
                return false;

        } else if (imc > 25 && imc < 29.99) {
                resultado = document.getElementById('resultado');
                resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3 style = "color: #FF0000" > Atencao!!! voce esta acima do peso </h3>'
                document.getElementById('peso').value = '';
                document.getElementById('altura').value = '';
                return false;

        } else {
                return false;

                // retun false, serve para nao fazer nada
        }

}