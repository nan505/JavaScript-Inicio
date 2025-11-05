// Boas práticas
    /*
        Não declarar variáveis com var;
        Nomes descritivos e significativos;
        Funções não muito longas;
        Utilizar const sempre que possível ao invés de let;
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

//     Laços de repetição

// Arrays --> vetor

// Funções personalizadas