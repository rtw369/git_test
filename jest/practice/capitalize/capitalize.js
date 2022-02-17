function capitalize (string) {
    let firstLetter = string.charAt(0);
    let remainder = string.substring(1);
    let result;

    firstLetter = firstLetter.toUpperCase();

    result = firstLetter+remainder;

    return result;
}

module.exports = capitalize;