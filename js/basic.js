console.log("Olá javascript")

//var userName = "Thiago"

//document.getElementById('user-name').innerHTML = userName

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

/* var nome = "Thiago"

function boasVindas(nome){
    alert(nome + ", seja bem vindo(a)!")
}

boasVindas(nome)

function soma(n1, n2){
    return n1 + n2
}

var resultado = soma(10, 5)

console.log(resultado) */


/* var saldo = 1000

function saque(valor) {

    if(valor > saldo) {
        console.log("Valor superior ao saldo")
    } else if (valor > 700) {
        console.log("Valor do saque é superior ao máximo permitido por operação")
    } else {
        saldo = saldo - valor
    }    
}

saque(701)
console.log(saldo) */

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma msg de alerta informando que o valor é superior aoa saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é 1000 reais
// E o valor máximo é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo

// Arrays

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
//console.log(gaveteiro[0])

// var personagens = ['Mestre Yoda', 'Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Darth Vader']

// personagens.push('C3pO')
// personagens.push('R2D2')

// console.log(personagens)

// // remove sempre o ultimo item da lista
// //personagens.pop()

// // o item 'p' unidade de um personagem. Vai percorrer item por item da lista
// // no exemplo abaixo vai remover apenas o item 'Darth Vader'
// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// console.log(personagens)

// // no exemplo abaixo remove todos o itens, exceto 'Mestre Yoda'
// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

// Controles de repetição

 //var personagens = ['Mestre Yoda', 'Luke', 'Leia', 'Han Solo', 'R2d2', 'Chewbacca', 'Darth Vader']

/*  personagens.forEach(function(p){
    console.log(p)
 }) */

//  for (var i in personagens) {
//     console.log(i)
//  }

//  for (var i in personagens) {
//     console.log(personagens[i])
//  }

// for (var i = 0; i <= 10 ;i++){
//     // código será executado até a condição seja igual a false
//     console.log(i)
// }


//Objetos

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é ${this.idade} anos `)
//     }

// }

// console.log(yoda)
// yoda.mostraIdade()

// Constantes

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)