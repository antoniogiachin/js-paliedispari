// Creo funzione per capire se parola inserita e' palindroma

function palindromCheck (word1, word2){

    let ritorno;
    // le parole devono essere per forza lunghe uguali
    if (word1 < word2 || word1 > word2){
        ritorno= "non sono palindrome!"
    } else{

        //Ciclo i caratteri delle parole
        for(let i = 0; i < word1.length; i++){

            /* i caratteri sono numerati come array da 0 in poi se nel ciclo corrispondono
            sono palindrome altrimenti no */

            if(word1[i] === word2[i]){
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