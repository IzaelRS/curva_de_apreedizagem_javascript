//c/ heranca

class list {
     constructor() {
          this.data = [];
     }
     add(data) {
          this.data.push(data);
          console.log(this.data);

     }
};


class listaTarefas extends list { // mencionando a heranca
     constructor() {
          super();

          this.nome = 'Izael';
     }

     mostrarNomes() {
          console.log(this.nome);
     }
};

const minhaTarefas = new listaTarefas();

document.getElementById('novo').onclick = function () {
     minhaTarefas.add('minha tarefas');

};

minhaTarefas.mostrarNomes();
/////////////////////////////////////////////////////////////////////////////////




