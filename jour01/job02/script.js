function myCountChar(haystack, needle) {
    let count = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }
    return count;
}

function testMyCountChar() {
    const inputString = document.getElementById('inputString').value;
    const inputChar = document.getElementById('inputChar').value;

    if (inputChar.length !== 1) {
        alert("Veuillez entrer un seul caractère.");
        return;
    }

    const result = myCountChar(inputString, inputChar);

    document.getElementById('result').textContent = result;
}

console.log('Script JS chargé correctement');
