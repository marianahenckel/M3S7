
    let n1;
    let n2;
    let operacao;
    let resultado;
    

function Calculadora() {

    n1 = parseFloat(prompt("Digite um numero: "));
    n2 = parseFloat(prompt("Digite um segundo numero: "));
   operacao= prompt("Escolha uma operação: (+, -, *, /, %, **): ");

}
   while (!nu1 || !n2){
    Calculadora()
   }
         switch(operacao){
        case '+':
            resultado = n1 + n2;
            console.log(` ${n1} + ${n2} = ${resultado}`);
            alert(`${resultado}`);
            break;
        case '-':
            resultado = n1 - n2;
            console.log(` ${n1} - ${n2} = ${resultado}`);
            alert(`${resultado}`);
            break;
        case '*':
            resultado = n1 * n2;
            console.log(` ${n1} * ${n2} = ${resultado}`);
            alert(`${resultado}`);
            break;
        case '/':
            resultado = n1 / n2;
            console.log(` ${n1} / ${n2} = ${resultado}`);
            alert(`${resultado}`);
            break;
        case '%':
            resultado= n1%n2;
            alert(`${resultado}`);
            break;
        case '**':
            resultado = Math.pow(n1,n2);
            alert(`${resultado}`);
            break;
            default:
        console.log("Comando invalido!")
        break;

    }
    

    