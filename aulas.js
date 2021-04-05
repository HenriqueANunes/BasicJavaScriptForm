/*
Divisivel por 3 => Fizz
Divisivel por 5 => Buzz
Divisivel por 3 e 5 => FizzBuzz
Não é divisivel por 3 e 5 => entrada
Não é um numero => "não é um numero"
 */


function fizzBuzz(number){

    let div3 = false;
    let div5 = false

    if(typeof number !== "number"){
        return "Não é um numero";
    }

    if(Number.isInteger(number/3)){
        div3 = true;
    }

    if(Number.isInteger(number/5)){
        div5 = true;
    }

    if(div3 && div5){
        return "FizzBuzz";
    }

    if(!div3 && !div5){
        return number;
    }

    return div3 ? "Fizz" : "Buzz";

}


/*
Velocidade maxima 70km/h
a cada 5km/h acima do limite a pessoa ganha 1 ponto na carteira
Math.floor()
caso pontos maior q 12 => "carteira suspendia"
*/

function verificarVelocidade(velociade){
    const limite = 70;

    if(velociade > limite){
        const kmPorPonto = 5;
        const maxPonto = 12;

        let pontos = 0;
        let extra = velociade - limite;


        pontos = Math.floor(extra / kmPorPonto);

        if(pontos > maxPonto){
            return "Carteira suspendida";
        }
        return pontos + " pontos adicionados a sua carteira";

    }

    return "Safe!";

}

/*
Criar uma método para ler propriedades  de um objeto e
exibir  somente as propriedades do tipo string q estão nesse objeto
*/

const filme = {
    titulo: "Vingadores",
    ano: 2018,
    diretor: "robin",
    personagem: "homem de ferro",
    duracaoH: 3
}

function exibirPropriedades(objeto){
    const result = {};
    for(atributo in objeto){
        if(typeof objeto[atributo] === "string"){
            result[atributo] = objeto[atributo];
        }
    }
    return result;
}


/*
Criar um array de faixa de preço
*/

//primeira opção
let faixas = [
    {tooltip: 'até R$700,00', minimo: 0, maximo: 700},
    {tooltip: 'de R$700,00 até R$1000,00', minimo: 700, maximo: 1000},
    {tooltip: 'mais de R$1000,00', minimo: 1000, maximo: 99999}

];

//segunda opção (factoory function)
function criarFaixa (tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}


let faixas2 = [
    criarFaixa('até R$700,00',0,700),
    criarFaixa('de R$700,00 até R$1000,00',700,1000),
    criarFaixa('mais de R$1000,00',1000,99999)
];

//terceira opção (constructor function)
function FaixaPreco (tooltip, minimo, maximo){
    this.tooltip = tooltip;
    this.minimo = minimo;
    this.maximo = maximo;
}

let faixas3 = [
    new FaixaPreco('até R$700,00',0,700),
    new FaixaPreco('de R$700,00 até R$1000,00',700,1000),
    new FaixaPreco('mais de R$1000,00',1000,99999)
];

// Adicionando elementos em Array

let numeros = [1,2,4];
console.log(numeros);

//inicio
numeros.unshift(0);
console.log(numeros);

//meio
numeros.splice(1,0,3);
console.log(numeros);

//final
numeros.push(5);
console.log(numeros);

// Encontrando elementos (primitivos)
console.log(numeros.indexOf(4));
console.log(numeros.includes(4));

//arrow funcion

let array = [
    {id: 1, nome:"teste"},
    {id: 2, nome:"teste2"},
    {id: 3, nome:"teste3"}

]

let arrowFuncion = array => array.nome === "teste";

console.log(arrowFuncion(array));
