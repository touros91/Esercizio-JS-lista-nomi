//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// creo un array con la lista degli invitati
var invitati = ["Luigi", "Andrea", "Francesco", "Marco", "Chiara"];

// chiedo all'utente di inserire il suo nome
var nomeUtente = prompt("Inserisci il tuo nome");

// verifico se il nome utente è presente nella lista

// dichiaro una variabile con valore false
var trovato = false;

// controllo se il nome utente inserito è uguale ad uno dei nomi presente nell'array, se è presente assegno alla variabile il valore true
for (var i = 0; i < invitati.length; i++) {
    if ( nomeUtente == invitati[i]) {
        trovato = true;
    }
} 

// se il valore della varabile è true, mostro il messaggio "Puoi entrare", altrimenti mostro "Non puoi entrare"
if ( trovato == true ) {
    alert("Puoi accedere");
} else {
    alert("Non puoi accedere");
}