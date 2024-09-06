function mySquareArray(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var square = array[i] * array[i]; 
        result[i] = square; 
    }
    return result;
}

function displaySquares() {
    var input = document.getElementById('numbers').value;
    var numberArray = [];
    var currentNumber = '';

    for (var i = 0; i < input.length; i++) {
        if (input[i] !== ',') {
            currentNumber += input[i];
        } else {
            numberArray.push(parseInt(currentNumber));
            currentNumber = ''; 
        }
    }
    numberArray.push(parseInt(currentNumber)); 

    var squaredArray = mySquareArray(numberArray);

    var resultString = 'Squared numbers: ';
    for (var j = 0; j < squaredArray.length; j++) {
        resultString += squaredArray[j];
        if (j < squaredArray.length - 1) {
            resultString += ', '; 
        }
    }

    document.getElementById('result').textContent = resultString;
}
