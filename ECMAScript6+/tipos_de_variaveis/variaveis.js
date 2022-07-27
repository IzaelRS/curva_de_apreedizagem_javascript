//var pode ser acessada fora do escopo

// let não pode ser acessada fora do escopo

var lista = [1, 2, 3];

for (var i in lista) {
     console.log(lista[i]);
}
// resultado '2'



for (let b in lista) {
     console.log(lista[b]);
}



//resultado: not defined

//ex: de como resolver 

let nome = 'Izael';

let idade = 10;

if (idade == 10) {
     console.log(nome);

}

/////////////////////////////////////////////////////////////////////////////////

//const não muda o valor