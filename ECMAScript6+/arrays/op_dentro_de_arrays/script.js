const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map // passa dentro do array e pega o item e o modifica 
const newList = list.map(function (item) {
     return item * 5;
});
console.log(newList)
{/*//Array(9)
0: 5
1: 10
2: 15
3: 20
4: 25
5: 30
6: 35
7: 40
8: 45
length: 9
*/}


//index // conta a posicao
const newList2 = list.map(function (item, index) {
     return item + index; // o item + a posicao
});
console.log(newList2)
{/*
(9) [1, 3, 5, 7, 9, 11, 13, 15, 17]
*/}


//reduce //
const soma = list.reduce(function (total, proxItem) {
     return total + proxItem; //esta pegando o total e somando com proximo item
});

console.log(soma)
//45

//find
const find = list.find(function (item) {
     return item === 6; //se tiver 6 dentro da lista vai retorn algum numero, se nao, retorna underfined

});
console.log(find)
//6