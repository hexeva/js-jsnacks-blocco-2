/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */


// creo array vuoto
let empty = [];

// creo valore iniziale somma = 0
let number = 0;


// finche la somma è minore di 50
while (number <50){
let userNUmber = parseInt(prompt ('dimmi un numero'));

// salvo numeri nell'array

empty.push(number);

// aggiungo numero alla somma
number += userNUmber;

}

console.log(`risultato è ${number}`);