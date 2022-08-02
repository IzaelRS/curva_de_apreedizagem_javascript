//https://api.github.com/repos/ VALOR DIGITADO
// 20220801202808
// https://api.github.com/repos/angular/angular

var div = document.querySelector("#repos"); // pegando a div
var listElement = document.querySelector("#repos ul"); // pegando a lista dentro da div

var repositorios = [];

//////// buscando a requisicao
function buscaRepos() {
	const input = document.querySelector("#input"); // pega valor do input da pesquisa 

	//verifica se foi digitado algo da pesquisa 
	if (input.value === '') {
		alert('Insira nome abaixo');
		return;
	}

	//filtrando para que nào haja valores duplicados
	const hasRepo = repositorios.find(repos => repos.full_name === input.value);

	if (hasRepo) {
		alert('Este repositorio já esta incluso');
		return;
	}

	const response = fetch(`https://api.github.com/repos/${input.value}`)
		.then(res => res.json())
		.then(json => {
			console.log(json); //verificacao
			repositorios.push(json);// colocando o arquivo json dentro so array
			input.value = ''; // depois de add, deixa fazio, para nao repetir...

			renderRepos();
		})

}

//////listando 
function renderRepos() {
	listElement.innerHTML = '';

	for (repos of repositorios) {
		let repoElement = document.createElement('li');
		repoElement.setAttribute('style',
			'text-decoration: none; list-style:none;')

		// criando a tag img com o link
		let avatarElement = document.createElement('img');
		avatarElement.src = repos.owner.avatar_url;
		avatarElement.setAttribute('style',
			'width: 24px; height: 24px; border-radius: 12px;');



		//botao excluir
		let linkElement = document.createElement('button');
		linkElement.textContent = 'Excluir';

		let posicao = repositorios.indexOf(repos);

		linkElement.setAttribute('onclick', 'deletarRepos(' + posicao + ')');


		let name = document.createTextNode(repos.full_name);// filtrando da lista

		repoElement.appendChild(avatarElement);
		repoElement.appendChild(name);
		repoElement.appendChild(linkElement);
		listElement.appendChild(repoElement);

	}
}

function deletarRepos(posicao) {
	repositorios.splice(posicao, 1);
	renderRepos();
	alert(`Você acaba de excluir um item, nome de item: ${''} ${repos.full_name}`);
}
