// Give a number 'n', find the nth element of the Fibonacci sequence

function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2); 
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1 
console.log(recursiveFibonacci(6)) // 8