// criar um objeto
function Carro() {
    this.marca = "Chevrolet";
    this.nome = "Celta";
    this.ano = "2007";
    this.potencia = "110cv";
    this.velocidadeatual = 0;

    this.ligar = function () {
        console.log(this.nome + 'Carro agora esta ligado')
    }

    this.andar = function (velocidade) {
        console.log(this.nome + 'Agora o carro esta andando');
        this.velocidadeatual = this.velocidadeatual + velocidade;
    }

    this.parar = function () {
        console.logo('Carro parado');
        this.velocidadeatual = 0;
    }
}

var carro1 = new Carro();

var carro2 = new Carro();
carro2.ano = "2015";
carro2.potencia = "90cv";
carro2.nome = "Saveiro";
carro2.marca = "Volkswagen";