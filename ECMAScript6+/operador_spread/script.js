

function cadastroPessoa(info) {
     let novosDados = {
          ...info,
          cargo: 'Programador'
     };
     return novosDados;
}
//criando um objeto dentro da fun
console.log(cadastroPessoa({
     nome: 'Izael',
     Sobrenome: 'Rodrigues',
     Idade: 27,
}));

//{nome: 'Izael', Sobrenome: 'Rodrigues', Idade: 27, cargo: 'Programador'}