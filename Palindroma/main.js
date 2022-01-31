// Creo funzione per capire se parola inserita e' palindroma

function palindromCheck (word){
    //Creo variabile per return
    let ritorno;

    // creao variabile per una seconda parola, uguale la prima ma da rovesciare
    let word2 = word;
    console.log( 'la parola da rovesciare è ' ,word2)

    // Creo un array di lettere della parola
    let wordSplit = word2.split('');
    console.log( 'array di parola 2 è ' ,wordSplit)
    // Rovescio l'array
    let wordReverse = wordSplit.reverse();
    console.log( 'array di parola 2 rovesciato è ' ,wordReverse)
    // Unisco l'array in una parola
    let ups2 = wordReverse.join('');
    console.log(ups2);

    // Ciclo i caratteri delle parole
    for(let i = 0 ; i < word.length; i++){

        if(word[i] === ups2[i]){
            ritorno = "La parola inserita è palindroma!"
        } else {
            ritorno = 'La parola inserita non è palindroma!'
        }

    }

    return ritorno
}

const button = document.getElementById('go');

button.addEventListener('click',

    function(){
        
        // Raccolgo le parole inserite nel form
        let userWord = document.getElementById('word1').value;
        console.log(userWord);

        // Eseguo la verifica usando la funzione
        let verification = palindromCheck(userWord);
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

        input.innerHTML=`Hai inserito la seguente parola: `;

        wordList.innerHTML = `<li> ${userWord}</li>`;

        wordResult.innerHTML = `${verification}`;
    }


);