// Boas práticas
    /*
        Não declarar variáveis com var;
        Nomes descritivos e significativos;
        Funções não muito longas;
        Utilizar === para comparações;
        Variáveis sempre com um valor declarado;
        Sempre utilizar ponto e vírgula;
        Utilizar o operador ternário sempre que possível ao invés de if;
        Preferir For Loop ao invés de forEach;
        Evitar o "new" por questões de performance;
        Declarar funções com expressões;
        Funções devem ter apenas um papel;
        Sempre declarar um valor dentro do parâmetro de uma função;
        Realizar testes unitários;
    */
// Case sensitive
    /*
        JavaScript é uma linguagem sensível a letras maiúsculas e minúsculas, diferenciando ambas.
    */

    console.log("Olá mundo!")

// Sintaxe básica e comentário
    /*
        // Uma linha de comentário
        /*
           Várias linhas de comentário 
        */
    /*
        Case-sensitive, utiliza o conjunto de caracteres Unicode;
        Instruções são chamadas de declaração e são separadas por ponto e vírgula (;);
        Espaços, tabulação e uma nova linha são chamados de espaços em branco;
    */
// Declaração de variáveis(var, let, const)

let nome = "Nan"
console.log("Olá " + nome)
nome = "Santos"
console.log(nome)
const idade = 39
console.log(idade)

// Console e Debug

console.warn("Atenção")
console.info("Informações")
console.error("Erro")

//Tipos de dados
    /*
        Número - number;
        Inteiro - int;
        Real - float;
        Booleano - bool;
        Texto - string;
    */

//string

let cidade = "Americana"

//number

let salario = 2000

//bool

let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição ( = )

salario = 2500

//     Operadores aritméticos ( + , - , * , / , %)

let n1 = 10, n2 = 5

console.log(n1+n2) // Soma
console.log(n1-n2) // Subtração
console.log(n1*n2) // Multiplicação
console.log(n1/n2) // Divisão
console.log(n1%n2) // Resto

//     Operadores relacionais (== , != , > , < , >=, <=)

console.log(n1 == n2)
console.log(n1 != n2)
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 >= n2)
console.log(n1 <= n2)

//     Operadores lógicos ( ! - não / NOT || - ou / OR && - e / AND)

let altura = 1.2
let peso = 80
let tipo = "criança"

// Muda o resultado final, se for

console.log(!10>5)

// Com || apenas uma verificação precisa ser verdadeira.

console.log(altura > 1.5 || peso < 150 || tipo != "criança")

// Com && todas as verificações devem ser verdadeiras para o resultado final ser verdadeiro.

console.log(altura > 1.5 && peso < 150 && tipo != "criança")

// Estrutura
//     Estrutura de controle/decisão

let carro = "fiat"

if(carro == "bmw"){
    console.log("Você está bem mais ou menos.") // Verdadeiro
}else{
    console.log("A vida está progredindo.") // Falso
}

let idadeAluno = 20

if(idadeAluno >= 18){
    console.log("Maior de idade.")
}else{
    console.log("Menor de idade.")
}

//     Laços de repetição

let controle = 1

while(controle <= 10){
    console.log(controle)
    controle = controle + 1
}

controle = 1

while(controle <= 10){
    console.log(7*controle)
    controle= controle + 1
}

// Arrays --> vetor

let zoologico=['Leão', 'Elefante', 'Zebra', 'Ariranha', 'Lobo Guará']

console.log(zoologico[2])
console.log(zoologico.length)

let frutas = ['🍓', '🍊', '🥭', '🍐', '🍌', '🍇', '🍉']

console.log(frutas)
frutas.push('🍎')
console.log(frutas)

let alunos=[]
alunos.push("João")
alunos.push("Renata")
alunos.push("Roberto")
console.log(alunos)

// Funções personalizadas

function mensagem(){
    console.log("Olá!")
    console.log("Seja bem-vindo!")
    console.log(" :) ")
}

mensagem()
mensagem()

function conta(horas, sal_hora){
    console.log(horas * sal_hora)
}

conta(140, 75)