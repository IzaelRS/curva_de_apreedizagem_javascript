// 1 criar o balao
// 2 estrourar o balao
// 3 carregar o jogo


//contador
var total = 0;


//criar balao
function criarBalao() {

        var balao = document.createElement('div'); //createElement cria um elemento
        balao.setAttribute('class', 'balao'); // class é um atributo // valor é style type="text/css">.balao

        var x = Math.floor(Math.random() * 600);
        var y = Math.floor(Math.random() * 400);
        //Math.random() // serve para gerar um numero aleatorio // pode ser filtrado com limite ex Math.random() * 5, até 5

        balao.setAttribute('style', 'left:' + x + 'px;top:' + y + 'px;');
        //<div class='balao' style='left:30px; top:60px'></div>

        //estourar o balao

        balao.setAttribute('onclick', 'estourar(this)');

        //mostrar
        document.body.appendChild(balao);

}

//estourar os baloes
function estourar(objeto) {
        document.body.removeChild(objeto);

        total++;

        var score = document.getElementById('total');
        score.innerHTML = "Baloes estourados: " + total;
}

// Carreagr jogo

function carregarJogo() {
        setInterval(criarBalao, 1000);
}



