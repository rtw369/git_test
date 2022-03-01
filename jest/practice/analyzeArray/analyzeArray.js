function analyzeArray(array) {
    let maxVal = array[0];
    let minVal = array[0];
    let average = 0;
    let length = array.length;

    for(let i = 1; i < array.length; i++) {
        maxVal = Math.max(maxVal, array[i]);
        minVal = Math.min(minVal, array[i]);
    }

    for(let i = 0; i < array.length; i++) {
        average += array[i];
    }

    average = (average)/(length);

    const result = {
        average: average,
        min: minVal,
        max: maxVal,
        length: length
    };

    return result;
}

module.exports = analyzeArray;