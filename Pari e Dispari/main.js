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


// Riferimento elementi DOM

    // Righe
const firstRow = document.getElementById('first-row');

const secondRow = document.getElementById('second-row');

const thirdRow = document.getElementById('third-row');

    // Elementi da innerHtml
const choicesHtml = document.getElementById('choices');

const computerNumberHtml = document.getElementById('computer-number');

const sumHtml = document.getElementById('sum');

const resultHtml = document.getElementById('result');


    //buttons
const button1 = document.getElementById('next1');

const button2 = document.getElementById('next2');


// Click button 1
button1.addEventListener('click',

    function(){

        // Prelevo scelta utente
        const usrPick = document.getElementById('odd-even').value;

        //Verifico dato inserito da utente
        if(usrPick !== 'Pari' && usrPick!== 'Dispari'){
            
            alert('Non hai scelto correttamente!');
            window.location.reload();
            
        }   

        // Nascondo prima row e mostro seconda
        firstRow.classList.add('d-none');

        secondRow.classList.remove('d-none');
                        
        // Click button 2
        
        button2.addEventListener('click',
        
            function(){
        
                // Prelevo scelta numero utente
                const usrNumber = document.getElementById('npick').value;


                //Controllo se utente sceglie numero corretto
                if(usrNumber <= 0  || isNaN(usrNumber) || usrNumber >= 6){                    
                
                    alert('Errore, inserisci un numero valido!');
                    
                } else{
        
                    secondRow.classList.add('d-none');
    
                    thirdRow.classList.remove('d-none');
        
                }
    
                console.log('L utente ha scelto: ' , usrPick);

                console.log('Il numero scelto dall utente e: ' , parseInt(usrNumber));

                // Calcolo numero random pc
                computerNumber = randomComputerNumber();
                console.log('numero pc ', computerNumber);

                // Funzione evenOdd
                let sommaFunzione = evenOddSum(parseInt(usrNumber), computerNumber);
                console.log(sommaFunzione);


                // Scrivo nel DOM
                choicesHtml.innerHTML = `

                    <li> ${usrPick} </li>
                    <li> ${usrNumber} </li>

                `;

                computerNumberHtml.innerHTML = `<p> Il numero del Computer e' ${computerNumber}`;

                sumHtml.innerHTML = `<h2> La somma dei numeri e': ${sommaFunzione}`;

                resultHtml.innerHTML = `<h1>`

                  // Decreto vittoria o sconfitta
                  if(sommaFunzione == usrPick){
                    resultHtml.innerHTML = `<h1> Complimenti hai vinto </h1>`;                    
                } else{
                    resultHtml.innerHTML = `<h1> Peccato hai perso! </h1>`;
                }
                

            }
            
            
        );
        
    }
    
);
    
        
        
        
        
   
