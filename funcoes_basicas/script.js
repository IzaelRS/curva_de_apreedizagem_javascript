// fucao entrar

// if = se
// || = ou
// else = senão 


function entrar() {

    var area = document.getElementById('area'); // subistitui o que esta dentro da área
    var texto = prompt('Digeite o seu nome'); // cria uma caixa de texto e amarzena o caracter

    if (texto == '' || texto == null) {
        alert('Digeite o seu nome novamente!!!');
        area.innerHTML = "Bem vindo  ... ";
    } else {
        area.innerHTML = "Bem vindo " + texto; // retorna o resultado no campo
    }
}


function entrar2(nome) {

    var area = document.getElementById('area2');
    var texto = prompt('Digeite o seu sobrenome');
    area.innerHTML = nome + " " + texto; //entrar2('Izael')


}

