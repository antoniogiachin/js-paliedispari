function palindromCheck (word){
    //Creo variabile per return
    let ritorno;

    // creao variabile per una seconda parola, uguale la prima ma da rovesciare
    let word2 = word;

    // Creo un array di lettere della parola
    let wordSplit = word2.split('');

    // Rovescio l'array
    let wordReverse = wordSplit.reverse();
    
    // Unisco l'array in una parola
    let ups2 = wordReverse.join('');
    console.log(ups2);

    // Ciclo i caratteri delle parole
    for(let i = 0 ; i < word.length; i++){

        if(word[i] === ups2[i]){
            ritorno = "La parola inserita non è palindroma!"
        } else {
            ritorno = 'La parola inserita è palindroma!'
        }

    }

    return ritorno
}


let parola = palindromCheck('ciccio');

console.log(parola)
