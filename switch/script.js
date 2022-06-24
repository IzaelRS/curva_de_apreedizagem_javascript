//
// el;e executa a escolha 

/*
x = 2;

switch (x) {

    case 0:
        alert(" O x vale 0 !");
        break;
    case 1:
        alert(" O x vale 1 !");
        break;
    case 2:
        alert(" O x vale 2 !");
        break;
}

*/
document.write("</br> Escolha o seu pedido: </br>");
document.write("</br> 0 - sorvete / 1 - Suco </br>");
document.write("</br> 2 - coca-cola / 3 - cachorro quente </br></br></br>");

function pedir() {

    x = prompt(" O que deseja pedir ?")
    // é nescessario fazer a conversao de strig para int ou passar os valores como strings

    switch (x) {

        case "0":
            alert(" sorvete !");
            break;
        case "1":
            alert(" Suco !");
            break;
        case "2":
            alert(" coca-cola!");
            break;
        case "3":
            alert(" cachorro-quente!");
            break;

        // serve para tratar erros ou quando o usuario digita uma coisa que n
        // correspode o que foi pedido.
        default:
            alert("Ops, náo temos essa opção");
            break;
    }
}