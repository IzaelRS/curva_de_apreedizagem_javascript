// some == algum //// se tiver pelo menos um

let nomes = ['Izael', 'Lucas', 'Felipe'];
// se n que vai receber nome tiver pelo menos Izael, verdadeiro
console.log(nomes.some(n => n === 'Izael'));
//true

//////////////////////////////////////////////

//every == todos //// tiver todos os itens


//array de objeto
let registro = [
	{ nome: 'Izael', idade: '29', sexo: 'masculino' },
	{ nome: 'Patrica', idade: '32', sexo: 'Feminino' }
];

console.log(registro.every(registro => registro.idade >= 18));
// verifica se todos registro.idade são maiores que 18 ano, se sim true, se não false
//true


console.log(registro.every(registro => registro.idade >= 18) &&
	(registro.every(registro => registro.sexo == 'masculino')));
// verifica se todos registro.idade são maiores que 18 ano, e se todos os sexos são masculinos
//false

if (registro.every(registro => registro.idade >= 18)) {
	console.log('TODOS SãO MAIORES')
} else {
	console.log('TODOS SãO MENORES')
}