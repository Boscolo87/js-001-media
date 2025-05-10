// Estou começando a estudar programação . Estou começando com a linguagem javascript. Elenque os principais tópoicos que um inciante precisa estudar sobre javascript.

// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "joel"
let idade = 37

// Console e Debug
console.log(nome)
console.log(idade)
nome = "renata"
idade = "25"
console.log(nome, idade)

//tipos de dados
//text == string
let cidade = "americana"

//númerico == number
let salário = 1500.35

//boleano == boolean
let fumante = false
console.log(typeof cidade)
console.log(typeof salário)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos (+ ,- ,/ ,* )
console.log(10 + 15)
let n1 = 10
let n2 = 5
console.log(n1 + n2) // soma
console.log(n1 - n2) // subtração
console.log(n1 * n2) // multiplicação
console.log(n1 / n2) // divisão
console.log(n1 % 3) //módulos(resto da divisão)

//     Operadores relacionais (> ,< ,>= ,<= ,!= , ==)
console.log(n1 == n2)//igualdade
console.log(n1 != n2) //diferente
console.log(n1 > n2) //maior
console.log(10 < 10) //menor
console.log(10 <= 10) //menor igual
console.log(150 >= 175) //maior igual

//     Operadores lógicos (! , && , || )
console.log(!10 > 2) //não
console.log(! false) // o ponto de esclamação( ! )sempre vai dar resposta contraria 

console.log(10 > 2 && 35 < 100 && n1 > n2 && 100 < 90) // E - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10 < 2 || 100 == 150 || 57 == 57) // ou - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando todas as verificações forem falsas

//desfio
let preco = 100
let precoacrescimo = 0
let precodesconto = 0

//faça um código que acrecente 17% ao preço e imprima 
precoacrescimo = preco + (preco * 0.17)
console.log("preço com acrécimo: " + precoacrescimo.toFixed(2))

// faça um código que desconte 7% do preço e imprima 
precodesconto = preco - preco * 0.07
console.log("preço com desconto: " + precodesconto.toFixed(2))


// Estrutura
//     Estrutura de controle/decisão
if (10 > 5) {
    console.log("10 é maior que 5")
} else {
    console.log("10 é menor que 100")
}
let idadedocandidato = 20
if (idadedocandidato >= 18) {
    console.log("pode dirigir")
} else {
    console.log("volte mais tarde")
}

//desafio
//faça um código que verifique se o salário do funcionário é maior que 5000,se for mostre a mensagem "salário ok" se não mostre a mensagem "precisa de um aumento de x reais"


let salariofunc = 3000
const salariobase = 5000
if (salariofunc > 5000) {
    console.log("salário ok")
} else {
    console.log("precisa de um aumento de " + (5000 - salariofunc) + " reais")
}

//     Laços de repetição
// quero mostrar 10 veses a mensagem "senac americana"
let controle = 1
while (controle <= 10) {
    console.log("senac ameicana")
    controle = controle + 1
}

controle = 1            // definição da variavel de controle
while (controle <= 100) {  // cpndição
    console.log(controle)
    controle = controle + 2 // incremento
}


// mostrar 10 veses "senac americana"
for (let i = 1; i <= 10; i = i + 1) {
    console.log("senac americana")
}

for (let i = 1; i <= 50; i = i + 1) {
    console.log(i)
}


// Arrays --> vetor
let alunos = ["joão", "paulo", "renata", "cris", "x"]
console.log(alunos)
console.log(alunos[2])
alunos[4] = "kleber"
console.log(alunos)
alunos.push("karem")
console.log(alunos)

let frutas = []
console.log(frutas)
frutas.push("🍓")
frutas.push("🍋")
frutas.push("🍊")
frutas.push("🍉")
frutas.push("🍍")
frutas.push("🥑")
frutas.push("🍈")
frutas.push("🍇")
frutas.push("🍌")
frutas.push("🍎")
console.log(frutas)


// Funções básicas
function soma(num1, num2) {
    let total = num1 + num2
    console.log("o resultado é " + total)
}
soma(100, 14)
soma(7, 3)


// Escopo

// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****

// Spread e REST  ************
