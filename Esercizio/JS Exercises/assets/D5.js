/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primoPet = pets.shift();
pets.push(primoPet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function aArray() {
  for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = 123456789;
  }
  console.log(cars);
}

aArray();

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const nuovaCar = {
  brand: 'Toyota',
  model: 'yaris',
  color: 'blu',
  trims: ['xle'],
}

cars.push(nuovaCar);
console.log(cars);


for (let i = 0 ; i < cars.length; i++ ) {
  const trims = cars[i].trims;
  
  
  if (trims.length > 0) {

    trims.pop();
  }
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  const trimsArray = cars[i].trims;

  if (trimsArray.length > 0) {
    justTrims.push(trimsArray[0]);
  }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i =0; i < cars.length; i++) {
  const primalettera = cars[i].color.charAt(0).toLowerCase();

  // Costruisci un blocco if/else
  if (primalettera  === 'b') {
    console.log('Fizz ');
  } else {
    console.log('Buzz ')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let indice=  0;
while (indice < numericArray.length && numericArray[indice] !== 32){
  console.log(numericArray[indice]);
  indice++;
}
console.log(numericArray[13])

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

function alfabetoitalianofunzione(char) {
  switch (char.toLowerCase()) {
      case 'a':
          return 1;
      case 'b':
          return 2;
      case 'c':
          return 3;
      case 'd':
          return 4;
      case 'e':
          return 5;
      case 'f':
          return 6;
      case 'g':
          return 7;
      case 'h':
          return 8;
      case 'i':
          return 9;
      case 'l':
          return 10;
      case 'm':
          return 11;
      case 'n':
          return 12;
      case 'o':
          return 13;
      case 'p':
          return 14;
      case 'q':
          return 15;
      case 'r':
          return 16;
      case 's':
          return 17;
      case 't':
          return 18;
      case 'u':
          return 19;
      case 'v':
          return 20;
      case 'z':
          return 21;
      default:
          return
  }
}

const numericoArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const char = charactersArray[i];
  const posizione = alfabetoitalianofunzione(char);
  
  if (posizione <= 21 ) {
    numericoArray.push(posizione);
  }
}

console.log(numericoArray);
