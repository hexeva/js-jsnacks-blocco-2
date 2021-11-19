
const names = ['paolo','luca','mario','silvia'];
const surnames = ['galasso','rossi','bianchi','verdi'];
const randomArray = [];


for ( i = 0; i < names.length; i++) {

thisNames = names[Math.floor( (Math.random() * (names.length - 1 + 1) ];
thisSurnames = surnames[Math.floor((Math.random() * (names.length - 1 + 1) + 1)];

randomNames = thisNames +' '+ thisSurnames; 

randomArray.push(randomNames);

alert(randomArray);

}

