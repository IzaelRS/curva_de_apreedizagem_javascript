let primeiros = [1, 2, 3];


// ele anexa diretamente um array dentro de outro
//numeros (6) [1, 2, 3, 4, 5, 6]

let numeros = [...primeiro, 4, 5, 6];



//objeto

let pessoa = {
     nome: "Izael",
     sobrenome: "Rodrigues"
};

let novaPessoa = {
     ...pessoa,
     cargo: "Desenvolvedor"
};

//novaPessoa {nome: 'Izael', sobrenome: 'Rodrigues', cargo: 'Desenvolvedor'}

