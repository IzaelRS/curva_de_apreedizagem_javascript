// buscando dentro da div App a UL 'lista'
var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || []; // converte valores

var todos = ['estudar'];


// vai percorrer toda a lista "todos" e amazenar dentro de todo
function renderTodos() {

     listElement.innerHTML = ''; // serve para limpar sempre que há push de um novo item, assim nao copia os elementos da antiga lista 

     for (todo of todos) {
          console.log(todo); // só serve para exibir no console

          var todoElement = document.createElement('li'); // cria a lista

          var todoText = document.createTextNode(todo); // mostra o texto


          // <a href = "#"> </a>
          var linkElement = document.createElement('a');
          linkElement.setAttribute('href', '#');

          var posicao = todos.indexOf(todo); // saber a posicao de um objeto dentro da lista pelo nome

          linkElement.setAttribute('onclick', 'deletarTodo(' + posicao + ')');

          var linkText = document.createTextNode('Excluir');
          linkElement.appendChild(linkText); // <a href = "#"> Excluir </a>



          todoElement.appendChild(todoText); // motra o resultado no HTML
          todoElement.appendChild(linkElement); // mostra o botao de excluir
          listElement.appendChild(todoElement); // motra o resultado no HTML

     }
}

renderTodos();

function adicionarTodo() {

     //verificacao para nao adicionar nada em branco

     if (inputElement.value == '') {
          alert('Digite alguma tarefa !');
          return false; // deixa o botao inutilizavel 
     } else {
          // pega o que foi didtado no input e armazena no todotext
          var todoText = inputElement.value;

          // adicionando na lista
          todos.push(todoText);
          inputElement.value = ''; // serve para limpar o que esta escrito dentro da caixa
          renderTodos();
          salvarDados();

     }

}

// coloacandoa a funcao no botao 
buttonElement.onclick = adicionarTodo;

function deletarTodo(posicao) {
     // splice remove algo da lista passando a posicao e o item do array
     todos.splice(posicao, 1);
     renderTodos();
     salvarDados();

}

function salvarDados() {
     localStorage.setItem('lista_todos', JSON.stringify(todos));
}