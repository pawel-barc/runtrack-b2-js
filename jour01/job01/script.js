
function myUpperCase(string) {
    return string.replace(/\s+/g, '').toUpperCase();
}

function testMyUpperCase() {
    const inputString = document.getElementById('inputString').value;
    const result = myUpperCase(inputString);
    
    document.getElementById('result').textContent = result;
}

console.log('Script JS chargé correctement');
