{/*
function minhaLista(nomes) {
     console.log(nomes);
};

minhaLista("Izael", "Patricia", "Pablo");
*/}

//sem rest: Izael


{/*function minhaLista(...nomes) {
     console.log(nomes);
};

minhaLista("Izael", "Patricia", "Pablo");
*/}

//com rest: (3) ['Izael', 'Patricia', 'Pablo']

function cadastrar(users, ...newUsers) {
     //anexando usuarios
     let totaluser = [
          ...users,
          ...newUsers
     ]
     return console.log(totaluser); //(5) ['Patricia', 'Fernando', 'Felipe', 'Pablo', 'Barbara']

}

let users = ['Patricia', 'Fernando', 'Felipe'];

let newUsers = cadastrar(users, 'Pablo', 'Barbara');