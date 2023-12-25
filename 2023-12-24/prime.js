// Problem - Give a natural number 'n', determine if the number is prime or not 

function isPrime(n) {
    let count = 0; 

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        return true;
    } else {
        return false; 
    }
}

console.log(isPrime(5));
console.log(isPrime(4)); 
// isPrime(5) = true (1*5)
// isPrime(4) = false (1*4 or 2*2 or 4*1)
