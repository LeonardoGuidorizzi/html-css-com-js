'use strict'
import {showArray} from "./showArray.js"

const numbers = [10, 20, 50, 60, 70, 80, 60]
//MAP - percorre a array e retorna do mesmo tamanho modifido ou nao 
//sinatxe - array.map(callback)
//paramentros do callback
//1- Elemnto
//2- indice
//3-Array


// filter - percorre a array aplicando um callback e
// retorna um array do mesmo tamanho ou nao

//sintaxe - array.filter(callback)
//paremetro do callcack
// 1- elemento
// 2 - indice
//3 - Array 
// Retorna do back tem que ser booleano


// Reduce - percorre a array aplicando u callback 
// e retorna um valor unico
//Sintaxe - array.reduce (callback, valorInicial)
//1 - Acumulador
//2 - Elemenot
//3 - Indice
//4 - Array
// valor inicial pode ser qualquer tipo de variavel

// somar valores
const soma = (a, b) => a + b 
const valorTotal = numbers.reduce(soma, 0)
//filtrar elemento menor  que e tirar o desconto  
const desconto2 = (valor) => valor - 2
const numbersDesconto = numbers.map(desconto2)

//filtrar os elemento menores que 20
const menor20 = (valor) => valor < 20
const valorMenor20 = numbers.filter(menor20)

showArray(numbers, 'main' ,'todos os elementos ')
showArray(numbersDesconto, 'main' ,'Desconto ')
showArray(valorTotal, 'main' ,'soma de todos os valores ')
// n tem como puxar o Valortotal 


