// Objeto

const pessoa = {
     nome: 'Izael',
     sobrenome: 'Rodrigues',
     idade: '28',
     cargo: 'desenvolvedor'
};

// descontruindo
let { nome } = pessoa; //R: Izael


//criando ou alterando variavel 
let { cargo: profissao } = pessoa; //R: 'desenvolvedor'


//Array

let nomes2 = ['Izael', 'Rodrigues', '28'];

//metodo 1 
let { 1: sobrenome } = nomes2; //'Rodrigues

let { 0: nome1, 1: nome2 } = nomes2 //izael //Rodrigues


// metodo 2
let [n, n2, i] = nomes2

n // Izael

n2 // Rodrgues

i // 28
