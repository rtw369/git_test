function caesarCipher(string, shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    string = string.toLowerCase();
    let stringArr = string.split("");
    alphabet = alphabet.split("");
    let shiftedAlphabet = new Array(0);
    let finalString = "";

    for(let i = shift; i < alphabet.length; i++) {
        shiftedAlphabet.push(alphabet[i]);
    }
    for(let i = 0; i < shift; i ++) {
        shiftedAlphabet.push(alphabet[i]);
    }

    for(let i = 0; i < stringArr.length; i++) {
        for(let j = 0; j < alphabet.length; j++) {
            if(stringArr[i] == alphabet[j]) {
                finalString += shiftedAlphabet[j];
            }
        }
        if(stringArr[i] == " ") finalString += " ";
        if(stringArr[i] == ".") finalString += ".";
        if(stringArr[i] == ",") finalString += ",";
        if(stringArr[i] == "!") finalString += "!";
        if(stringArr[i] == "?") finalString += "?";
    }

    return finalString;
}

module.exports = caesarCipher;