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



// Riferimento a button next1
const button = document.getElementById('next1');

// Riferimento a next2
const button2 = document.getElementById('next2');

// Riferimento alle 3 row
const firstRow = document.getElementById('first-row');
const secondRow = document.getElementById('second-row');
const thirdRow = document.getElementById('third-row');

//Mi riferisco a elementi row 1
// const usrPick = document.getElementById('odd-even');

// const usrNumber =document.getElementById('n-pick');


//Mi riferisco a elementi row 3
const choicesHtml = document.getElementById('choices');

const pcNumberHtml = document.getElementById('computer-number');

const sumHtml = document.getElementById('sum');

const resultHtml = document.getElementById('result');


button.addEventListener('click',

    function(){

        // Chiedo all'utente di scegliere tra pari e dispari
        let usrPick = document.getElementById('odd-even').value;
        console.log('Hai scelto:' , usrPick);
        
        //Se utente sceglie diversamente
        if(usrPick !== 'Pari' && usrPick !== 'Dispari'){
            
            alert('Non hai scelto correttamente!');
            window.location.reload();
            
        }        
        
        firstRow.classList.add('d-none');
        secondRow.classList.remove('d-none');
    }


);


button2.addEventListener('click',

    function(){

        // Chiedo all'utente di scegliere un numero tra 1 e 5
        let usrNumber = document.getElementById('n-pick').value;


        //Se non sceglie un numero corretto
        if(usrNumber <= 0  || isNaN(usrNumber) || usrNumber >= 6){                    
        
            alert('Errore, inserisci un numero valido!');
            
        } else{
            
            console.log('Hai scelto il numero: ' , usrNumber);
    
            secondRow.classList.add('d-none');
    
            thirdRow.classList.remove('d-none');

            choicesHtml.innerHTML = `<li> ${usrPick} </li> <li> ${usrNumber}</li>`
        }

    }

);


// Estraggo numero casuale per computer 
let computerNumber = randomComputerNumber();
console.log("E' stato estratto il numero: " , computerNumber);

pcNumberHtml.innerHTML = `<h2> Il numero del computer e' ${computerNumber} </h2>`

//Sommo i numeri e calcolo se pari o dispari con funzione
let result = evenOddSum(usrNumber, computerNumber);
console.log('La somma dei due numeri fa: ' , result);

sumHtml.innerHTML = `La somma dei due numeri e' ${result}`;

if(result == usrPick){
    alert('Hai vinto!');
    resultHtml.innerHTML = `<h2> Complimenti hai vinto! </h2>`;
} else {
    alert('Hai perso!');
    resultHtml.innerHTML = `<h2> Complimenti hai vinto! </h2>`;
}



