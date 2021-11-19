/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */

const numbers = [1,3,6,8,9,15,20,22,];

let risultato = 0;

for (let i = 0; i < numbers.length; i++){

    serialNumbers = numbers[i];

    console.log(serialNumbers, 'indice', i);

    if ( i % 2 != 0){
        console.log(serialNumbers, 'indice', i)

        risultato += serialNumbers;

    }

}

console.log(risultato);
