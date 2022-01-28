// Creo funzione per generare numero random tra 1 e 5 per il Pc
function randomComputerNumber() {
    
    return Math.floor(Math.random() * 5 + 1 );

}


// Creo funzione per stabilire se numero e' pari o dispari
function evenOddSum (x, y){

    let ritorno;

    // sommo i due numeri
    let sum = x + y;

    // verifico se pari o dispari
    if(sum % 2 == 0){

        ritorno= 'Pari';

    } else {

        ritorno = 'Dispari';

    }
    
    return ritorno;

}


// Chiedo all'utente di scegliere tra pari e dispari
let usrPick = prompt('Scegli Pari o Dispari');
console.log('Hai scelto:' , usrPick);

//Se utente sceglie diversamente
if(usrPick !== 'Pari' && usrPick !== 'Dispari'){
    
    alert('Non hai scelto correttamente!');
    window.location.reload();
    
}

// Chiedo all'utente di scegliere un numero tra 1 e 5
let usrNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));

//Se non sceglie un numero corretto
if(usrNumber <= 0  || isNaN(usrNumber) || usrNumber >= 6){

    let i =0;
    while(i < 1){

        alert('errore');
        usrNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));

        if(usrNumber > 0 && usrNumber < 6){            
            i++
        }

    }


}
console.log('Hai scelto il numero: ' , usrNumber);

// Estraggo numero casuale per computer 
let computerNumber = randomComputerNumber();
console.log("E' stato estratto il numero: " , computerNumber);

//Sommo i numeri e calcolo se pari o dispari ocn funzione
let result = evenOddSum(usrNumber, computerNumber);
console.log('La somma dei due numeri fa: ' , result);

if(result == usrPick){
    alert('Hai vinto!');
} else {
    alert('Hai perso!');
}



