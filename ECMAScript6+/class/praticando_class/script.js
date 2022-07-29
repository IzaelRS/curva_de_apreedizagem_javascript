{/*
class Pessoa {
     constructor() {
          this.nome = '',
               this.sobrenome = ''
     }
     //metodo
     nomePessoa(primeironome) {
          this.nome = primeironome;
          console.log("Meu nome é: " + this.nome);
     }
     nomePessoaSobre(segundonome) {
          this.sobrenome = segundonome;
          console.log("Meu Sobrenome é: " + this.sobrenome);
     }


};


let pessoaN = new Pessoa();
pessoaN.nomePessoa("Izael");

let pessoaS = new Pessoa();
pessoaS.nomePessoaSobre("Rodrigues");
*/}

class Pessoa {
     constructor() {
          this.nome = '',
               this.sobrenome = ''
     }
     //metodo
     nomePessoa(primeironome) {
          this.nome = primeironome;
          console.log("Meu nome é: " + this.nome);
     }
     nomePessoaSobre(segundonome) {
          this.sobrenome = segundonome;
          console.log("Meu Sobrenome é: " + this.sobrenome);
     }

     nomeCompleto() {
          let nomeCompleto = this.nome + " " + this.sobrenome;
          console.log(nomeCompleto);
     }


};


let pessoa1 = new Pessoa();

pessoa1.nomePessoa("Izael");

pessoa1.nomePessoaSobre("Rodrigues");

pessoa1.nomeCompleto();

