// includes // verifica 

let nomes = ['Izael', 'Patricia', 'Pablo'];

console.log(nomes.includes('Izael'));
// TRUE

if (nomes.includes('Izael')) {
	console.log('O nome esta na lista');
} else {
	console.log('O nome não esta na lista');
}
// O nome esta na lista

/////////////////////////////////////////////////////////////
//endsWith() Se esse nome acaba com " "

let n = "Izael";

console.log(n.endsWith('l'));
//true

if (n.endsWith('l')) {
	console.log('confere');
} else {
	console.log('não confere');
}
//confere

///////////////////////////////////////////////////////////
//startsWith() // se o nome começa com ""

let K = "Izael";

console.log(K.startsWith('s'));
//true

if (K.startsWith('l')) {
	console.log('confere');
} else {
	console.log('não confere');
}
//não confere