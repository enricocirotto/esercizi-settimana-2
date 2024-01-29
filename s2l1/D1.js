/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1

variabili con valore numerico: "let numero = 10"

Le variabili con valori numerici in JavaScript sono come scatole in cui puoi mettere i tuoi numeri per usarli più tardi. Immagina che ogni scatola abbia un'etichetta con un nome, e dentro ci sia un numero.

variabili con valori di tipo stringa: let saluto = "Ciao, mondo!"

Le variabili con valori di tipo stringa in JavaScript sono come contenitori magici in cui puoi mettere sequenze di caratteri, come parole o frasi, per usarle nel tuo programma.

variabili con valori booleani: let èSole = true


Le variabili con valori booleani in JavaScript sono come piccoli interruttori che possono essere accesi o spenti, rappresentando le condizioni di verità o falsità

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 let myName = "enrico"; 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

 let numero1 = 12;
let numero2 = 20;

let risultato = numero1 + numero2;

console.log("La somma di", numero1, "e", numero2, "è:", risultato);

/*  ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 let x = 12; 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

 let Name = "enrico";
Name = "cirotto"; 
console.log("valore di Name:", Name);

const myConstName = "Costante Nome";
/* let myConstName = "enrico";  se tolgo le sbarre la console mi da errore in live server*/
console.log("messaggio");



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/



let risultatoSottrazione = 4 - x;

// Visualizzazione del risultato
console.log("La sottrazione tra 4 e x è:", risultatoSottrazione);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1="jhon"
let name2="Jhon"
console.log(name1!==name2);
if(name2="jhon")   
  console.log(name1==name2)
