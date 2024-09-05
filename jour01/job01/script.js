function myUpperCase(string) {
    return string.replace(/\s+/g, '').toUpperCase();
}

const result = myUpperCase("Hello World");
console.log(result);  
