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


let firstWord = "cane"
let secondWord = 'cane'

let verify = palindromCheck(firstWord, secondWord);
console.log(verify);