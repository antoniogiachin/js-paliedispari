// Creo funzione per capire se parola inserita e' palindroma

function palindromCheck (word1, word2){

    let ritorno;
    // le parole devono essere per forza lunghe uguali
    if (word1 < word2 || word1 > word2){
        ritorno= "non sono palindrome!"
    } else {

        //Ciclo i caratteri delle parole
        for(let i = 0; i < word1.length; i++){

            /* rovescio sotto sopra la word2*/

            let split2 = word2.split('');
            // Crea un Array con le lettere

            // Rovesciamo Array
            let reverse2 = split2.reverse();

            // Converto di nuovo in stringa reverse2
            let upsWord2 = reverse2.join('');


            if(word1[i] === upsWord2[i]){
                ritorno = 'sono palindrome!'
            } else {
                ritorno = 'non sono palindrome!'
            }

        }

    }

    return ritorno;



}

const button = document.getElementById('go');

button.addEventListener('click',

    function(){
        
        // Raccolgo le parole inserite nel form
        let firstWord = document.getElementById('word1').value;
        let secondWord = document.getElementById('word2').value;
        console.log(firstWord);
        console.log(secondWord);

        // Eseguo la verifica usando la funzione
        let verification = palindromCheck(firstWord, secondWord);
        console.log(verification);

        // Scambio visibilita' dei due div row
        const inputRow = document.getElementById('input-row');
        inputRow.classList.add('d-none');

        const resultRow = document.getElementById('result-row');
        resultRow.classList.remove('d-none');

        // Inietto contenuto in row2
        const input = document.getElementById('input');

        const wordList = document.getElementById('word-list');

        const wordResult = document.getElementById('word-result');

        input.innerHTML=`Hai inserito le seguenti parole: `;

        wordList.innerHTML = `<li> ${firstWord}</li> <li> ${secondWord}</li>`;

        wordResult.innerHTML = `Le due parole ${verification}`;
    }


);