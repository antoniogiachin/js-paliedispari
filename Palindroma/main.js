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

let firstWord = prompt('Inserisci la prima parola');
let secondWord = prompt('Inserisci la seconda parola');

let verification = palindromCheck(firstWord, secondWord);
console.log(verification);

const input = document.getElementById('input');

const wordList = document.getElementById('word-list');

const wordResult = document.getElementById('word-result');

input.innerHTML=`Hai inserito le seguenti parole: `;

wordList.innerHTML = `<li> ${firstWord}</li> <li> ${secondWord}</li>`;

wordResult.innerHTML = `Le due parole ${verification}`;