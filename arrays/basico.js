var lista = ["Izael", "Patricia", "Pablo", 15]; // fazer lista

lista.length // mostrar quantidade de itens

lista[2] // procurar um item expecifico
'Pablo'

////////////////////////////////////////////////////////////
var lista1 = ['Izael', 'Patricia', 'Pablo', 'Bruno', 'Debora', 22, 'Iris', 360]

lista1.indexOf('pablo') // devolve a posição do array
2 // se devolver -1 é porque não existe o item dentro do array

lista1.join('/'); // passar como você que juntar a lista ex. /, * , "" ,
ex 'Izael/Patricia/Pablo/Bruno/Debora/22/Iris/360'
'Izael^Patricia^Pablo^Bruno^Debora^22^Iris^360'
'Izael*Patricia*Pablo*Bruno*Debora*22*Iris*360'

lista1.pop(); // apaga o ultimo item
360

lista1.shift(); // apaga o primeiro item
'Izael'

lista1[3] = "Jaqueline"; // subistituir item
'Jaqueline'

lista1.push('Lucas'); // acresenta um novo item
7
lista1
['Patricia', 'Pablo', 'Bruno', 'Jaqueline', 22, 'Iris', 'Lucas']

lista1.unshift('karina'); //Podemos usar o método unshift() incluir um novo elemento no início do array :
8
lista1
['karina', 'Patricia', 'Pablo', 'Bruno', 'Jaqueline', 22, 'Iris', 'Lucas']

//O método concat() cria um novo array mesclando arrays existentes:

var meninos = ["João", "Enso", "Rodrigo"];

var meninas = ["Gisele", "Fernanda", "Maria"];

var criancas = meninos.concat(meninas);
criancas
['João', 'Enso', 'Rodrigo', 'Gisele', 'Fernanda', 'Maria']



//////////////////////////////////////////////////////////////////////////

if (lista1.indexOf("Pablo") > -1) {
    alert('Esse item esta na lista');
} else {
    alert('Opa não esta na lista');
}
/// se Pablo esta dentro de lista mostre esse item esta na lista, caso ao contrário
/// Opa, não esta na lista


