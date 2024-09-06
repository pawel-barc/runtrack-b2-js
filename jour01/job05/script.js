
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

function myPrimeList(limit) {
    const primes = [];

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i); 
        }
    }

    return primes; 
}

function displayPrimes() {
    const inputNumber = document.getElementById('number').value;
    const limit = parseInt(inputNumber);

    const primes = myPrimeList(limit); 

    document.getElementById('result').textContent = 'Prime numbers: ' + primes.join(', ');
}

console.log('Script JS loaded correctly');
